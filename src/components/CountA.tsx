import React from 'react';
import { useCounter } from '../hooks';

const CountA: React.FC = () => {
  const { count, increment } = useCounter();
  return (
    <div style={{ marginTop: 10 }}>
      CountA: {count}
      <button style={{ marginLeft: 10 }} onClick={increment}>更新共享状态A</button>
    </div>
  );
};

export default CountA;

