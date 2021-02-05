[docs](https://www-users.york.ac.uk/~mijp1/teaching/2nd_year_Comp_Lab/guides/grep_awk_sed.pdf)

## lower & uppercase
```bash
my_name=aSim
# aSim

echo $my_name
# aSim

echo ${my_name^}
# ASim

echo ${my_name^^}
# ASIM

echo ${my_name,,}
# asim

distributor=$(lsb_release -is)
echo ${distributor}
Debian
echo ${distributor,,}
debian
```


## JSON
```bash
sudo apt install jq

curl -s "http://api.icndb.com/jokes/random" | jq '.value.joke'
# "A diff between your code and Chuck Norris's is infinite."
curl -s "http://api.icndb.com/jokes/random" | jq '.value.id'
# 448
```


## progress bar
```bash
#  -n     do not output the trailing newline
#  -e     enable interpretation of backslash escapes


echo -e  '\n\n echo -e  '; \
echo -ne '###############                                           (33%)\r'; \
sleep 1; \
echo -ne '###################################                       (66%)\r'; \
sleep 1; \
echo -ne '#######################################################   (100%)\r';
```


# grep
global regular expression print
```bash
grep "asim" my_file

# ignore case
grep -i "aSiM" my_file

# print line number
grep -n "asim" my_file

# print non-matching lines
grep -v "asim" my_file

# number of lines that match the query
grep -c "asim" my_file

# number of lines that match the query
grep -c "asim" my_file

# match only whole lines
grep -x "asim" my_file

-F, --fixed-strings       PATTERNS are strings
-G, --basic-regexp        PATTERNS are basic    regular expressions
-E, --extended-regexp     PATTERNS are extended regular expressions
-P, --perl-regexp         PATTERNS are Perl     regular expressions

-e, --regexp=PATTERNS     use PATTERNS for matching
-f, --file=FILE           take PATTERNS from FILE
```


# search files
```bash
# prints only the filenames of files
grep -l "boo" *
```


## cut
stream editor
```bash
echo "abcdefghi" | cut -c2-6
# bcdef

echo "birthday-091216-pics" | cut -d'-' -f 2
# 091216

my_string="a:b:c:d:e"
echo ${my_string##*:}
# e

#   ##   <-- greedy front trim
#   *    <-- matches anything
#   :    <-- until the last ':'
```


## replace regex
stream editor
```bash
echo "asim bader ahmed asim bader ahmed" | sed -e 's/asim/mohammed/'
# mohammed bader ahmed asim bader ahmed
echo "asim bader ahmed asim bader ahmed" | sed -e 's/asim/mohammed/g'
# mohammed bader ahmed mohammed bader ahmed

sed -e 's/input/output/'  my_file
sed -e 's/input/output/g' my_file

# edit the existing file
sed -i -e 's/input/output/' my_file
```

## sed commands
> `sed -e '/pattern/ command' my_file` 'command' can be one of 's' = search & replace, or 
> 'p' = print, or 'd' = delete, or 'i'=insert, or 'a'=append
```bash
# print all the lines that starts with -
ls -l | sed -n -e '/^-/ p'

# print all the lines that starts with d
ls -l | sed -n -e '/^d/ p'

# delete all lines that start with the comment symbol '#'
sed -e '/^#/ d' my_file

# delete all but the first 10 lines of a file
sed -e '11,$ d' my_file

# he first regexp defines the start of the range, and the second the stop
sed -n -e '/boot$/,/mach/p' a_file
```

>  Note that the default action is to print all lines that do not
match anyway, so if you want to suppress this you need to invoke
sed with the '-n' flag and then youcan use the 'p' command to 
control what is printed


```bash
dir="aaa/bbb/ccc/ddd_eee.txt"
echo $(echo "$dir" | sed -e 's/.*\///' -e 's/\..*//' -e 's/_/ /');
```

# AWK
created by Aho, Weinberger & Kernighan (hence the name).
> `this is a line of text` contains 6 fields    
> first field is referred to as $1, the second as $2, etc. 
> and the whole line is called $0.
```bash
# The `field` separator
FS=" "

# the line number
NR

# the number of fields in the current line
NF
```

```bash
echo "asim:bader:ahmed" | awk -F ":" '{print $3}'
# ahmed
echo "asim:bader:ahmed" | awk -F ":" '{print $2}'
# bader
```


```bash
echo 3 | awk '{ print 2+3 }'
# 5
echo 3 | awk '{ print $1+3 }'
# 6
echo 3.2 | awk '{ print $1+3.5 }'
# 6.7
```


```bash
ls -l | awk 'BEGIN {sum=0} {sum=sum+$5} END {print sum}'
```
