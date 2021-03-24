import React from 'react';
import CountA from './components/CountA';
import CountB from './components/CountB';

// 共享状态组件
import ShareCountA from './components/ShareCountA';
import ShareCountB from './components/ShareCountB';
import ShareCountC from './components/ShareCountC';


function App() {
  return (
    <div className="App">
      <h2>非共享状态</h2>
      <CountA />
      <CountB />
      <h2>共享状态</h2>
      <ShareCountA />
      <ShareCountB />
      <ShareCountC />
    </div>
  )
}

export default App
