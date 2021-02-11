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
```


```text
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
