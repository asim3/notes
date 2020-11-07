## Redirects stdin & stdout
> 0: stdin     # input   
> 1: stdout    # output   
> 2: stderr    # error output    


## overwrite
Save redirect to a file
```bash
# stdout
ls -al > my_file.txt
ls -al 1> my_file.txt

# stderr
lss 2> my_file.txt

# stdout-stderr
ls -al 1> my_file.txt 2> my_file.txt 
ls -al 2> my_file.txt 1> my_file.txt 
ls -al &> my_file.txt
```


## Append
append redirect to a file
```bash
# stdout
ls -al >> my_file.txt
ls -al 1>> my_file.txt

# stderr
lss 2>> my_file.txt


# stdout-stderr
ls -al 1>> my_file.txt 2>> my_file.txt 
lss    2>> my_file.txt 1>> my_file.txt 
ls -al  >> my_file.txt 2>&1
```

# stdin
```bash
# Read input from a file
grep "eco" < my_file.txt

# Read input from a file then append stdout to a file
grep "eco" < my_file.txt >> my_file2.txt
```


## echo multiline
```bash
cat << EOF > my_file.txt
first line
second line
end of file
EOF
```
> or use Ctrl-D (i.e. EOF) to exit
