#!/bin/bash

gatsby build

cp -R public/* ../lateralstudio.github.io/
cd ../lateralstudio.github.io
git add .
git commit -m "update"
git push
cd ../lateralstudio
