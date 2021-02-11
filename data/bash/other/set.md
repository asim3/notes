# without functions
`nano aa.sh`
```bash
set -x
echo 111

my_function () {
  echo 222
  echo 333
}

echo 444
```

`./aa.sh`
```bash
# ++ echo 111
# 111
# ++ echo 444
# 444
```


# using functions
`nano aa.sh`
```bash
set -x
echo 111

my_function () {
  echo 222
  echo 333
}

echo 444
my_function
```

`./aa.sh`
```bash
# ++ echo 111
# 111
# ++ echo 444
# 444
# ++ my_function
# ++ echo 222
# 222
# ++ echo 333
# 333
```


# run from `bb.sh`
`nano bb.sh`
```bash
set -x
echo 555

my_function () {
  echo 666
  echo 777
}

echo 888
my_function
./aa.sh
echo 999
```

`./bb.sh`
```bash
# ++ echo 555
# 555
# ++ echo 888
# 888
# ++ my_function
# ++ echo 666
# 666
# ++ echo 777
# 777
# ++ ./aa.sh
# +++ echo 111
# 111
# +++ echo 444
# 444
# +++ my_function
# +++ echo 222
# 222
# +++ echo 333
# 333
# ++ echo 999
# 999
```


# remove `set -x`
`nano aa.sh`
```bash
echo 111

my_function () {
  echo 222
  echo 333
}

echo 444
my_function
```

`./aa.sh`
```bash
# ++ echo 555
# 555
# ++ echo 888
# 888
# ++ my_function
# ++ echo 666
# 666
# ++ echo 777
# 777
# ++ ./aa.sh
# 111
# 444
# 222
# 333
# ++ echo 999
# 999
```
