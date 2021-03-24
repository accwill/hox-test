/**
 * @文件说明: 
 *      1. 共享延迟更新
 *      2. 在事件中获取最新的状态
 * @Date: 2021-03-24 20:14:03
 * @Last Modified time: 2021-03-24 20:14:03
 */
import React from 'react';
import { useShareCounter } from '../hooks';

const ShareCountC = () => {
  const data = useShareCounter.data;

  const handlePrint = () => {
    console.log('我是ShareCountC输出的变量', useShareCounter.data?.count)
  }
  
  return (
    <div style={{ marginTop: 10 }}>
      ShareCountC { useShareCounter.data?.count }
      <button style={{ marginLeft: 10 }} onClick={handlePrint}>打印最新变量</button>
    </div>
  );
};

export default ShareCountC;