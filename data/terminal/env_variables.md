print all variables
```  bash
env
```


set a new environment variable
```  bash
nano ~/.bashrc

# ...
export ASIM_1="AAAAAAAAAAAAAAAAA"
export ASIM_2="bbbbbbbbbbbbbbbb"
```


print variable
```  bash
echo $ASIM
printenv ASIM

echo "my home dir is $HOME and my shell is $SHELL"


echo "home: ${HOME}"
      home: /home/asim_username

echo "home: $HOME"
      home: /home/asim_username

echo 'home: $HOME'
      home: $HOME

echo "I am $(whoami)"
      I am asim_username
```
