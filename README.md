
<p  align="center">
<svg width="150px" height="150px" viewBox="0 0 42 48" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"><g transform="translate(-2610.000000, -1236.000000)" fill="#443F54" fillRule="nonzero"><g transform="translate(2610.000000, 1236.000000)"><path d="M16.1,0 L4.8,15.5 L0,38.3 L16.1,48 L32.2,38.3 L27.4,15.4 L16.1,0 Z M7.4,15.9 L16.1,4 L24.8,15.9 L16.1,42 L7.4,15.9 Z M26,19.8 L29.6,37.2 L17.8,44.3 L26,19.8 Z M2.6,37.2 L6.2,19.8 L14.4,44.3 L2.6,37.2 Z" id="Shape"></path><polygon id="Shape" points="35.4 44.6 34.2 44.6 34.2 44.3 36.9 44.3 36.9 44.6 35.7 44.6 35.7 48 35.4 48"></polygon><polygon id="Shape" points="41 44.7 39.6 48 39.5 48 38.2 44.7 38.2 48 37.9 48 37.9 44.3 38.4 44.3 39.6 47.3 40.8 44.3 41.3 44.3 41.3 48 41 48"></polygon></g></g></g></svg></p>

  

  

<p  align="center">

<a  href="https://twitter.com/intent/follow?screen_name=block_one_">

<img  alt="NPM Downloads"  src="https://img.shields.io/npm/dm/@eosio/ui-gui-nodeos.svg?maxAge=43200&label=v7%20downloads"  />

</a>

<a  href="https://twitter.com/intent/follow?screen_name=block_one_">

<img  alt="GitHub Downloads"  src="https://img.shields.io/github/downloads/EOSIO/eosio-toppings/total.svg"  />

</a>

</p>

  

<p  align="center">

<a  href="https://twitter.com/intent/follow?screen_name=block_one_">

<img  alt="NPM Version"  src="https://img.shields.io/npm/v/@eosio/ui-gui-nodeos.svg"  />

</a>

<a  href="https://twitter.com/intent/follow?screen_name=block_one_">

<img  alt="License"  src="https://img.shields.io/github/license/EOSIO/eosio-toppings.svg"  />

</a>

<a  href="https://twitter.com/intent/follow?screen_name=block_one_">

<img  alt="Follow on Twitter"  src="https://img.shields.io/twitter/follow/block_one_.svg?style=social&label=Follow"  />

</a>

</p>

  

  

# EOSIO Toppings

  

  

This is a monorepo composed of the various packages which work together to create a web-based development tool to help users create applications on the EOSIO blockchain. Users will be able to perform various actions related to smart contract and application development using this tool.

  

  

## Package Index

  

  

*  [Nodeos GUI Web UI](./packages/ui-gui-nodeos): React-based Web Application making use of all the services in this repo

  

* API Services:

  

*  [EOSIO Compiler / Deployment Service](./packages/api-eosio-compiler): Node.JS/Express API server for compiling and deploying smart contracts to a `nodeos` instance. Spins up a Docker container under the hood for contract compilation.

  

*  [MongoDB Plugin API](./packages/api-mongodb-plugin): TypeScript API service for interacting with the blockchain MongoDB (`nodeos` run with the MongoDB plugin)

  

*  [RPC API](./packages/api-rpc): TypeScript API service wrapper around the EOSIO RPC API

  

* Docker-based Services:

  

*  [EOSIO nodeos Docker Container](./packages/docker-eosio-nodeos): Dockerfile and build scripts for the Docker container running a local `nodeos` instance

  

*  [MongoDB Docker Container](./packages/docker-mongodb): Dockerfile and build scripts for the Docker container running a local MongoDB service

  

  

## Directory Layout

  

  

At present there are two main directories:

  

  

*  **apps** - Utilities that may be useful for developers outside of the main functions and services

  

*  **packages** - Contains the main services that comprise this monorepo

  

  

## Documentation

  

  

In all of our documentation provided within this monorepo, the default settings of all packages are used for any illustration and explanation.

  

Please refer to below default settings section.

  

  

## Getting Started

  

  

A more detailed explanation on how to get started with the EOSIO Toppings tool can be found in the [help document](help.md).

  

  

All the startup scripts are put in the app folder "ui-gui-nodeos" (`/packages/ui-gui-nodeos`).

  

  

Please refer to this app folder for below sections.

  

  

To get quickly set up and running with this tool, please perform the following steps:

  

1. Directly clone this monorepo (using `git clone`)

  

2. Navigate to the scripts folder of the ui-gui-nodeos package (`/packages/ui-gui-nodeos/scripts`) of the cloned repository and run `./first_time_setup.sh` to install and build all the necessary dependencies

  

3. Run `./quick_start.sh`, which will automatically start the tool in your browser at `http://localhost:3000` after creating the necessary containers and services

  

  

## Config

  

Configurable settings ( e.g. docker container name and ports of the services ) are defined in `./init_config.file.`

  

  

Since every packages should be able to run on thier own without higher level configuration, each package is having their own default config file ( config.file or .env ).

  

  

To change the default value for all packages at once, you could apply a global config for all packages.

  

To use it, just change the values in`./init_config.file.` and run `./first_time_setup.sh`.

  

  

The first time setup script will initialise some local config files ( config.file.local or .env.local ) into different packages hence overriding the original default configs. Noted that all local configs generated will be ignored in git repository.

  

  

The list below contains the **default settings** which you will see throughout the source code / documentation in this monorepo.

  

  

### Docker MongoDB

  

  

```

  

MONGODB_CONTAINER_NAME=eosio_mongodb

  

MONGODB_PORT=27788

  

MONGODB_DB_NAME=gui_nodeos

  

MONGODB_PATH=mongodb://$MONGODB_CONTAINER_NAME:$MONGODB_PORT/$MONGODB_DB_NAME

  

```

  

  

### Docker EOSIO Nodeos

  

```

  

NODEOS_CONTAINER_NAME=eosio_gui_nodeos_container

  

NODEOS_IMAGE_PREFIX=eosio_gui_nodeos

  

NODEOS_VERSION=eos1.6.3

  

NODEOS_IMAGE_NAME=$NODEOS_IMAGE_PREFIX:$NODEOS_VERSION

  

```

  

  

### Api EOSIO CDT Compiler

  

```

  

LOCAL_SERVICE_PORT=8081

  

CDT_CONTAINER_NAME=eosio_gui_nodeos_cdt_container

  

CDT_IMAGE_PREFIX=eosio_gui_nodeos_cdt

  

CDT_VERSION=1.5.0

  

CDT_IMAGE_NAME=$CDT_IMAGE_PREFIX:$CDT_VERSION

  

```

  

  

### UI APP

  

```

  

UI_DEV_PORT=3000

  

UI_SERVE_PORT=5000

  

```

  

  

### Caveats (ports)

  

  

The following ports need to be opened in your local machine by default:

  

  

*  `3000` [ UI - Create react app dev service ( only used for development of this tools)]

  

*  `5000` [ UI - Frontend app service ]

  

*  `8081` [ EOSIO compiler/deployment service ]

  

*  `8888` [ Nodeos RPC Api service ] ( not configurable in config file )

  

*  `9876` [ Nodeos Net Plugin service ] ( not configurable in config file )

  

*  `27788` [ MongoDB Api service ]

  

  

Remember, you can always change the settings by updating config in `./init_config.file.` and running `./first_time_setup.sh`.

  

For the settings that is not configurable in config file, you could search those values and replace them by yourself.

  

  

## License

  

  

[MIT](./LICENSE)

  

  

## Important

  

  

See LICENSE for copyright and license terms. Block.one makes its contribution on a voluntary basis as a member of the EOSIO community and is not responsible for ensuring the overall performance of the software or any related applications. We make no representation, warranty, guarantee or undertaking in respect of the software or any related documentation, whether expressed or implied, including but not limited to the warranties or merchantability, fitness for a particular purpose and noninfringement. In no event shall we be liable for any claim, damages or other liability, whether in an action of contract, tort or otherwise, arising from, out of or in connection with the software or documentation or the use or other dealings in the software or documentation. Any test results or performance figures are indicative and will not reflect performance under all conditions. Any reference to any third party or third-party product, service or other resource is not an endorsement or recommendation by Block.one. We are not responsible, and disclaim any and all responsibility and liability, for your use of or reliance on any of these resources. Third-party resources may be updated, changed or terminated at any time, so the information here may be out of date or inaccurate.
