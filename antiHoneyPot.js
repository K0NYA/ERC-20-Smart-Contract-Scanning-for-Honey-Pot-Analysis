const Web3 = require('web3');

const web3 = new Web3(new Web3.providers.HttpProvider('https://mainnet.infura.io/v3/YOUR_PROJECT_ID'));

const contractAddress = '0x742d35Cc6634C0532925a3b844Bc454e4438f44e';

const abi = [
  {
    "constant": true,
    "inputs": [
      {
        "name": "",
        "type": "address"
      }
    ],
    "name": "balanceOf",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }
];

const contract = new web3.eth.Contract(abi, contractAddress);

contract.methods.balanceOf('0x742d35Cc6634C0532925a3b844Bc454e4438f44e').call((error, result) => {
  if (error) {
    console.error(error);
  } else {
    console.log(result);
  }
});
