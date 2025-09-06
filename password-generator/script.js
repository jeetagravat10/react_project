const { useState, useCallback, useEffect } = React;

function App() {
  const [length, setLength] = useState(4);
  const [password, setPassword] = useState("");

  const generatePassword = useCallback(() => {
    const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lower = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const symbols = "@#$&";
    
    // Combine all character sets since all are mandatory
    const allChars = upper + lower + numbers + symbols;
    
    let pass = "";
    
    // Ensure at least one character from each type
    pass += upper[Math.floor(Math.random() * upper.length)];
    pass += lower[Math.floor(Math.random() * lower.length)];
    pass += numbers[Math.floor(Math.random() * numbers.length)];
    pass += symbols[Math.floor(Math.random() * symbols.length)];
    
    // Fill the rest randomly from all characters
    for (let i = 4; i < length; i++) {
      let randomIndex = Math.floor(Math.random() * allChars.length);
      pass += allChars[randomIndex];
    }
    
    // Shuffle the password to avoid predictable patterns
    pass = pass.split('').sort(() => Math.random() - 0.5).join('');
    
    setPassword(pass);
  }, [length]);



  return (
    <div className="app">
      <h1> Password Generator</h1>
      
      <div className="controls">
        <div className="length-control">
          <label>Password Length:</label>
          <input
            type="number"
            min="4"
            max="12"
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
          />
        </div>

        <button className="generate-btn" onClick={generatePassword}>
           Generate Password
        </button>
      </div>

      <div className="password-container">
        <div className={`password-box ${!password ? 'empty' : ''}`}>
          {password || "Click 'Generate Password' to create a secure password"}
        </div>
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);