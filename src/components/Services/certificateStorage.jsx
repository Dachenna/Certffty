import { ethers } from "ethers";

const contractAddress = "0xd8b934580fcE35a11B58C6D73aDeE468a2833fa8"; // Replace with actual deployed contract
const contractABI = [
  {
    "inputs": [{ "internalType": "string", "name": "_ipfsHash", "type": "string" }],
    "name": "storeCertificate",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [{ "internalType": "string", "name": "_ipfsHash", "type": "string" }],
    "name": "verifyCertificate",
    "outputs": [
      { "internalType": "bool", "name": "", "type": "bool" },
      { "internalType": "address", "name": "", "type": "address" }
    ],
    "stateMutability": "view",
    "type": "function"
  }
];

const getBlockchain = async () => {
  if (!window.ethereum) {
    alert("MetaMask not detected!");
    return null;
  }
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  const contract = new ethers.Contract(contractAddress, contractABI, signer);
  return contract;
};

export { getBlockchain };
