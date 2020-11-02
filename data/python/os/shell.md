## sub process
This module is used for dealing with external commands, intended to be 
a replacement to the old os.system and the like.


## Timing
```python
from subprocess import run, Popen

shell = run(["sleep", "2"])
print("will wait for subprocess")

shell = Popen(["sleep", "10"])
print("will not wait. return code:", shell.returncode)
# will not wait. return code: None

shell.wait()
print("will wait. return code:", shell.returncode)
# will wait. return code: 0
```


## Timeout Expired
```py
from subprocess import run, TimeoutExpired

run("sleep 33", shell=True, timeout=3)
# TimeoutExpired: Command 'sleep 33' timed out after 3 seconds
```


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



run("echo 'asim';", shell=True)
# CompletedProcess(args="echo 'asim';", returncode=0)

run("sleep 3 && xecho 'asim';", shell=True)
# CompletedProcess(args="sleep 3 && xecho 'asim';", returncode=127)
```


## run Errors
```py
from subprocess import run, PIPE, CalledProcessError


process = run("sleep 3 && xecho 'asim';", shell=True)
# /bin/sh: 1: xecho: not found

process.check_returncode()
# CalledProcessError: returned non-zero exit status 127
```


## stderr & stdout
```py
from subprocess import run, PIPE, DEVNULL

sub_pro = run(["ls", "-al", "/etc/apt/"])
print(sub_pro.stdout)
# None
print(sub_pro.stderr)
# None


sub_pro = run(["ls", "/etc/apt/"], stdout=DEVNULL, stderr=DEVNULL)
print(sub_pro.stdout)
# None
print(sub_pro.stderr)
# None


sub_pro = run(["ls", "/etc/apt/"], stdout=PIPE, stderr=PIPE)
sub_pro.stdout.decode()
# 'apt.conf.d\nauth.conf.d\n...'
sub_pro.stderr.decode()
# ''
```


## capture_output
```python
from subprocess import run

cmd = run(["ls", "-l", "/dev/null"], capture_output=True)
print(
  "\nargs:\t\t ", cmd.args,  
  "\nstdout:\t\t ", cmd.stdout,
  "\nstderr:\t\t ", cmd.stderr,
  "\ncheck_returncode:", cmd.check_returncode(),
  "\nreturncode:\t ", cmd.returncode,
)
```


---


## Popen
The recommended approach to invoking subprocesses is to use the 
run() function for all use cases it can handle. For more advanced 
use cases, the underlying Popen interface can be used directly.

```python
from subprocess import Popen

sub_pro = Popen(["sleep", "5"])
print("will not wait")

# check if bash finished
print(sub_pro.poll()) # None
print(sub_pro.poll()) # None
# ...
print(sub_pro.poll()) # 0
```


```py
from subprocess import Popen, PIPE

with Popen(["echo", "my name"], stdout=PIPE) as process:
    print(process.communicate()[0])
    # print(process.stdout.read())
    # ValueError: read of closed file
```


## PIPE stdout 
```py
from subprocess import Popen, PIPE


cat_my_text = Popen(["cat"], stdin=PIPE, stdout=PIPE, stderr=PIPE, text=True)
stdout, stderr = cat_my_text.communicate(input="My name is asim")
cat_my_text.wait()


sub_pro = Popen(["ls", "/"])
sub_pro.returncode
sub_pro.poll()
sub_pro.wait()
sub_pro.returncode

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


## TimeoutExpired
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
