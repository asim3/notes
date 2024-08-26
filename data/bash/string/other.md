## Debug text file
```bash
# --show-all: equivalent to -vET
cat -A test.file.txt

# equivalent to -vE
cat -e test.file.txt



# --show-nonprinting: use ^ and M- notation, except for LFD and TAB
cat -v test.file.txt

# --show-ends: display $ at end of each line
cat -E test.file.txt

# --show-tabs: display TAB characters as ^I
cat -T test.file.txt

# --number: number all output lines
cat -n test.file.txt
```


## tr
```bash
echo 'aaa bbb ccc aaa bbb ccc' | tr 'a' 'X'
    # XXX bbb ccc XXX bbb ccc

echo 'aaa bbb ccc aaa bbb ccc' | tr aaaa X
    # XXX bbb ccc XXX bbb ccc

echo 'aaa bbb ccc aaa bbb ccc' | tr abc X
    # XXX XXX XXX XXX XXX XXX

echo 'aaa bbb ccc aaa bbb ccc' | tr ab XY
    # XXX YYY ccc XXX YYY ccc

echo 'aaa bbb ccc aaa bbb ccc' | tr abc XYZ
    # XXX YYY ZZZ XXX YYY ZZZ


# delete
echo 'aaa bbb ccc aaa bbb ccc' | tr -d a
    #  bbb ccc  bbb ccc
    
echo 'aaa bbb ccc aaa bbb ccc' | tr -d 'a'
    #  bbb ccc  bbb ccc
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
