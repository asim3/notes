## Executing Shell


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
```



## SubProcess
```python
import subprocess

sub_pro = subprocess.run(["ls", "/etc/apt/"])
print(sub_pro.returncode) # 0

sub_pro = subprocess.run(["ls", "/etc/apt/"], stderr=subprocess.PIPE, stdout=subprocess.PIPE)
print(sub_pro.returncode) # 0
print(sub_pro.stderr)     # b''
print(sub_pro.stdout)     # b'apt.conf.d\nauth.conf.d\n'


try:
  failed_command = subprocess.run(["false"], check=True)
  print("this will not work")
except:
  print("this will be printed")
```


## Timing
```python
import os
import subprocess

os.system("sleep 2")
print("will wait for process")

sub_pro = subprocess.run(["sleep", "1"])
print("will wait for subprocess")

sub_pro = subprocess.Popen(["sleep", "4"])
print("will not wait")
sub_pro.wait()
print("will wait")
```



## Popen
```python
import subprocess
from time import sleep


sub_pro = subprocess.Popen(["sleep", "2"])
print("will not wait")

for i in range(10):
  # check if bash finished
  print(sub_pro.poll())
  sleep(.3)

print("done")
```