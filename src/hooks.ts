import { useState } from 'react';
import { createModel } from 'hox';

// 非共享状态
export const useCounter = () => {
  const [count, setCount] = useState(0);
  const decrement = () => setCount(prev => prev + 1);
  const increment = () => setCount(prev => prev + 1);
  
  return {
    count,
    decrement,
    increment
  };
};

// 共享状态
export const useShareCounter = createModel(useCounter);