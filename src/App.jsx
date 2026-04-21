import React, { useState, useMemo } from 'react';
import { Header } from './Header.jsx';
import { Message } from './Message.jsx';

const MemoizeHeader = React.memo(Header);

const App = () => {

    const [count, setCount] = useState(0);
    const configuration = {
      id: '1',
      name: 'default configuration'
    };

    const memoizedConfiguration = useMemo(() => ({...configuration}), []);

  return (
    <div>
        <MemoizeHeader configuration={memoizedConfiguration}>
          <Message />
        </MemoizeHeader>
      <span>Counts: {count}</span>
      <button onClick={() => setCount((prev) => prev+1)}>+1</button>
    </div>
  )
};

export default App;
