```bash
MY_NAME='asim'

case $MY_NAME in

  "ASIM")
    echo "1: ASIM"
    ;;

  "asim")
    echo "2: asim"
    ;;

  "bader" | "ahmed")
    echo "3: bader or ahmed"
    ;;

  *)
    echo "4: *"
    ;;
esac

# 2: asim
```


```bash
case $(basename $BASH_SOURCE) in

  "ASIM" | "asim")
    echo "1: asim"
    ;;

  "bader")
    echo "2: bader"
    ;;

  *)
    echo "3: *"
    ;;
esac
```
