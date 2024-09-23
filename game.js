const { log } = require("console");
const crypto = require("crypto");

// Validation arguments
function validateArguments(args) {
  if (args.length > 3 || args.length % 2 === 0) {
    throw new Error(
      "Error: The number of moves must be odd, less and equal to 3"
    );
  }
  if (new Set(args).size !== args.length) {
    throw new Error("Error: All moves must be unique");
  }
  return args;
}

// class for HMAC generation
class HMACGenerator {
  constructor() {
    this.key = crypto.randomBytes(32);
  }

  generate(message) {
    const hmac = crypto.createHmac("sha256", this.key);
    hmac.update(message);
    return hmac.digest();
  }

  getKey() {
    return this.key.toString("hex");
  }
}
new HMACGenerator();

// Main function
function main() {
  const args = process.argv.slice(2);
  const validatedArgs = validateArguments(args);
}
