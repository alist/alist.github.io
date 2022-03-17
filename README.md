# alist.github.io
alist's github pages

## Setup
Jade is now Pug:
- `npm install -g pug`
- `npm install -g pug-cli`

Stylus and the nib package are needed:
- `npm install -g stylus`
- `npm install -g nib`


## Compilation
- `pug jade/*.jade -w --out .`
- `stylus styl/alist.styl -w -o css/`

Tested locally using `python -m SimpleHTTPServer 3000`, but `SimpleHTTPServer` has trouble when trying to serve large media files.

An alternative is `npm install http-server -g` and `http-server .`.
