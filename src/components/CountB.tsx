import React from 'react';
import { useCounter } from '../hooks';

const CountB: React.FC = () => {
  const { count, increment } = useCounter();
  
  return (
    <div style={{ marginTop: 10 }}>
      CountB: {count}
      <button style={{ marginLeft: 10 }} onClick={increment}>更新共享状态A</button>
    </div>
  );
};

export default CountB;

