/**
 * @文件说明: 实时共享状态
 * @Date: 2021-03-24 20:14:16
 * @Last Modified time: 2021-03-24 20:14:16
 */
import React from 'react';
import { useShareCounter } from '../hooks';

const ShareCountB: React.FC = () => {
  const { count, increment } = useShareCounter();

  return (
    <div style={{ marginTop: 10 }}>
      ShareCountB: {count}
      <button style={{ marginLeft: 10 }} onClick={increment}>更新共享状态B</button>
    </div>
  );
};

export default ShareCountB;

