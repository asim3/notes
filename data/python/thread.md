# Thread 

## start
This method will raise a `RuntimeError` if called more than once on the same thread object.
```py
from threading import Thread
from time import sleep


def my_function(name):
    print("start", name)
    sleep(2)
    print("finish", name)

my_thread = Thread(target=my_function, args=('asim',))
my_thread.start()
print("will not wait for thread")

# start asim
# will not wait for thread
# finish asim
```


## daemon
> daemon threads will be killed when the program is exiting, regardless of their status
```py
from threading import Thread
from time import sleep


def my_function(name):
    print("start", name)
    sleep(2)
    # the program will exit before finishing this, because of (daemon=True)
    print("finish", name)

my_thread = Thread(target=my_function, args=('asim',), daemon=True)
my_thread.start()
print("will not wait for thread")

# start asim
# will not wait for thread
```


## wait for a thread
```py
from threading import Thread
from time import sleep


def my_function(name):
    print("start", name)
    sleep(2)
    print("finish", name)

my_thread = Thread(target=my_function, args=('asim',))
my_thread.start()
print("will not wait for thread")

my_thread.join()
print("will wait for thread to finish")

# start asim
# will not wait for thread
# finish asim
# will wait for thread to finish
```


## Runtime Error
```py
from threading import Thread
from time import sleep


def my_function(name):
    print("start", name)
    sleep(2)
    print("finish", name)

my_thread = Thread(target=my_function, args=('asim',))
my_thread.start()

my_thread.join()
print("done.")
my_thread.start()

# start asim
# finish asim
# done.
# RuntimeError: threads can only be started once
```


## raise Error
```py
from threading import Thread
from time import sleep


def my_function(name):
    print("start", name)
    sleep(2)
    print("finish", name)

my_thread = Thread(target=my_function, args=('asim',))
my_thread.start()

raise NotImplementedError("My error notes.")

# start asim
# NotImplementedError: My error notes.
# finish asim
```


## multi threads
Not working!!!  needs review
```py
# from threading import Thread
# from time import sleep


# def my_function(name):
#     print("start", name)
#     sleep(2)
#     print("finish", name)

# multi_threads = list()
# for i in range(3):
#     print("add and start", i)
#     my_thread = Thread(target=my_function, args=(i,))
#     my_thread.start()
#     multi_threads.append(my_thread)
#     my_thread.start()

# for i, thread in enumerate(multi_threads):
#     print("will not wait for thread", i)
#     thread.join()
#     print("will wait for thread to finish", i)
```
