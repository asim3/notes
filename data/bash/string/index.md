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


## cut
```bash
NAME=abcdef/ABCDEF/123456789

echo "${NAME:0}"
# abcdef/ABCDEF/123456789

echo "${NAME:3}"
# def/ABCDEF/123456789

echo "${NAME:3:2}"
# de

echo "${NAME:3:5}"
# def/A

echo "${NAME:(-3)}"
# 789

echo "${NAME: -3}"
# 789
```


## length & index
```bash
NAME=abcdef/ABCDEF/123456789

echo "${#NAME}"
# 23

expr length ${NAME}
# 23

expr match "$NAME" 'abc.*[A-Z]'
# 13

expr index "$NAME" BCD
# 9

expr index "$NAME" BCd
# 4
# 'd' matches before 'BC'
```


## Substring Removal
```bash
NAME=abcdef/ABCDEF/123456789
X=*123

echo "${NAME##*123}"
# 456789

echo "${NAME##$X}"
# 456789

echo "${NAME##*/}"
# 123456789

echo "${NAME#*/}"
# ABCDEF/123456789

echo "${NAME##a*A}"
# BCDEF/123456789



MY_DIR=aaa/bbb/ccc/zzz/eee/fff/zzz/hhh/iii/jjj/kkk

echo ${MY_DIR##*/}
# kkk

echo ${MY_DIR##*zz}
# /hhh/iii/jjj/kkk
```


## %%
```bash
NAME=abcdef/ABCDEF/123456789

echo "${NAME%456789}"
# abcdef/ABCDEF/123

echo "${NAME%456*}"
# abcdef/ABCDEF/123

echo "${NAME%/*}"
# abcdef/ABCDEF

echo "${NAME%%/*}"
# abcdef
```
