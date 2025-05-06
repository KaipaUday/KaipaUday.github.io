// secure_json.js
import fs from 'fs';
import crypto from 'crypto';
import readline from 'readline';

const FILE = 'encoded.json';
const ALGORITHM = 'aes-256-cbc';

function encryptData(data, password) {
  // Generate a key from the password using PBKDF2
  const salt = crypto.randomBytes(16);
  const key = crypto.pbkdf2Sync(password, salt, 100000, 32, 'sha512');
  const iv = crypto.randomBytes(16);
  
  // Encrypt the data
  const cipher = crypto.createCipheriv(ALGORITHM, key, iv);
  let encrypted = cipher.update(JSON.stringify(data), 'utf8', 'hex');
  encrypted += cipher.final('hex');
  
  // Create a hash of the password for verification
  const hash = crypto.createHash('sha256').update(password).digest('hex');
  
  return {
    hash,
    salt: salt.toString('hex'),
    iv: iv.toString('hex'),
    payload: encrypted
  };
}

function decryptData(fileContent, password) {
  // Verify the password using the hash
  const expectedHash = crypto.createHash('sha256').update(password).digest('hex');
  if (fileContent.hash !== expectedHash) {
    throw new Error('Invalid password');
  }
  
  // Reconstruct the key from the password and salt
  const salt = Buffer.from(fileContent.salt, 'hex');
  const key = crypto.pbkdf2Sync(password, salt, 100000, 32, 'sha512');
  const iv = Buffer.from(fileContent.iv, 'hex');
  
  // Decrypt the data
  const decipher = crypto.createDecipheriv(ALGORITHM, key, iv);
  let decrypted = decipher.update(fileContent.payload, 'hex', 'utf8');
  decrypted += decipher.final('utf8');
  
  return JSON.parse(decrypted);
}

async function promptUser(query) {
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
  return new Promise(resolve => rl.question(query, answer => {
    rl.close();
    resolve(answer.trim());
  }));
}

async function main() {
  const mode = process.argv[2];
  const jsonFilePath = process.argv[3];

  if (mode === 'encode') {
    if (!jsonFilePath) {
      console.error('❌ Please provide the JSON file path as an argument.');
      console.log('Usage:');
      console.log('  node secure_json.js encode <jsonFilePath> # To encode and save data');
      return;
    }
    
    const data = JSON.parse(fs.readFileSync(jsonFilePath, 'utf-8'));
    const password = await promptUser('Enter password for encryption: ');
    
    const encoded = encryptData(data, password);
    const encodedString = JSON.stringify(encoded);
    
    fs.writeFileSync(FILE, encodedString);
    console.log(`🔐 Data encrypted and saved to ${FILE}`);
    console.log(`🔑 Remember your password to decrypt the data later`);
  } else if (mode === 'decode') {
    try {
      const fileContent = JSON.parse(fs.readFileSync(FILE, 'utf-8'));
      const password = await promptUser('Enter password: ');
      
      try {
        const decoded = decryptData(fileContent, password);
        console.log('✅ Decrypted data:', decoded);
      } catch (err) {
        console.error('❌', err.message);
      }
    } catch (err) {
      console.error(`❌ Error reading file: ${err.message}`);
    }
  } else {
    console.log('Usage:');
    console.log('  node secure_json.js encode <jsonFilePath> # To encode and save data');
    console.log('  node secure_json.js decode               # To decode using password');
  }
}

main();