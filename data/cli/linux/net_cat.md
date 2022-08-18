# netcat
The nc (or netcat) utility is used for just about anything under the sun 
involving TCP, UDP, or UNIX-domain sockets.  It can open TCP connections, 
send UDP packets, listen on arbitrary TCP and UDP ports, do port scanning, 
and deal with both IPv4 and IPv6.  

Unlike telnet(1), nc scripts nicely, and separates error messages onto 
standard error instead of sending them to standard output, as telnet(1) 
does with some.

## start listening on a port
```bash
# It is quite simple to build a very basic client/server model using nc.  
# On one console, start nc listening on a specific port for a connection.
nc -l 1234

# nc is now listening on port 1234 for a connection.  On a second console
# (or a second machine), connect to the machine and port being listened on:
nc 127.0.0.1 1234
```
