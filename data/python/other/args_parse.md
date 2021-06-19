## Argument Parser
[docs](https://docs.python.org/3/library/argparse.html)
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


`python3 base.py`
```txt
usage: my-program [-h] [-t] [--sum] N [N ...]
my-program: error: the following arguments are required: N
```


`python3 base.py -h`
```txt
usage: my-program [-h] [-t] [--sum] N [N ...]

Asim program.

positional arguments:
  N           integers Help Text

optional arguments:
  -h, --help  show this help message and exit
  -t          True or False Help Text
  --sum       sum Help Text
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
