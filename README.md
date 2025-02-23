# Docker Valheim Server

## Original Project

- [Github repo](https://github.com/lloesche/valheim-server-docker)
- [Docker hub](https://hub.docker.com/r/lloesche/valheim-server)

## Setup

This assumes you will run the Valheim server on a Linux server.

### Install the requirements

1. Git
    ```sh
    # If this command prints the version of git, then it's already installed
    git --version
    # If git isn't already installed, you can probably install it via your package manager
    sudo apt install git # For Ubuntu/Debian
    ```

> [!NOTE]
> For distributions other than Ubuntu/Debian, go to [Git's installation page](https://git-scm.com/downloads/linux) to find out how to install it

2. Docker

    ```sh
    # Download install script
    curl -fsSL https://get.docker.com -o install-docker.sh
    # Do dry run to verify steps
    sh install-docker.sh --dry-run
    # Run as root to install Docker
    sudo sh install-docker.sh
    ```

### Run the Valheim server

1. Clone the repo

    ```sh
    git clone https://github.com/btc-raspberrypiclub/piclub-valheim-server
    cd piclub-valheim-server
    ```

2. Copy and edit the example environment file

    ```sh
    cp example.env .env
    nano .env
    ```

> [!NOTE]
> For more configuration options, see the [valheim-server-docker repo](https://github.com/lloesche/valheim-server-docker?tab=readme-ov-file#environment-variables)

3. Create the config and data directories

    ```sh
    mkdir config data
    ```

    The `config` directory will hold server configuration, world files, and backups.

    The `data` directory is where the Valheim server executable and data will be installed to.

4. Start the server

    ```sh
    docker compose up
    ```

    The initial startup will take a while after running this command (the world has to be generated).

    To monitor the process, you can look at the logs:

    ```sh
    docker compose logs -f
    ```

    You can safely stop viewing the logs (by pressing <kbd>Ctrl + C</kbd>) and the server will keep running.

    If you want to stop the server, run:

    ```sh
    docker compose down
    ```
