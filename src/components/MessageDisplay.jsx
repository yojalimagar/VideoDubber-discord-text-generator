import { useState } from 'react';
function MessageDisplay() {
  const [message, setMessage] = useState('');

  return (
    <div style={{ textAlign: 'center', marginTop: '50px'}}>
      <h2 c="white">React Component Example</h2>
      <input
        type="text"
        placeholder="Enter a message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        style={{ padding: '8px', fontSize: '16px' }}
      />
      <p>You entered: {message}</p>
    </div>
  );
}

export default MessageDisplay;
