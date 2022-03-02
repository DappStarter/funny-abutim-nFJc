require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid problem oppose venture stock raise still minor honey light army gentle'; 
let testAccounts = [
"0x971f2c5ead30ed86a36e56b58753717522489bb36bbb77c5044ea78ecbddc23a",
"0xaf8a155bb76fd446e7947eabe424b53d82c471ac01f7a34a9f42331ed54e63ad",
"0x85f6b1466f6e10b845b9c1a08fc31fc5767be39f5dba885f2c13ec5f75666569",
"0x932feae3ab3d28cf60a63ea92066bd894fbb7d2f2e87b736fa625c6635ec7fcf",
"0xd9478560d5b644c48821514278b8f8814d79249a32e8f627ccfac2876e20983f",
"0x337ba2d1c58cd5056f969abcfed911dc0a4c8f2161fba0ddad6c2be273dc9655",
"0x9381381b1c4891794158e7318644757206bf7c7a195c4fcc91485dd53a7d400f",
"0xafaddfeb5f98c907f90c31affa853ee16ca9772e98ce6d4ae2194964c7947665",
"0x46c13c7ab84346e92ce3c0731e006e8ca4db3018b4487543af67a1e0b36ac99b",
"0x54fb567744b9bcbe822f8da18f208ae435ee0721593478263bd44e7e3afda4d5"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


