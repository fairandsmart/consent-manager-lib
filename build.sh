#!/bin/sh

echo "Cleaning space..."
rm -rf lib/

# Compile and run the generator
echo "Compiling project..."
./node_modules/typescript/bin/tsc -p tsconfig.json
if [ $? -ne 0 ]
then echo -e "\033[0;31mError while compiling the project\033[0m\n" ; exit 1
fi

echo "Prettifying library..."
npx prettier --write lib/**/*
if [ $? -ne 0 ]
then echo -e "\033[0;31mError while prettifying the library\033[0m\n" ; exit 1
fi

echo "Creating browser compatible bundle..."
npx webpack --config webpack.config.js --mode production
if [ $? -ne 0 ]
then echo -e "\033[0;31mError while bundling the library\033[0m\n" ; exit 1
fi

# Copy files into lib - we'll publish lib as the package instead of the whole repo, so paths are nicer.

echo "Cleaning..."
cp README.md lib/
cp LICENSE.txt lib/
cp package-lib.json lib/package.json
echo -e "\033[0;32mDone!\033[0m\n"
