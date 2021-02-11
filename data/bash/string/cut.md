## cut
stream editor
```bash
echo "abcdefghi" | cut -c2-6
# bcdef

echo "birthday-091216-pics" | cut -d'-' -f 2
# 091216

my_string="a:b:c:d:e"
echo ${my_string##*:}
# e

#   ##   <-- greedy front trim
#   *    <-- matches anything
#   :    <-- until the last ':'
```
