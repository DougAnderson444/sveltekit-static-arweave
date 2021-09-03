// npm run test-deploy
// test deploying the build to testweave

import Arweave from 'arweave';
import TestWeaveSDK from 'testweave-sdk';
import fs from 'fs';

const testConfig = {
	host: 'localhost',
	port: 1984,
	protocol: 'http',
	timeout: 20000,
	logging: false
};

let arweave = Arweave.init(testConfig);

try {
	let networkInfo = await arweave.network.getInfo();
	if (networkInfo) connected = networkInfo.network; // https://github.com/ArweaveTeam/arweave-js/issues/49
    console.log({networkInfo})
} catch (error) {
	console.error('Not connected to arweave');
}

const testWeave = await TestWeaveSDK.default.init(arweave);
const keyfile = testWeave.rootJWK;
// convert JSON object to string
const data = JSON.stringify(keyfile);
// write JSON string to a file in nodejs
fs.writeFile('keyfile.json', data, (err) => {
	if (err) throw err;
	console.log('JSON data is saved.');
});
