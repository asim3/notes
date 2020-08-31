#!/bin/bash
path=""

function echo_file_link {
    file_path="$(echo "$1" | sed -e 's/.\///')"
    file_name="$(echo "$1" | sed -e 's/.*\///' -e 's/\..*//' -e 's/_/ /g')"
    cat << EOF
<div class='btn btn-primary my-1' onclick="fetch_path('$file_path')">
    $file_name
</div>
EOF
}

function echo_dir_link {
    dir_path="$(echo "$1" | sed -e 's/.\///')/index.txt";
    dir_name="$(echo "$1" | sed -e 's/.*\///' -e 's/\..*//' -e 's/_/ /g')";
    cat << EOF
<div class='btn btn-success my-1' onclick="fetch_path('$dir_path')">
    $dir_name
</div>
EOF
}

function update_paths {
    for path in $1/* ; do
        if [ -d $path ]; then
            echo_dir_link $path
        elif [[ $path != *"init."* ]] && [[ $path != *"index."* ]]; then
            echo_file_link $path
        fi

        if [ -d $path ]; then
            update_paths $path > $path/init.html
        fi
    done;
}

cd data
update_paths "."
cd ..