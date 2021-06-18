const fs = require("fs");
fs.chmodSync("/tmp/fs", 0o777); // Sensitive
