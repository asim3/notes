#!/bin/bash
path=""

function echo_file_link {
    echo "..link.. $(echo "$1" | sed -e 's/.\///')";
    echo $(echo "$1" | sed -e 's/.*\///' -e 's/\..*//' -e 's/_/ /g');
}

function echo_dir_link {
    echo "..link.. $(echo "$1" | sed -e 's/.\///')/master.txt";
    echo $(echo "$1" | sed -e 's/.*\///' -e 's/\..*//' -e 's/_/ /g');
}

function update_paths {
    up_dir="$(echo "$path" | sed -e 's/^\.//' -e 's/\/[^\/]*$//')/master.txt"
    echo "..link.. $(echo "$up_dir" | sed -e 's/^\.//' -e 's/^\///')"
    echo "..";
    for path in $1/* ; do
        if [ -d $path ]; then
            echo_dir_link $path
        elif [[ $path != *"init.txt" ]] && [[ $path != *"master.txt" ]]; then
            echo_file_link $path
        fi

        if [ -d $path ]; then
            update_paths $path > $path/init.txt
        fi
    done;
}

cd data
update_paths "."
cd ..