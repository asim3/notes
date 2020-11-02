## Executing Shell command
This module is used for dealing with external commands, intended to be 
a replacement to the old os.system and the like.

[doc](https://dzone.com/articles/ever-useful-and-neat)

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

subprocess.run(["echo", "my", "name", "is", "asim"])
subprocess.run(["/bin/sh", "-c","echo asim && echo bader"])

sub_pro = subprocess.run(["ls", "-al", "/etc/apt/"])
print(sub_pro.returncode) # 0

sub_pro = subprocess.run(["ls", "/etc/apt/"], stderr=subprocess.PIPE, stdout=subprocess.PIPE)
print(sub_pro.returncode)    # 0
print(sub_pro.stdout)        # b'apt.conf.d\nauth.conf.d\n'
print(sub_pro.stderr)        # b''


try:
  failed_command = subprocess.run(["false"], check=True)
  print("this will not work, because of check=True")
except subprocess.CalledProcessError as err:
  print("this will be printed")
  print(err)
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


## run capture output
```python
cmd = subprocess.run(["ls", "-l", "/dev/null"], capture_output=True)
print(
  "\nargs:\t\t ", cmd.args,  
  "\nstdout:\t\t ", cmd.stdout,
  "\nstderr:\t\t ", cmd.stderr,
  "\ncheck_returncode:", cmd.check_returncode(),
  "\nreturncode:\t ", cmd.returncode,
)
```


## Popen
```python
import subprocess

sub_pro = subprocess.Popen(["sleep", "5"])
print("will not wait")

# check if bash finished
print(sub_pro.poll()) # None
print(sub_pro.poll()) # None
print(sub_pro.poll()) # None
print(sub_pro.poll()) # None
print(sub_pro.poll()) # 0
```


```py
from subprocess import Popen, PIPE

with Popen(["echo", "my name"], stdout=PIPE) as process:
    print(process.communicate()[0])
    # print(process.stdout.read())
    # ValueError: read of closed file
```


## Timing
```python
import os
import subprocess

os.system("sleep 2")
print("will wait for process")

sub_pro = subprocess.run(["sleep", "2"])
print("will wait for subprocess")

sub_pro = subprocess.Popen(["sleep", "10"])
print("will not wait")
sub_pro.wait()
print("will wait")
```


```py
from subprocess import Popen, PIPE


cat_my_text = Popen(["cat"], stdin=PIPE, stdout=PIPE, stderr=PIPE, text=True)
stdout, stderr = cat_my_text.communicate(input="My name is asim")
cat_my_text.wait()


sub_pro = Popen(["ls", "/"])
sub_pro.poll()
sub_pro.wait()

stdout, stderr = sub_pro.communicate()

print(
  "\nargs:\t\t", sub_pro.args,
  "\nerrors:\t\t", sub_pro.errors,
  "\nreturncode:\t", sub_pro.returncode,
  
  "\nstdin:\t\t", sub_pro.stdin,
  "\nstdout:\t\t", sub_pro.stdout,
  "\nstderr:\t\t", sub_pro.stderr,

  "\nencoding:\t", sub_pro.encoding,
  "\ntext_mode:\t", sub_pro.text_mode,
  
  "\npid:\t\t", sub_pro.pid, 
)


sub_pro.terminate()
sub_pro.kill()

sub_pro.send_signal()
```


```py
from subprocess import Popen, TimeoutExpired

proc = Popen(["sleep", "10"])
try:
    stdout, stderr = proc.communicate(timeout=5)
except TimeoutExpired:
    proc.kill()
    stdout, stderr = proc.communicate()
    print("outs", outs, "\nerrs", errs)
```

> Warning Use communicate() rather than .stdin.write, .stdout.read 
  or .stderr.read to avoid deadlocks due to any of the other OS pipe 
  buffers filling up and blocking the child process.

## shell pipeline
```py
p1 = Popen(["dmesg"], stdout=PIPE)
p2 = Popen(["grep", "hda"], stdin=p1.stdout, stdout=PIPE)
p1.stdout.close()  # Allow p1 to receive a SIGPIPE if p2 exits.
stdout, stderr = p2.communicate()
```
