## split by line
```bash
echo "ddddddd eee eee aaaa bbbbbb ccccc ffffffff" \
  | tr -s '[[:space:]]' '\n'
# ddddddd
# eee
# eee
# aaaa
# bbbbbb
# ccccc
# ffffffff
```


## sort
```bash
echo "ddddddd eee eee aaaa bbbbbb ccccc ffffffff" \
  | tr -s '[[:space:]]' '\n' \
  | sort 
# aaaa
# bbbbbb
# ccccc
# ddddddd
# eee
# eee
# ffffffff
```



## remove duplicates
```bash
echo "ddddddd eee eee aaaa bbbbbb ccccc ffffffff" \
  | tr -s '[[:space:]]' '\n' \
  | sort \
  | uniq
# aaaa
# bbbbbb
# ccccc
# ddddddd
# eee
# ffffffff
```
