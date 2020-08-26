#!/bin/bash

function update_paths {
    for dir in $1/* ; do
        if [[ $dir != *"init.txt" ]]; then
            echo "..link.. $(echo "$dir" | sed -e 's/.\///')";
            echo $(echo "$dir" | sed -e 's/.*\///' -e 's/\..*//' -e 's/_/ /');
        fi

        if [ -d $dir ]; then
            update_paths $dir > $dir/init.txt
        fi
    done;
}

update_paths "."