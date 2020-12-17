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