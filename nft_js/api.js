const algosdk = require('algosdk');
const baseServer = 'https://testnet-algorand.api.purestake.io/ps2'
const port = '';
const token = {
    'X-API-Key': 'CM/gcgYBAAxcjrB2mxHPoENHLpd4pZzzl26hlhGrSQu8hajFQi+3lyzNPDLhbNt5beAOXuK6hS2TT1lj0c9UnQ=='
}

let algodClient = new algosdk.Algodv2(token, baseServer, port);

const tx=async () => {

    let params = await algodClient.getTransactionParams().do();

    let amount = Math.floor(Math.random() * 1000);
    var mnemonic = "three lobster defense away abandon adapt indicate rack human edit guide deliver model slide seven pistol inform garlic resemble head case hello fog abandon discover";
    var recoveredAccount = algosdk.mnemonicToSecretKey(mnemonic);

    let txn = {
        "from": recoveredAccount.addr,
        "to": "XSC2RRKCF63ZOLGNHQZOC3G3PFW6ADS64K5IKLMTJ5MWHUOPKSO355OUGA",
        "fee": 1,
        "amount": amount,
        "firstRound": params.firstRound,
        "lastRound": params.lastRound,
        "genesisID": params.genesisID,
        "genesisHash": params.genesisHash,
        "note": new Uint8Array(0),
    };

    let signedTxn = algosdk.signTransaction(txn, recoveredAccount.sk);
    let sendTx = await algodClient.sendRawTransaction(signedTxn.blob).do();

    console.log("Transaction : " + sendTx.txId);
}

try {
   tx()
}
catch(e){
    console.log("err",e);
}