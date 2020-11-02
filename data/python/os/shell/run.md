## run
```python
from subprocess import run

process = run(["echo", "my", "name", "is", "asim"])
# my name is asim

process = run(["/bin/sh", "-c","echo asim && echo bader"])
# asim
# bader

process = run("echo asim && echo bader", shell=True)
# asim
# bader

process.returncode
# 0
process.stdout
# None
process.stderr
# None
```


## run Errors
```py
from subprocess import run, CalledProcessError


process = run("exit 00;", shell=True)
process.returncode
# 0
process.check_returncode()
# None


process = run("exit 2;", shell=True)
process.returncode
# 2
process.check_returncode()
# raise CalledProcessError


process = run("exit 54321;", shell=True)
process.returncode
# 49
process.check_returncode()
# raise CalledProcessError


process = run("xecho 'asim';", shell=True)
# /bin/sh: 1: xecho: not found
process.returncode
# 127
process.check_returncode()
# raise CalledProcessError
```


## run with check
```py
from subprocess import run, CalledProcessError


process = run("exit 0;", shell=True, check=True)
process.returncode
# 0
process.check_returncode()
# None


process = run("exit 1;", shell=True, check=True)
# raise CalledProcessError

process.returncode
# raise NameError: name 'process' is not defined

process.check_returncode()
# raise NameError: name 'process' is not defined
```
