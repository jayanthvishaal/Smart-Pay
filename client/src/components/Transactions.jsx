import React, { useState } from 'react';

const Transactions = () => {
  const [transactionHash, setTransactionHash] = useState('');
  const [error, setError] = useState('');

  const sendTransaction = async () => {
    const params = [
      {
        from: '0x9f936E5517c0fDF87f7f8DfA74fCc8e392677B2F',
        to: '0xd143D02C39A965ee003815DC8b9578aD29D100Cf',
        gas: '0x10', 
        gasPrice: '0x100', 
        value: '0x1000', 
        data: '0xd46e8dd67c5d32be8d46e8dd67c5d32be8058bb8eb970870f072445675058bb8eb970870f072445675',
      },
    ];

    if (window.ethereum) {
      try {
        const txHash = await window.ethereum.request({
          method: 'eth_sendTransaction',
          params,
        });
        setTransactionHash(txHash);
        alert(`Transaction successful with hash: ${txHash}`);
      } catch (err) {
        setError(err.message);
        alert(`Transaction failed: ${err.message}`);
      }
    } else {
      alert('Ethereum object not found; make sure you have MetaMask installed.');
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: 'auto', textAlign: 'center' }}>
    <button 
      onClick={sendTransaction} 
      style={{ 
        backgroundColor: '#4CAF50', // Green background
        color: 'white',
        padding: '10px 20px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        fontSize: '16px',
        transition: 'background-color 0.3s ease',
        marginTop: -100,
      }}
      onMouseOver={(e) => e.target.style.backgroundColor = '#45a049'} // Darker green on hover
      onMouseOut={(e) => e.target.style.backgroundColor = '#4CAF50'}
    >
      Send Transaction
    </button>
    {transactionHash && (
      <p style={{ 
        backgroundColor: '#f9f9f9',
        padding: '10px',
        marginTop: '10px',
        borderRadius: '5px',
        borderLeft: '5px solid #2196F3', // Blue border for info
        color: '#333',
      }}>
        Transaction Hash: {transactionHash}
      </p>
    )}
    {error && (
      <p style={{ 
        backgroundColor: '#ffdddd',
        padding: '10px',
        marginTop: '10px',
        borderRadius: '5px',
        borderLeft: '5px solid #f44336', // Red border for error
        color: '#333',
      }}>
        Error: {error}
      </p>
    )}
  </div>
  
  );
};

export default Transactions;
