from algosdk import account, mnemonic

def generate_algorand_keypair():

    private_key,address=account.generate_account()

    print("my Addresse:{}".format(address))

    print("My Private Key:{}".format(private_key))

    print("my Passphrase:{}".format(mnemonic.from_private_key(private_key)))


generate_algorand_keypair()

# my Addresse:XSC2RRKCF63ZOLGNHQZOC3G3PFW6ADS64K5IKLMTJ5MWHUOPKSO355OUGA
# My Private Key:CM/gcgYBAAxcjrB2mxHPoENHLpd4pZzzl26hlhGrSQu8hajFQi+3lyzNPDLhbNt5beAOXuK6hS2TT1lj0c9UnQ==
# my Passphrase:three lobster defense away abandon adapt indicate rack human edit guide deliver model slide seven pistol inform garlic resemble head case hello fog abandon discover