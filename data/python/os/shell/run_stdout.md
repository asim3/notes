# stdout
```py
from subprocess import run, PIPE, DEVNULL


sub_pro = run("echo Asim;", shell=True)
# Asim
sub_pro.stdout
# None
sub_pro.stderr
# None


sub_pro = run("Asim;", shell=True)
# /bin/sh: 1: Asim: not found
sub_pro.stdout
# None
sub_pro.stderr
# None


sub_pro = run("echo Asim;", shell=True, stdout=DEVNULL, stderr=DEVNULL)
# None
sub_pro.stdout
# None
sub_pro.stderr
# None


sub_pro = run("echo Asim;", shell=True, stdout=PIPE, stderr=PIPE)
# None
sub_pro.stdout.decode()
# 'Asim\n'
sub_pro.stderr.decode()
# ''
```


## stderr
```py
from subprocess import run, PIPE, STDOUT


sub_pro = run("asim;", shell=True, stdout=PIPE, stderr=PIPE)
# None
sub_pro.stdout.decode()
# ''
sub_pro.stderr.decode()
# '/bin/sh: 1: asim: not found\n'


sub_pro = run("asim;", shell=True, stdout=PIPE, stderr=STDOUT)
# None
sub_pro.stdout.decode()
# '/bin/sh: 1: asim: not found\n'
sub_pro.stderr
# None
```



## capture_output
```python
from subprocess import run


cmd = run("echo Asim;", shell=True, capture_output=True)
# None
cmd.args
# 'echo Asim;'
cmd.stdout.decode()
# 'Asim\n'
cmd.stderr.decode()
# ''
cmd.returncode
# 0
cmd.check_returncode()
# None
```


## input
```py
from subprocess import run, PIPE, STDOUT


cmd = run("cat", shell=True, stdout=PIPE, input="Asim".encode())

cmd.stdout.decode()
# 'Asim'


cmd1 = run("echo Bader", shell=True, stdout=PIPE)
cmd1.check_returncode()

cmd2 = run("cat", shell=True, stdout=PIPE, input=cmd1.stdout)
cmd2.stdout.decode()
# 'Bader\n'
```
