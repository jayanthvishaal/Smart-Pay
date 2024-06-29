import React, { useState } from 'react';
import { ethers } from 'ethers';

const companyCommonStyles = "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white";

const Input = ({ placeholder, name, type, value, handleChange }) => (
  <input
    placeholder={placeholder}
    type={type}
    step="0.0001"
    value={value}
    onChange={(e) => handleChange(e, name)}
    className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
  />
);

const Welcome = () => {
  const [accounts, setAccounts] = useState([]);
  const [addressTo, setAddressTo] = useState('');
  const [amount, setAmount] = useState('');
  const [message, setMessage] = useState('');

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        setAccounts(accounts);
        alert('Wallet connected: ' + accounts[0]);
      } catch (error) {
        console.error('Error connecting to MetaMask', error);
      }
    } else {
      alert('Please install MetaMask to use this feature.');
    }
  };

  const handleChange = (e, name) => {
    if (name === 'addressTo') setAddressTo(e.target.value);
    else if (name === 'amount') setAmount(e.target.value);
    else if (name === 'message') setMessage(e.target.value);
  };

  const sendEth = async () => {
    if (!window.ethereum) return alert("Please install MetaMask.");

    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const tx = await signer.sendTransaction({
        to: addressTo,
        value: ethers.utils.parseEther(amount),
      });
      console.log('Sending ETH...', tx);
      await provider.waitForTransaction(tx.hash);
      alert(`Success! Transaction hash: ${tx.hash}`);
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to send ETH.');
    }
  };

  return (
    <div className="flex w-full justify-center items-center">
      <div className="flex mf:flex-row flex-col items-start justify-between md:p-20 py-12 px-4">
        {/* Left side - Title and MetaMask connection */}
        <div className="flex flex-1 justify-start flex-col mf:mr-10">
          <h1 className="text-3xl sm:text-5xl text-white text-gradient py-1">
            Your solution for elegant and simpler Transactions
          </h1>
          <p className="text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-base">
            Elevating Transactions, inspiring trust
          </p>
          <p className="text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-base">
          Smart Pay App Tutorial
          </p>
          <p className="text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-base">
          Introduction
          </p>
          <p className="text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-base">
          Welcome to the Smart Pay app tutorial! This app combines blockchain technology and smart contracts to enable seamless transactions, including purchasing Ether (ETH) and maintaining a ledger of your transactions. Follow these steps to make the most of the app's features.
          </p>
          <p className="text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-base">
          1. Installation
   - Download the Smart Pay app from the official app store.
   - Install and open the app on your device.
          </p>
          <p className="text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-base">
          2. Account Setup
   - Sign up for a new account or log in if you already have one.
   - Complete the necessary KYC (Know Your Customer) procedures if required.
          </p>
          <p className="text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-base">
          3. Wallet Creation
   - Navigate to the wallet section and create a new wallet.
   - Secure your wallet with a strong password and backup your recovery phrase in a safe place.
          </p>
          <p className="text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-base">
          4. Funding Your Wallet
   - Link your bank account or credit card to the app for funding.
   - Transfer funds into your wallet securely using the provided payment options.
          </p>
          <p className="text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-base">
          5. Buying Ether (ETH)
   - Access the "Buy Ether" section in the app.
   - Specify the amount of Ether you want to purchase.
   - Confirm the transaction and wait for it to be processed on the blockchain.
          </p>
          <p className="text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-base">
          6. Transaction Process
   - Use the "Transaction" feature to send and receive Ether.
   - Enter the recipient's wallet address and the amount of Ether you wish to send.
   - Confirm the transaction details and authorize the transfer.
         </p>
         <p className="text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-base">
         7. *Smart Contracts*
   - Explore the smart contract functionality for advanced transactions.
   - Utilize predefined contract templates or create custom contracts to meet your specific needs.
         </p>
         <p className="text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-base">
         8. Ledger Maintenance
   - The app automatically maintains a ledger of all your transactions.
   - Access the ledger to view a detailed history of your financial activities within the app.
         </p>
         <p className="text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-base">
         9. Security Measures
   - Enable two-factor authentication for an added layer of security.
   - Regularly update your app to benefit from the latest security enhancements.
         </p> 
         <p className="text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-base">
         10. Troubleshooting
    - In case of any issues, refer to the app's help section or contact customer support for assistance.
    - Ensure your internet connection is stable for smooth transaction processing.

         </p>
          {!accounts.length ? (
            <button
              type="button"
              onClick={connectWallet}
              className="flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]"
            >
              <p className="text-white text-base font-semibold">
                Connect Wallet
              </p>
            </button>
          ) : (
            <span className="text-white">Wallet Connected</span>
          )}
          {/* Transaction form */}
          <div style={{marginLeft:320, marginTop: 40}} className="p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism">
            <Input placeholder="Address To" name="addressTo" type="text" value={addressTo} handleChange={handleChange} />
            <Input placeholder="Amount (ETH)" name="amount" type="number" value={amount} handleChange={handleChange} />
            {/* <button
              type="button"
              onClick={sendEth}
              className="flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]"
            >
              <p className="text-white text-base font-semibold">
                Send ETH
              </p>
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
