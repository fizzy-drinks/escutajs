#!/bin/bash

function build {
    ng build --prod --output-path docs --base-href /escutajs/
}

function update_remote {
    git add .
    git commit -m "$1"
    git push -f origin master
}

# Task b (for build) is for gh-pages only
[ "$2" == "b" ] && build
update_remote $1
