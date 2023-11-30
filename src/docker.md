# Docker (macOS)

- Install Docker Desktop with either:
    - `brew install docker --cask`
    - download from [Docker](https://www.docker.com/products/docker-desktop/)
- Install Docker CLI with: `brew install docker`
- Try ubuntu: `docker pull ubuntu`
- Check it is there: `docker images`
- Run it interactively and attach to terminal: `docker run -i -t  ubuntu /bin/bash` (-d also runs in background)
- Create a folder `folder`
- Create a Dockerfile within `folder` like
    ```Docker
    FROM ubuntu
    RUN apt-get update 
    RUN apt-get install –y python3 curl
    CMD [“echo”,”Image created”] 
    ```
- Build and tag the image: `docker build -t ubuntu-python folder`
- Run interactively the tagged iamge: `docker run -i -t ubuntu-python /bin/bash`
- Inside the image check which version of Python got installed: `python3 --version`
- Exit: `exit`

