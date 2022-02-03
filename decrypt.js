const crypto = require('crypto');

const algorithm = 'aes-192-cbc';
const password = 'password used to generate key';
const key = crypto.scryptSync(password, 'salt', 24);
const decipher = crypto.createDecipher(algorithm, key);

let decrypted = '';
decipher.on('readable', () =>{
    while (null !== (chunk = decipher.read())) {
        decrypted += chunk.toString('utf8');
    }
});
decipher.on('end', () => console.log(decrypted));

const encrypted = '7b62981bb116e537b2baadd93f641782';
decipher.write (encrypted, 'hex');
decipher.end();