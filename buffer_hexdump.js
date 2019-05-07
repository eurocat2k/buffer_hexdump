if (!Function.prototype.method) {
    Function.prototype.method = function(name, func) {
        this.prototype[name] = func;
        return this;
    };
}

Buffer.method('hexdump', function() {
    blockSize = 16;
    var output = [];
    var hex = "0123456789ABCDEF";
    var chars = new Array(blockSize);
    var codes = new Array(blockSize);
    output.push("+======+=================================================+==================+");
    output.push("| OFS  | 00 01 02 03 04 05 06 07 08 09 0A 0B 0C 0D 0E 0F | ASCII            |");
    output.push("+======+=================================================+==================+");
    for (var b = 0; b < this.length; b += blockSize) {
        var block = this.slice(b, Math.min(b + blockSize, this.length));
        var addr  = ("0000" + b.toString(16)).slice(-4);
        var codes = Array.from(block, function(byte) { return ('0' + (byte & 0xFF).toString(16)).slice(-2);}).join(' ');
        codes += "   ".repeat(blockSize - block.length);
        var chars = Array.from(block, function(byte) {
            let ch = String.fromCharCode(parseInt(byte & 0xFF),16);
            if (ch >= 'A' && ch <= 'Z') {
                return ch;
            } else if (ch >= '0' && ch <= '9') {
                return ch;
            } else {
                return ".";
            }
        }).join('');
        chars +=  " ".repeat(blockSize - block.length);
        chars += " |";
        output.push("| " + addr + " | " + codes + " | " + chars);
    }
    output.push("+======+=================================================+==================+\n\n");
    return output.join("\n");
});
