## Networks
```txt
sudo docker network create web
sudo docker network ls
sudo docker network inspect web
```



## Network default drivers
`bridge`:
The default network driver. usually used when your applications run in standalone containers that need to communicate.


`host`:
removes network isolation between the container and the Docker host, and use the host’s networking directly. 
host is only available for swarm services on Docker 17.06 and higher.


`overlay`:
Overlay networks connect multiple Docker daemons together and enable swarm services to communicate with each other. You can also use overlay networks to facilitate communication between a swarm service and a standalone container, or between two standalone containers on different Docker daemons. This strategy removes the need to do OS-level routing between these containers. See overlay networks.


`macvlan`:
Macvlan networks allow you to assign a MAC address to a container, making it appear as a physical device on your network. The Docker daemon routes traffic to containers by their MAC addresses. Using the macvlan driver is sometimes the best choice when dealing with legacy applications that expect to be directly connected to the physical network, rather than routed through the Docker host’s network stack. 


`none`:
For this container, disable all networking. Usually used in conjunction with a custom network driver. none is not available for swarm services. See disable container networking.


`Network plugins`:
You can install and use third-party network plugins with Docker. These plugins are available from Docker Hub or from third-party vendors. See the vendor’s documentation for installing and using a given network plugin.


## Network driver summary

User-defined bridge networks are best when you need multiple containers to communicate on the same Docker host.

Host networks are best when the network stack should not be isolated from the Docker host, but you want other aspects of the container to be isolated.

Overlay networks are best when you need containers running on different Docker hosts to communicate, or when multiple applications work together using swarm services.

Macvlan networks are best when you are migrating from a VM setup or need your containers to look like physical hosts on your network, each with a unique MAC address.

Third-party network plugins allow you to integrate Docker with specialized network stacks.
