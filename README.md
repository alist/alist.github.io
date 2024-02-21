# alist.github.io

[alist.im website](https://alist.im)

## TODO

- Add Beta technologies sims
- Add Ideaflow app
- Add Domo.io logo with wayback machine link

## Setup
## Local installation

`npm install .`

### Global Installation

Pug (Jade is now Pug) is needed for `.jade`:
- `sudo npm install -g pug`
- `sudo npm install -g pug-cli`

Stylus and the nib package are needed for css:
- `sudo npm install -g stylus`
- `sudo npm install -g nib`

## Compilation
### via Global Option

- `pug jade/*.jade -w --out .`
- `stylus styl/alist.styl -w -o css/`

### via Local Packages

- `node ./node_modules/pug-cli/index.js jade/*.jade -w --out .`
- `./node_modules/stylus/bin/stylus styl/alist.styl -w -o css/`

## Test-Running

I recommend testing via `http-server .` (Hand-install: `npm install http-server -g`).

`./node_modules/http-server/bin/http-server .` for package installs.

Tested locally using `python -m SimpleHTTPServer 3000`, but `SimpleHTTPServer` has trouble when trying to serve large media files.
