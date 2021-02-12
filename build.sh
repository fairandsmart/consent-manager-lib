#!/bin/sh

rm -rf lib/
# Compile and run the generator
./node_modules/typescript/bin/tsc -p tsconfig.json

npx prettier --write lib/**/*

# Copy files into lib - we'll publish lib as the package instead of the whole repo, so paths are nicer.
cp README.md lib/
cp fairandsmart-LICENSE lib/
cp package-lib.json lib/package.json
