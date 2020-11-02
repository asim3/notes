## sub process
This module is used for dealing with external commands, intended to be 
a replacement to the old os.system and the like.


## Timing
```python
import os
from subprocess import run, Popen


# will wait for os system
os.system("sleep 2;")
# 0
os.system("exit 1;")
# 256
os.system("exit 4;")
# 1024


# will wait for subprocess
shell = run(["sleep", "2"])
shell.returncode
# 0

# will not wait for subprocess
shell = Popen(["sleep", "5"])
shell.returncode
# None

shell.wait()
shell.returncode
# 0
```


## Timeout Expired
> If the timeout expires, the child process will be killed 
> and waited for. The TimeoutExpired exception will be re-raised 
> after the child process has terminated.

```py
from subprocess import run, TimeoutExpired

run(["sleep", "33"], timeout=3)
# TimeoutExpired: Command 'sleep 33' timed out after 3 seconds
```
