import React, { useState } from "react";
import { ethers } from "ethers";

const contractAddress = "0xd8b934580fcE35a11B58C6D73aDeE468a2833fa8"; // 🔹 Replace with your contract address
const contractABI = [
  // 🔹 Replace with your smart contract ABI
  {
    "constant": true,
    "inputs": [{ "name": "_hash", "type": "string" }],
    "name": "verifyCertificate",
    "outputs": [{ "name": "", "type": "bool" }],
    "stateMutability": "view",
    "type": "function"
  }
];

const VerifyCertificate = () => {
  const [certificateHash, setCertificateHash] = useState("");
  const [verificationStatus, setVerificationStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleVerify = async () => {
    if (!certificateHash) {
      alert("Please enter a certificate hash.");
      return;
    }

    setLoading(true);
    try {
      if (!window.ethereum) {
        alert("MetaMask not detected! Please install MetaMask.");
        return;
      }

      // Connect to Ethereum provider
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      await window.ethereum.request({ method: "eth_requestAccounts" });

      // Get signer and contract instance
      const signer = provider.getSigner();
      const contract = new ethers.Contract(contractAddress, contractABI, signer);

      // Call the smart contract function
      const isValid = await contract.verifyCertificate(certificateHash);
      setVerificationStatus(isValid ? "✅ Certificate is Valid" : "❌ Certificate is NOT Valid");
    } catch (error) {
      setVerificationStatus("⚠️ Error verifying certificate");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-primary/50">
      <div className="bg-white p-8 shadow-lg rounded-lg max-w-md w-full">
        <h2 className="text-2xl font-bold text-center mb-4">Blockchain Certificate Verification</h2>

        <label className="block text-gray-700 mb-2">Enter Certificate Hash:</label>
        <input
          type="text"
          value={certificateHash}
          onChange={(e) => setCertificateHash(e.target.value)}
          placeholder="Enter Hash Value"
          className="w-full p-2 border rounded-md mb-4 hover:py-4 duration-200"
        />

        <button
          onClick={handleVerify}
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
          disabled={loading}
        >
          {loading ? "Verifying..." : "Verify Certificate"}
        </button>

        {verificationStatus && (
          <div className={`mt-4 text-lg font-semibold text-center ${verificationStatus.includes("Valid") ? "text-green-600" : "text-red-600"}`}>
            {verificationStatus}
          </div>
        )}
      </div>
    </div>
  );
};

export default VerifyCertificate;
