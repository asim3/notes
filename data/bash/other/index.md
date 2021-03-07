[testing](https://github.com/sstephenson/bats)


```bash
BASE_DIR="$(basename ${BASH_SOURCE[0]})"
```


## debug
```bash
export PS4='+AAAA+'
# OR
export PS4='+($(basename ${BASH_SOURCE[0]}):${LINENO}): ${FUNCNAME[0]:+${FUNCNAME[0]}(): }'

/bin/bash -x my_bash
```


## shell options
```bash
set -ex 
#   -e  Exit immediately if a command exits with a non-zero status.
#   -u  Treat unset variables as an error. Note: you can use ${1:-} for empty var
#   -x  Print commands and their arguments as they are executed.

#   +e  turned off e
#   +x  turned off x
#   ...
```


# !!!
```bash
set -o pipefail 
# Fail on a single failed command in a pipeline
```


## best practices
```bash
set -eu

# Fail on a single failed command in a pipeline
set -o pipefail 

# all values in an array
ARGS=("$@")


# Checks if a flag is present in the arguments.
has_flag() {
  local flags="$@"
  for var in $ARGS; do
    for flag in $flags; do
      if [ "$var" = "$flag" ]; then
        echo 'true'
        return
      fi
    done
  done
  echo 'false'
}
# if $(has_flag --help -h); then echo "Help ..."; fi;
# if $(has_flag --asim); then echo "ok"; fi;


# Read the value of an option.
readopt() {
  local opts="$@"
  for var in $ARGS; do
    for opt in $opts; do
      if [[ "$var" = ${opt}* ]]; then
        local value="${var//${opt}=/}"
        if [ "$value" != "$var" ]; then
          # Value could be extracted
          echo $value
          return
        fi
      fi
    done
  done
  # Nothing found
  echo ""
}
```

## Edit bash init file
```bash
nano ~/.bashrc
nano ~/.bash_profile # for macOS
nano /etc/profile # for all users except root
```


```bash
# add to ~/.bashrc
if [ -f ~/.bash_aliases ]; then
    . ~/.bash_aliases
fi
```
