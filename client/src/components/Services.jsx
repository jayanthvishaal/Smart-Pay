import React, { useEffect } from 'react';
import graph from '../../images/graph.png'
// Enhanced Styles with More Colors
const transactionItemStyle = {
  border: '1px solid #ddd',
  padding: '20px',
  marginBottom: '20px',
  backgroundColor: '#ffffff', // Keeping background white for contrast with colorful elements
  borderRadius: '8px',
  boxShadow: '0 2px 4px rgba(0,0,0,0.1)', // Soft shadow for depth
  transition: 'transform 0.2s ease-in-out', // Smooth transition for hover effect
};

const labelStyle = {
  fontWeight: 'bold',
  marginBottom: '5px', // Space between label and value
};

// Applying colorful styles for values
const valueStyle = (type) => ({
  marginLeft: '5px',
  fontWeight: 'normal',
  color: type === 'from' ? '#E91E63' : type === 'to' ? '#2196F3' : '#4CAF50', // Different colors for from, to, and amount
});

const headingStyle = {
  textAlign: 'center',
  color: '#FFF',
  marginBottom: '40px',
  fontSize: '24px', // Larger font size for the heading
  fontWeight: 'bold',
  background: 'linear-gradient(45deg, #FFC107, #FF5722)', // Gradient background for the heading
  padding: '10px',
  borderRadius: '5px',
};

const containerStyle = {
  maxWidth: '600px',
  margin: '0 auto',
  paddingTop: '20px',
  paddingBottom: '20px',
  backgroundColor: '#f0f0f0',
  borderRadius: '10px',
  boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
};

const TransactionItem = ({ transaction }) => {
  return (
    <div style={transactionItemStyle} onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.02)'} onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}>
      <div style={labelStyle}>From:<span style={valueStyle('from')}>{transaction.from}</span></div>
      <div style={labelStyle}>To:<span style={valueStyle('to')}>{transaction.to}</span></div>
      <div style={labelStyle}>Amount Sent:<span style={valueStyle('amount')}>{transaction.amount} ETH</span></div>
    </div>
  );
};

const TransactionsDisplay = ({ transactions }) => {
  return (
    <div>
      <h2 style={headingStyle}>Transactions</h2>
      {transactions.map((transaction, index) => (
        <TransactionItem key={index} transaction={transaction} />
      ))}
    </div>
  );
};

function Services() {
  useEffect(() => {
    // Set the body background color when the component mounts
    document.body.style.backgroundColor = 'black';

    // Revert the body background color when the component unmounts
    return () => {
      document.body.style.backgroundColor = '';
    };
  }, []);

  const transactions = [
    { from: '0x9wj9w w9w9q9q', to: '0xsjjiwiw jsdssh', amount: '0.5' },
    { from: '0x123456789abcdef', to: '0xfedcba987654321', amount: '1.2' },
    { from: '0xa1b2c3d4e5f6789', to: '0x9876e5d4c3b2a1', amount: '0.75' },
  ];

  return (
    <>
       <div style={containerStyle}>
      <TransactionsDisplay transactions={transactions} />
    </div>  
    <h1 style={{marginLeft: 600}}className="text-3xl sm:text-5xl text-white text-gradient py-1">
            Graph
          </h1>
    <img style={{width:380, height:300, marginLeft: 400, marginTop: 40 }} src={graph} alt="logo" className="w-32 cursor-pointer" />
    </>
 
  );
}

export default Services;
