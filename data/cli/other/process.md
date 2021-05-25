## Memory & CPU Info
```bash
free -h
top
htop

# full details
cat /proc/meminfo
```


## CPU Info
```bash
lscpu
lscpu -p

nproc --all
# OR
lscpu | egrep '^CPU\(s\):' | awk -F " " '{print $2}'

cat /proc/cpuinfo

getconf -a
```


## show processes
show all processes running in memory
```bash
ps aux | grep python
ps aux | grep 'kubectl port-forward'

ps aux
# a: Show processes for all users
# u: Display the user who is using the process
# x: Show all processes. (Without this, ps won’t show GUI processes)
```


## process
```bash
ls  /proc
cat /proc/cpuinfo 
cat /proc/uptime

# display a tree of processes
pstree
```


## Killing processes
```bash
kill <PID>
kill 98095

killall firefox
# kill a process that has been running for more than 30 minutes
killall -o 30m <process-name>
# kill a process that has been running for less than 30 minutes
killall -y 30m <process-name>

# p-grep: search for all processes that contain
pgrep fox
# kill processes based on partial matches
pkill firefox
```


## Show running process name
```bash
pgrep -l sys
pgrep -l python
pgrep -l firefox
```


## Stop running process by name
```bash
pkill python
pkill firefox
pkill gunicorn

killall python3
```
