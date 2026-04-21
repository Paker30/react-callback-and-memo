import React, { useState, useCallback } from 'react';
import { Header } from './Header.jsx'

const App = () => {

    const [count, setCount] = useState(0);

  return (
    <div>
        <Header />
      <span>Counts: {count}</span>
      <button onClick={() => setCount((prev) => prev+1)}>+1</button>
    </div>
  )
};

export default App
