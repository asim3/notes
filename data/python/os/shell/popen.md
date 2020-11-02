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
