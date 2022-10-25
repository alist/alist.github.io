# alist.github.io

[alist.im website](https://alist.im)

## Setup

`npm install .`

### Manual setup

Pug (Jade is now Pug):
- `npm install pug`
- `npm install pug-cli`

Stylus and the nib package are needed:
- `npm install stylus`
- `npm install nib`

Update the path variable, each time you want to use:
- `PATH=$(npm bin):$PATH`
- Or I would permanently alias it: `alias nodebin='PATH=$(npm bin):$PATH'`

## Compilation
- `pug jade/*.jade -w --out .`
- `stylus styl/alist.styl -w -o css/`

## Running

I rcommend `http-server .` (Hand-install: `npm install http-server -g`).

Tested locally using `python -m SimpleHTTPServer 3000`, but `SimpleHTTPServer` has trouble when trying to serve large media files.
