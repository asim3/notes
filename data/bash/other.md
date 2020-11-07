## Edit bash init file
```txt
nano ~/.bashrc
nano ~/.bash_profile # for macOS
nano /etc/profile # for all users except root
```


```txt
# add to ~/.bashrc
if [ -f ~/.bash_aliases ]; then
    . ~/.bash_aliases
fi
```


