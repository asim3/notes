## read
```bash
echo -n 'enter you name: '; read;



echo $REPLY
# Asim
```


```bash
echo -n 'enter you name: '

read -r MY_ENV

echo $MY_ENV
# Asim
```


```bash
echo -n 'enter you name: '

read -r MY_ENV_1 MY_ENV_2 MY_ENV_3

echo $MY_ENV_1
# 111
echo $MY_ENV_2
# 222
echo $MY_ENV_3
# 333 444
```
