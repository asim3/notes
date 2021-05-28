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


```bash
MY_DIR=aaa/bbb/ccc/zzz/eee/fff/zzz/hhh/iii/jjj/kkk

echo ${MY_DIR##*/}
# kkk

echo ${MY_DIR##*zz}
# /hhh/iii/jjj/kkk
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
