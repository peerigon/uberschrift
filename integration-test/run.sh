CWD=$(pwd)

# make a temporary directory
TMP=$(mktemp -d 2>/dev/null || mktemp -d -t 'pprtmp')
TYPE=$1

# clean up
trap '{ rm -rf -- "$TMP"; }' EXIT
# trap '{ echo $TMP; }' EXIT

# copy the boilerplate to the temporary directory
cp -r ./integration-test/integration.test.ts.hbs ${TMP}/integration.test.ts

if [ "$TYPE" = "local" ]; then
	cd $CWD/packages/react
	npm install
	npm run build

	cd $CWD/packages/vue
	npm install
	npm run build

	cd $TMP
	npm init -y
	npm install $CWD/packages/react
	npm install $CWD/packages/vue
else
	cd ${TMP}
	npm init -y
	npm install uberschrift vueberschrift
fi

# install dependencies
npm install vitest typescript
npx tsc --init

# run unit tests
npx vitest run
STATUS=$?

cat package.json

exit $STATUS
