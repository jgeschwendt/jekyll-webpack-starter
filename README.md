# jekyll-webpack-starter

<p align="left">
  <a href="https://travis-ci.org/jgeschwendt/jekyll-webpack-starter">
    <img alt="Travis Status" src="https://travis-ci.org/jgeschwendt/jekyll-webpack-starter.svg?branch=master">
  </a>
</p>

A Modern Jekyll Starter Kit, focused on maximizing DX, to build fast, quality, static sites.

This project will be rapidly changing, I will try to cut the first version when Bootstrap v4 is released.

```shell
# put this in your bash config
alias dock=docker-compose

# start dev environment
dock build
dock up -d # run in detached mode

# stop dev environment
dock down

# build production assets
docker exec jekyll.node yarn build -- -p

# if you need to work inside the containers...
docker exec -it jekyll.node /bin/bash
docker exec -it jekyll.ruby /bin/bash
```
