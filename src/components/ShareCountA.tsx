import React from 'react';
import { useShareCounter } from '../hooks';

const ShareCountA: React.FC = () => {
  const { count, increment } = useShareCounter();
  return (
    <div>
      ShareCountA: {count}
      <button style={{ marginLeft: 10 }} onClick={increment}>更新共享状态A</button>
    </div>
  );
};

export default ShareCountA;

