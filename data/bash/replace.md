## string replace regex
```bash
echo "asim bader ahmed asim bader ahmed" | sed -e 's/asim/mohammed/'
# mohammed bader ahmed asim bader ahmed
echo "asim bader ahmed asim bader ahmed" | sed -e 's/asim/mohammed/g'
# mohammed bader ahmed mohammed bader ahmed


dir="aaa/bbb/ccc/ddd_eee.txt"
echo $(echo "$dir" | sed -e 's/.*\///' -e 's/\..*//' -e 's/_/ /');
```

