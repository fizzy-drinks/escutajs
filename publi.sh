#!/bin/bash

# Task b (for build) is for gh-pages only
[ "$2" == "b" ] && ng build --prod --output-path docs --base-href /escutajs/
git add .
git commit -m "$1"
git push -f origin master
