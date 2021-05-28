#!/bin/bash
path=""

function update_paths {
    for path in $1/* ; do
        if [[ $path == *".txt" ]]; then
            mv $path "$(echo "$path" | sed -e 's/txt/md/')"
        fi
        
        if [ -d $path ]; then
            update_paths $path
        fi
    done;
}

cd data
update_paths "."
cd ..