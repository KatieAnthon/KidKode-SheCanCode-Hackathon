import { useState, useEffect } from "react";
import "./CaesarCipherGame.css"; // Import your CSS file

const CaesarCipherGame = () => {
  const potentialMessages = [
    "Hello world!",
    "You are a cipher genius!",
    "Ada Lovelace",
  ];

  const [encryptedMessage, setEncryptedMessage] = useState("");
  const [decryptedMessage, setDecryptedMessage] = useState("");
  const [shiftGuess, setShiftGuess] = useState("");
  const [checkResult, setCheckResult] = useState("");

  useEffect(() => {
    decryptMessage();
  }, []);

  const decryptMessage = () => {
    const messageIndex = Math.floor(Math.random() * potentialMessages.length);
    const message = potentialMessages[messageIndex].toLowerCase();
    const shift = Math.floor(Math.random() * 25) + 1;
    let encryptedMsg = "";

    for (let i = 0; i < message.length; i++) {
      const charCode = message.charCodeAt(i);
      if (charCode >= 97 && charCode <= 122) {
        encryptedMsg += String.fromCharCode(
          ((charCode - 97 + shift) % 26) + 97
        );
      } else {
        encryptedMsg += message.charAt(i);
      }
    }

    setEncryptedMessage(encryptedMsg);
  };

  const handleShiftGuess = (e) => {
    setShiftGuess(parseInt(e.target.value));
  };

  const handleDecrypt = () => {
    const decryptedMsg = encryptedMessage
      .split("")
      .map((char) => {
        const charCode = char.charCodeAt(0);
        if (charCode >= 97 && charCode <= 122) {
          return String.fromCharCode(
            ((charCode - 97 - shiftGuess + 26) % 26) + 97
          );
        }
        return char;
      })
      .join("");

    setDecryptedMessage(decryptedMsg);

    if (potentialMessages.includes(decryptedMsg)) {
      setCheckResult("Congratulations! You guessed the correct shift value!");
    } else {
      setCheckResult("Sorry, that's incorrect. Keep guessing!");
    }
  };

  return (
    <div className="gameContainer">
      <h1>Caesar Cipher Decryption Game</h1>
      <h3>Have a go at decrypting a Caesar cipher!</h3>
      <p>Encrypted Message: {encryptedMessage}</p>
      <label htmlFor="shiftGuess">Your Shift Guess:</label>
      <input
        type="number"
        id="shiftGuess"
        placeholder="Enter a number between 1 and 25"
        value={shiftGuess}
        onChange={handleShiftGuess}
      />
      <button onClick={handleDecrypt}>Decrypt Message</button>
      <p>Decrypted Message: {decryptedMessage}</p>
      <p>{checkResult}</p>

      <h2>What is a Caesar cipher?</h2>
      <div className="box">
        <p>
          It is a type of substitution cipher where each letter in the plaintext
          is shifted a certain number of places down or up the alphabet.
        </p>
        <p>For example, with a shift of 3:</p>
        <p>'A' becomes 'D'</p>
        <p>'B' becomes 'E'</p>
        <p>'C' becomes 'F'</p>
      </div>
    </div>
  );
};

export default CaesarCipherGame;
