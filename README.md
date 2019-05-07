# buffer_hexdump
JS Buffer's one of the missing hexdump method

## Usage
After extending Buffer's methodes with hexdump method, you can simply call it.

### Example
Using it as pcap data visualizer.
```javascript
...
const pcapp = require('pcap-parser');
const parser = pcapp.parse('some_path/data.pcap');
var buffer = undefined;
parser.on('packet', function(packet) {
    if (packet.data && packet.data.length) {
        buffer = packet.data;
        console.log(buffer.hexdump());
    }
});
```
which will produce...
```
+======+=================================================+==================+
| OFS  | 00 01 02 03 04 05 06 07 08 09 0A 0B 0C 0D 0E 0F | ASCII            |
+======+=================================================+==================+
| 0000 | 00 00 0c 07 ac 64 00 26 55 d8 09 29 08 00 45 00 | ........U.....E. |
| 0010 | 00 57 40 73 40 00 40 06 da ed 0a 64 01 3b 0a a0 | .W.............. |
| 0020 | 09 02 13 b0 13 88 af a3 2c 64 bd 32 df b8 80 18 | ...........2.... |
| 0030 | 00 b5 64 1d 00 00 01 01 08 0a c1 c6 83 57 20 81 | .............W.. |
| 0040 | 00 b8 3e 00 23 ab 7d 48 7b 0f 51 e4 69 22 32 e8 | .......H..Q...2. |
| 0050 | 0a 9c 6d 0e 00 00 e0 00 e0 02 d8 2a 19 f0 00 00 | ................ |
| 0060 | 80 40 44 00 b6                                  | ..D..            |
+======+=================================================+==================+
```
...something like this output above.
