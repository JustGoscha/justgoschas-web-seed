#!/bin/bash

# compile less
echo "> Compiling LESS files"
lessc less/main.less > css/main.css

echo "> Running Gulp for JS"
gulp build

# echo "> Bundle JS files"
# browserify js/main.js -o js/bundle.js

# echo "> Bundle JS with RequireJS"
# ./node_modules/requirejs/bin/r.js -o require_build.js