import React from 'react';

// React.useState has the ability to change something on the fly
function App() {
  const [message, setMessage] = React.useState ("Where are you?");

  function handleClick() {
    setMessage("And I'm so sorry")
  }

return (
  <>
  <h1> {message}</h1>
  <button onClick={handleClick}>Update message</button>

  </>
)
}

export default App;