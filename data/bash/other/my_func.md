## rename function
```bash
#!/bin/bash

path=""

function update_paths {
    for path in $1/* ; do
        if [[ $path == *"master.txt" ]]; then
            mv $path "$(echo "$path" | sed -e 's/master/index/')"
        #elif [[ $path != *"init."* ]] && [[ $path != *"index."* ]]; then
        fi
        
        if [ -d $path ]; then
            update_paths $path
        fi
    done;
}

cd data
update_paths "."
cd ..
```


## curl
```bash
#!/bin/bash

export TEST_URL=https://delete-4.herokuapp.com/

for i in {1..2000}; do 
    /bin/bash -c "for i in {1..2000}; do curl ${TEST_URL} > /dev/null ; done;" &
done;
```
