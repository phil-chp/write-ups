---
layout: Post
format: chall
title: Layer Cake 1/3
date: 2024-04-05
ctf: FCSC
tags: [Docker]
category: [Forensics]
---
# Layer Cake 1/3

<a class="back-link" href="../../">< Go back</a>

## Description

Un développeur de GoodCorp souhaite publier une nouvelle image Docker. Il copie au moment du build un fichier contenant un flag, puis le supprime. Il vous assure que ce secret n'est pas visible du public. L'image est `anssi/fcsc2024-forensics-layer-cake-2`.

Récupérez ce flag et prouvez-lui le contraire.

## Challenge

IMAGE                                                                     CREATED        CREATED BY                                                                                          SIZE      COMMENT
sha256:03014d9fc4801b1810b112fd53e05e35ea127e55c82d1304b5622cfe257c0ad8   2 weeks ago    CMD ["/bin/sh"]                                                                                     0B        buildkit.dockerfile.v0
<missing>                                                                 2 weeks ago    USER guest                                                                                          0B        buildkit.dockerfile.v0
<missing>                                                                 2 weeks ago    RUN /bin/sh -c rm /tmp/secret # buildkit                                                            0B        buildkit.dockerfile.v0
<missing>                                                                 2 weeks ago    COPY secret /tmp # buildkit                                                                         71B       buildkit.dockerfile.v0
<missing>                                                                 2 months ago   /bin/sh -c #(nop)  CMD ["/bin/sh"]                                                                  0B
<missing>                                                                 2 months ago   /bin/sh -c #(nop) ADD file:37a76ec18f9887751cd8473744917d08b7431fc4085097bb6a09d81b41775473 in /    7.38MB

docker run --rm -it --entrypoint /bin/sh anssi/fcsc2024-forensics-layer-cake-2

[
    {
        "Id": "sha256:03014d9fc4801b1810b112fd53e05e35ea127e55c82d1304b5622cfe257c0ad8",
        "RepoTags": [
            "anssi/fcsc2024-forensics-layer-cake-2:latest"
        ],
        "RepoDigests": [
            "anssi/fcsc2024-forensics-layer-cake-2@sha256:86a863f674adbbae9168d1a5d233478cd9747a587a322b8950fcb39f3992be7a"
        ],
        "Parent": "",
        "Comment": "buildkit.dockerfile.v0",
        "Created": "2024-03-25T10:05:42.229491951+01:00",
        "Container": "",
        "ContainerConfig": {
            "Hostname": "",
            "Domainname": "",
            "User": "",
            "AttachStdin": false,
            "AttachStdout": false,
            "AttachStderr": false,
            "Tty": false,
            "OpenStdin": false,
            "StdinOnce": false,
            "Env": null,
            "Cmd": null,
            "Image": "",
            "Volumes": null,
            "WorkingDir": "",
            "Entrypoint": null,
            "OnBuild": null,
            "Labels": null
        },
        "DockerVersion": "",
        "Author": "",
        "Config": {
            "Hostname": "",
            "Domainname": "",
            "User": "guest",
            "AttachStdin": false,
            "AttachStdout": false,
            "AttachStderr": false,
            "Tty": false,
            "OpenStdin": false,
            "StdinOnce": false,
            "Env": [
                "PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin"
            ],
            "Cmd": [
                "/bin/sh"
            ],
            "ArgsEscaped": true,
            "Image": "",
            "Volumes": null,
            "WorkingDir": "",
            "Entrypoint": null,
            "OnBuild": null,
            "Labels": {
                "com.docker.compose.project": "fcsc2024-forensics-layer-cake",
                "com.docker.compose.service": "layer2",
                "com.docker.compose.version": "2.23.1"
            }
        },
        "Architecture": "amd64",
        "Os": "linux",
        "Size": 7377145,
        "VirtualSize": 7377145,
        "GraphDriver": {
            "Data": {
                "LowerDir": "/var/lib/docker/overlay2/4003e6e5e1d175e251e30878589f2940b57b776d80470d758414d8c94b1392b3/diff:/var/lib/docker/overlay2/4c40ee76f197209de20720cf03763beab813a9959464823b79b08edadbc8b611/diff",
                "MergedDir": "/var/lib/docker/overlay2/897ff516db2c57bc6999cb5820c6d3c40cc81b4ef4e90f0790303913dd5df26a/merged",
                "UpperDir": "/var/lib/docker/overlay2/897ff516db2c57bc6999cb5820c6d3c40cc81b4ef4e90f0790303913dd5df26a/diff",
                "WorkDir": "/var/lib/docker/overlay2/897ff516db2c57bc6999cb5820c6d3c40cc81b4ef4e90f0790303913dd5df26a/work"
            },
            "Name": "overlay2"
        },
        "RootFS": {
            "Type": "layers",
            "Layers": [
                "sha256:d4fc045c9e3a848011de66f34b81f052d4f2c15a17bb196d637e526349601820",
                "sha256:eebed19322aaa0082058596cc4cff6c33253f1ce4327e9ae4399edb2f657242e",
                "sha256:fe62c480fd0c4bba858571806e7474fa5aa061ce78292de1988db0cd54d494b6"
            ]
        },
        "Metadata": {
            "LastTagTime": "0001-01-01T00:00:00Z"
        }
    }
]
