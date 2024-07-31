
import dock1 from "./dock1.png";
import dock2 from "./dock2.png";
import dock3 from "./dock3.png";
import dock4 from "./dock4.png";
import dock5 from "./dock5.png";
import dock0 from "./image-2.png"
const DockerT=()=>{
    return(<div>
        <h5>22 February 2024</h5>
        <h1>Docker Essentials</h1>
        <p><img src={dock0} alt="dock0" style={{ width: '100%', borderRadius: '25px' }} /></p>
        <p></p>
        <p>Docker is one of those services that you always hear about but may have never used. I never used Docker in college, and I actually never heard of it until I began researching the field of DevOps. Knowing how to use Docker is a quite essential element of becoming a part of a modern development team. My goal of this post is to help the reader gain an understanding of what Docker is</p>
        <h5>What is Docker?</h5>
        <p>Docker is a set of platform as a service products that use OS-level virtualisation to deliver software in packages called containers. Containers are isolated from one another and bundle their own software, libraries and configuration files; they can communicate with each other through well-defined channels. All containers are run by a single operating-system kernel and are thus more lightweight than virtual machines.</p>
        <br></br>
        <h5><i>What is Container?</i></h5>
        <p>Docker Container is a standardised unit which can be created on the fly to deploy a particular application or environment. It could be an Ubuntu container, CentOs container, etc. to full-fill the requirement from an operating system point of view. Also, it could be an application oriented container like CakePHP container or a Tomcat-Ubuntu container etc.</p>
        <br></br>
        <h5>Docker Concepts</h5>
        <p>Docker is a platform for developers and sysadmins to build, share, and run applications with containers. The use of containers to deploy applications is called containerisation. Containers are not new, but their use for easily deploying applications is.</p>
        <p>Containerisation is increasingly popular because containers are:</p>
        <ul>
            <li>Flexible: Even the most complex applications can be containerised.</li>
            <li>Lightweight: Containers leverage and share the host kernel, making them much more efficient in terms of system resources than virtual machines.</li>
            <li>Portable: You can build locally, deploy to the cloud, and run anywhere.</li>
            <li>Loosely coupled: Containers are highly self sufficient and encapsulated, allowing you to replace or upgrade one without disrupting others.</li>
            <li>Scalable: You can increase and automatically distribute container replicas across a datacenter.</li>
            <li>Secure: Containers apply aggressive constraints and isolations to processes without any configuration required on the part of the user.</li>
        </ul>
        <br></br>
        <h5>Images and Containers</h5>
        <p>Fundamentally, a container is nothing but a running process, with some added encapsulation features applied to it in order to keep it isolated from the host and from other containers. One of the most important aspects of container isolation is that each container interacts with its own, private filesystem; this filesystem is provided by a Docker image. An image includes everything needed to run an application — the code or binary, runtimes, dependencies, and any other filesystem objects required.</p>
        <br></br>
        <h5>Containers and virtual machines</h5>
        <p>A container runs natively on Linux and shares the kernel of the host machine with other containers. It runs a discrete process, taking no more memory than any other executable, making it lightweight.</p>
        <p></p>
        <p>By contrast, a virtual machine (VM) runs a full-blown “guest” operating system with virtual access to host resources through a hypervisor. In general, VMs incur a lot of overhead beyond what is being consumed by your application logic.</p>
        <p><img src={dock1} alt="dock1" style={{ width: '100%', borderRadius: '25px' }} /></p>
        <p></p>
        <p>lets me summarise the learning till now:</p>
        <ul>
        <li>Virtual Machines are slow and take a lot of time to boot.</li>
        <li>Containers are fast and boots quickly as it uses host operating system and shares the relevant libraries.</li>
        <li>Containers do not waste or block host resources unlike virtual machines.</li>
        <li>Containers have isolated libraries and binaries specific to the application they are running.</li>
        <li>Containers are handled by Containerisation engine.</li>
        <li>Docker is one of the containerisation platforms which can be used to create and run containers.</li>
        </ul>

        <h5>Why do we use docker?</h5>
        <p>So we have discussed what Docker is. However, what is the need for the Docker? Well, Docker containers are lightweight and they are super easy to create and deploy.</p>
        <p>Docker provides us with containers. And containerization consists of an entire runtime environment, an application, all its dependencies, libraries, binaries and configuration files needed to run it, bundled into one package. Each application runs separately from the other. Docker solves the dependency problem by keeping the dependency contained inside the containers. It unites developers against dependency of their project.</p>

        <br></br>
        <h5>Benefits of using Containers over Virtual Machines</h5>
        <p>Now let’s discuss what is the benefit of Docker over VMs.</p>
        <ul>
        <li>Unlike VMs( Virtual Machines ) that run on a Guest OS, using a hypervisor, Docker containers run directly on a host server (for Linux), using a Docker engine, making it faster and lightweight.</li>
        <p><img src={dock2} alt="dock2" style={{ width: '100%', borderRadius: '25px' }} /></p>
        <li>Docker containers can be easily integrated compared to VMs.</li>
        <li>With a fully virtualized system, you get more isolation. However, it requires more resources. With Docker, you get less isolation. However, as it requires fewer resources, you can run thousands of container on a host.</li>
        <li>A VM can take a minimum of one minute to start, while a Docker container usually starts in a fraction of seconds.</li>
        <li>Containers are easier to break out of than a Virtual Machine.</li>
        <li>Unlike VMs there is no need to preallocate the RAM. Hence docker containers utilize less RAM compared to VMs. So only the amount of RAM that is required is used.</li>
        <p><img src={dock3} alt="dock3" style={{ width: '100%', borderRadius: '25px' }} /></p>
        </ul>
        <br></br>
        <h5>How does Docker work?</h5>
        <p>Since we now understand the benefits of using Docker. Let’s talk above the functioning of Docker. Docker has a docker engine, which is the heart of Docker system. It is a client-server application. It has three main components:</p>
        <ul>
        <li>A server which is a type of long-running process called a daemon process.</li>
        <li>A client which is Docker CLI( Command Line Interface), and</li>
        <li>A REST API which is used to communicate between the client( Docker CLI ) and the server ( Docker Daemon )</li>   
        </ul>
        <p>The Docker daemon receives the command from the client and manages Docker objects, such as images, containers, networks, and volumes. The Docker client and daemon can either run on the same system, or you can connect a Docker client to a remote Docker daemon. They can communicate using a REST API, over UNIX sockets or a network interface.</p>
        <p><img src={dock4} alt="dock4" style={{ width: '100%', borderRadius: '25px' }} /></p>
        <p>In Linux, Docker host runs docker daemon and docker client can be accessed from the terminal.</p>
        <p>In Windows/OS X, there is an additional tool called Docker toolbox. This toolbox installs the docker environment on Win/OS system. This toolbox installs the following: Docker Client, Compose, Kitematic, Machine, and Virtual Box</p>
        <p><img src={dock5} alt="dock5" style={{ width: '100%', borderRadius: '25px' }} /></p>
        <br></br>
        <h5>Technology used in Docker</h5>
        <p>The programming language used in Docker is GO. Docker takes advantage of various features of Linux kernel like namespaces and cgroups.</p>
        <p>namespaces: Docker uses namespaces to provide isolated workspace called containers. When a container is run, docker creates a set of namespaces for it, providing a layer of isolation. Each aspect of a container runs in a separate namespace and its access is limited to that namespace.</p>
        <p>cgroups( control groups ): croups are used to limit and isolate the resource usage( CPU, memory, Disk I/O, network etc ) of a collection of processes. cgroups allow Docker engine to share the available hardware resources to containers and optionally enforce limit and constraints.</p>
        <p>UnionFS( Union file systems ): are file systems that operate by creating layers, making them very lightweight and fast.It is used by Docker engine to provide the building blocks for containers.</p>
        <p>Docker Engine combines the namespaces, cgroups, and UnionFS into a wrapper called a container format. The default container format is libcontainer.</p>

        <p>This is it for now I guess I am a bit tired and will make a second part continuing about docker how to set it up and create our first docker application.</p>
    </div>)
}

export default DockerT;