## print all
```bash
env
export
```


## new env variable
```bash
MY_ENV="Asim"

echo $MY_ENV
# Asim

printenv MY_ENV
# ----

export MY_ENV
printenv MY_ENV
# Asim
```


```bash
echo "my home dir is $HOME and my shell is $SHELL"

echo "home: ${HOME}"
# home: /home/asim_username

echo "home: $HOME"
# home: /home/asim_username

echo 'home: $HOME'
# home: $HOME

echo "I am $(whoami)"
# I am asim_username
```
