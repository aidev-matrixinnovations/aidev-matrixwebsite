import React from 'react';
import { useParams } from 'react-router-dom';

const StrategyViewer = () => {
  const { strategy } = useParams();
  let src;

  switch (strategy) {
    case 'technology':
      src = '/technology.html';
      break;
    case 'marketing':
      src = '/SMMS.html';
      break;
    case 'editing':
      src = '/editing.html';
      break;
    default:
      src = '';
  }

  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <iframe
        src={src}
        style={{ width: '100%', height: '100%', border: 'none' }}
        title={`${strategy} Strategy`}
      ></iframe>
    </div>
  );
};

export default StrategyViewer;