REPO=$(pwd)/packages/react

# make a temporary directory
TMP=$(mktemp -d 2>/dev/null || mktemp -d -t 'pprtmp')
TYPE=$1

# clean up
# trap '{ rm -rf -- "$TMP"; }' EXIT
trap '{ echo $TMP; }' EXIT

# copy the boilerplate to the temporary directory
cp -r ./integration-test/integration.test.ts.hbs ${TMP}/integration.test.ts

if [ "$TYPE" = "local" ]; then
	cd $REPO
	npm install
	npm run build

	cd $TMP
	npm init -y
	npm install $REPO
else
	cd ${TMP}
	npm init -y
	npm install uberschrift
fi

# install dependencies
npm install vitest typescript
npx tsc --init

# run unit tests
npx vitest run
STATUS=$?

cat package.json

exit $STATUS
