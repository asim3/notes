## Argument Parser
[docs](https://docs.python.org/3/library/argparse.html)


## Help Text
`nano base.py`
```py
from argparse import ArgumentParser


parser = ArgumentParser()

# positional arguments
parser.add_argument('name')
parser.add_argument('title', help='title Help Text')


# optional arguments
parser.add_argument('-a', '--add')
parser.add_argument('-b', '--bbb', help='Help Text')
parser.add_argument('-c', '--ccc', help='Help Text of the %(prog)s program')

parser.add_argument('-n', metavar='INT')

print(parser.parse_args())
```
> `metavar`: argument name in the help message.
>
> `dest`: attribute name in the `parse_args()` object



`python3 base.py -h`
```txt
usage: base.py [-h] [-a ADD] [-b BBB] [-c CCC] [-n INT] name title

positional arguments:
  name
  title              title Help Text

optional arguments:
  -h, --help         show this help message and exit
  -a ADD, --add ADD
  -b BBB, --bbb BBB  Help Text
  -c CCC, --ccc CCC  Help Text of the base.py program
  -n INT
```


`python3 base.py `
```txt
usage: base.py [-h] [-a ADD] [-b BBB] [-c CCC] [-n INT] name title
base.py: error: the following arguments are required: name, title
```


`python3 base.py ahmed sami --add asim -n bader`
```txt
Namespace(add='asim', bbb=None, ccc=None, n='bader', name='ahmed', title='sami')
```


`python3 base.py ahmed sami`
```txt
Namespace(add=None, bbb=None, ccc=None, n=None, name='ahmed', title='sami')
```


## number of arguments
```py
from argparse import ArgumentParser


parser = ArgumentParser()

parser.add_argument('n1', nargs=1)   # list of one item
parser.add_argument('n2', nargs=4)   # list of 4 items

parser.add_argument('n3', nargs='?') # list of 0 or more, default=None
parser.add_argument('n4', nargs='*') # list of 0 or more, default=List

parser.add_argument('n5', nargs='+') # list of 1 or more


# usage: base.py [-h] n1 n2 n2 n2 n2 [n3] [n4 [n4 ...]] n5 [n5 ...]

# Namespace(n1=['aa'], n2=['bb', 'cc', 'dd', 'ee'], n3=None, n4=[], n5=['ff'])
```


## action
```py

from argparse import ArgumentParser


parser = ArgumentParser(prog='my-program', description='Asim program.')


parser.add_argument('my_name', action='store')


parser.add_argument('--bader', action='store_const', const='ahmed')
# Namespace(bader=None, my_name='asim')
# Namespace(bader='ahmed', my_name='asim')


parser.add_argument('--set-true', action='store_true')
parser.add_argument('--set-false', action='store_false')
# Namespace(set_false=True, set_true=False)


parser.add_argument('--add', action='append')
# python3 base.py asim --add aa --add bb
# Namespace(add=['aa', 'bb'], my_name='asim')


parser.add_argument('-v', '--version', action='version', version='%(prog)s 0.0.1')
```


## choices
```py

from argparse import ArgumentParser


parser = ArgumentParser(prog='my-program', description='Asim program.')


parser.add_argument('-c', choices=['bader', 'ahmed', 'sami'])
```


## example
```py
from argparse import ArgumentParser


parser = ArgumentParser(prog='my-program', description='Asim program.')


parser.add_argument(
    'int_list',
    metavar='N',
    type=int,
    nargs='+',
    help='integers Help Text')

parser.add_argument(
    '-t',
    dest='true_or_false',
    default=False,
    const=True,
    action='store_const',
    help="True or False Help Text")

parser.add_argument(
    '--sum',
    dest='max_or_sum',
    default=max,
    const=sum,
    action='store_const',
    help='sum Help Text')


args = parser.parse_args()


print(args)
# Namespace(int_list=[1, 2, 3], max_or_sum=<built-in function sum>, true_or_false=False)


if args.true_or_false:
    print("true_or_false is True")


print(args.max_or_sum(args.int_list))
```


`python3 base.py 1 2 3`
```txt
Namespace(int_list=[1, 2, 3], max_or_sum=<built-in function max>, true_or_false=False)
3
```


`python3 base.py 1 2 3 --sum`
```txt
Namespace(int_list=[1, 2, 3], max_or_sum=<built-in function sum>, true_or_false=False)
6
```


`python3 base.py 1 2 3 --sum -t`
```txt
Namespace(int_list=[1, 2, 3], max_or_sum=<built-in function sum>, true_or_false=True)
true_or_false is True
6
```
