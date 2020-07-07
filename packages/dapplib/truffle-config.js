require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'kidney arena oxygen food warm razor punch puppy coral light army gas'; 
let testAccounts = [
"0xe97f16aee88e35e9f96bbc46611dbaf4df95435268e7ad516837b2792fc23560",
"0xd3afa09729a841f94cd2e4efd72eb28ab7ee721b2845560ec0b06c4d891da4ae",
"0x64a9f1418860c0e47e27acc5e38c5994b75532e8bb9a4135d197d1eb4b46fe41",
"0xa068619b9fa84aee87e62ec296c65c19fed3e20241c43745529effc6d6282471",
"0x208cc80d0d3a89e19273615d5b5feb3a32a7929d1d0817bc191b9938d62b0ef9",
"0x9d8139128e41e026d6bb7b7f3b20143d4e9ea864ec2b392816d328db064fb48d",
"0xac966db524eebefcf82511f2c1a25f2c5cf34da3be0159ff4ae6f46d7f245fa1",
"0x8927deb3c22ddea2f690ab908a5e76609f1d00fe1e79e344aba56b2e4686c38d",
"0xd973b71ee173ed729cccd87ee8b9d9e4ce591c6d007412f1a57a706c9ab8c610",
"0xa8a5cca81f25b3feb33fa296f57836e6c0b3a22bfe158c9f283f366450adaad3"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
