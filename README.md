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
| 0010 | 00 b5 40 81 40 00 40 06 da 81 0a 64 01 3b 0a a0 | ................ |
| 0020 | 09 02 13 b0 13 88 af a3 2e 8b bd 32 df b8 80 18 | ...........2.... |
| 0030 | 00 b5 c3 c0 00 00 01 01 08 0a c1 c6 8c 22 20 81 | ................ |
| 0040 | 09 82 3e 00 81 ab 7d 4a 7b 0f 51 e5 c8 21 bf 00 | .......J..Q..... |
| 0050 | 0d a9 02 0d 19 00 1c 00 1c 02 8b 5e 02 f8 ff 8b | ................ |
| 0060 | 01 10 40 3c 56 f3 5f a8 45 57 47 36 55 43 20 04 | ....V...EWG6UC.. |
| 0070 | 41 33 32 30 4d 45 44 44 48 4c 48 42 50 00 00 01 | A320MEDDHLHBP... |
| 0080 | 08 0a 05 00 ab 7d 4a 7b 0f 51 e5 e6 21 e9 7d 0d | ......J..Q...... |
| 0090 | 29 92 09 8e 05 78 05 78 07 f7 1a cf f0 00 00 01 | ................ |
| 00a0 | 10 40 42 49 dc 5f a8 41 46 4c 32 34 30 33 04 41 | ..BI...AFL2403.A |
| 00b0 | 33 32 30 4d 4c 49 52 46 55 55 45 45 05 78 01 08 | 320MLIRFUUEE.... |
| 00c0 | 0a 0a 00                                        | ...              |
+======+=================================================+==================+
```
...something like this output above.
