## Old style
```python
import os

os.system("echo Hello from bash!")
# Hello from bash!

home_dir = os.system("cd ~")
print("home_dir: %d \n\n" % home_dir)
# home_dir: 0

unknown_dir = os.system("cd does_not_exist")
print("unknown_dir: %d" % unknown_dir)
# sh: 1: cd: can't cd to does_not_exist
# unknown_dir: 512


bash = os.system("sleep 2")
print("will wait for system. return code:", bash)
# will wait for system. return code: 0


bash = os.system("error")
print("will wait for system. return code:", bash)
# will wait for system. return code: 32512
```



Older API
=========
`call(...)`: Runs a command, waits for it to complete, then returns
    the return code.

`check_call(...)`: Same as call() but raises CalledProcessError()
    if return code is not 0

`check_output(...)`: Same as check_call() but returns the contents of
    stdout instead of a return code

`getoutput(...)`: Runs a command in the shell, waits for it to complete,
    then returns the output
    
`getstatusoutput(...)`: Runs a command in the shell, waits for it to complete,
    then returns a (exitcode, output) tuple


```py
import subprocess
 
subprocess.call(['sleep', '3', 'echo', 'done'], check=True)
# print stderr only (No raise Error)

subprocess.check_output(['ls', '-l'])
# check_call raises a CalledProcessError if the return code is non-zero

subprocess.check_output(['sleep', '3', 'echo', 'done'])
# sleep: invalid time interval ‘echo’
# sleep: invalid time interval ‘done’
# subprocess.CalledProcessError:

subprocess.call(['ls', '-l'], shell=True)
# is similar to $ /bin/sh -c ls -l
```
