import React from 'react';
import { useCounter } from '../hooks';

const Button =  React.memo(({ style }: any) => {
  console.log('Button');
  return <button style={style}>更新共享状态A</button>;
})

const style11 = { marginLeft: 10 };

const CountA: React.FC = () => {
  const { count, increment } = useCounter();
  return (
    <div style={{ marginTop: 10 }}>
      CountA: {count}
      <br/>

      <Button style={style11}></Button>
      <br/>

      <button onClick={increment}>更新</button>
    </div>
  );
};

export default CountA;

