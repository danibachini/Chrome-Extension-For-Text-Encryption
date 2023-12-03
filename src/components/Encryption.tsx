
import React, { useState, useEffect } from 'react';
const nacl = require('tweetnacl');

interface EncryptionProps {
  data: {
    input: string;
    key: string;
    encrypt: boolean;
  };
  onResult: (result: string) => void;
}

const Encryption: React.FC<EncryptionProps> = ({ data, onResult }) => {

  const [result, setResult] = useState('');
  const userKey = data.key; 
  const message = data.input;

  // Nonce (a unique value for each encryption, should never be reused with the same key)
  const nonce = nacl.randomBytes(nacl.secretbox.nonceLength);

  // Convert the user-provided secret key to bytes
  // const userKeyBytes = nacl.util.decodeUTF8(userKey);

  useEffect(() => {
    if (data.encrypt === true) {
      // Encrypt the message
      const encryptedMessage = nacl.secretbox(
        nacl.util.decodeUTF8(message),
        nonce,
        nacl.util.decodeUTF8(userKey)
      );

      // Convert the encrypted message to a base64-encoded string
      setResult(nacl.util.encodeBase64(encryptedMessage));
      
    } else {
      // Decrypt the message
      const decryptedMessage = nacl.secretbox.open(
        nacl.util.decodeBase64(message),
        nonce,
        nacl.util.decodeUTF8(userKey)
      );

      // Convert the decrypted message to a string
      setResult(nacl.util.encodeUTF8(decryptedMessage));
    }

    console.log('this is result: ', result);
    onResult(result);
  }, [data, onResult, userKey, message, nonce]);

  return (
    <div></div>
  );
};

export default Encryption;


