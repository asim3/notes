## JQ
commandline JSON processor
```bash
which jq
# /usr/bin/jq


cat <<EOF > my-file.json
{
    "id":"444",
    "key_1":"aaaaaaaa",
    "key_2":"bbbbbbbb",
    "key_3": {
        "key_4": "dddddddd"
    }
}
EOF


cat my-file.json | jq ".id"
# "444"

cat my-file.json | jq -r ".id"
# 444

cat my-file.json | jq ".key_2"
# "bbbbbbbb"

cat my-file.json | jq -r ".key_2"
# bbbbbbbb

cat my-file.json | jq -r ".key_3.key_4"
# dddddddd
```


## json_pp
```bash
which json_pp
# /usr/bin/json_pp


echo '{"id":"444","key_1":"aaaaaaaa","key_2":"bbbbbbbb","key_3": {"key_4": "dddddddd"}}'  > my-file-2.json

cat my-file-2.json | json_pp
# {
#    "id" : "444",
#    "key_1" : "aaaaaaaa",
#    "key_2" : "bbbbbbbb",
#    "key_3" : {
#       "key_4" : "dddddddd"
#    }
# }
```
