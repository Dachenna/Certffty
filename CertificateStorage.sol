// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract CertificateStorage {
    struct Certificate {
        string ipfsHash;
        address owner;
    }

    mapping(string => Certificate) private certificates;
    mapping(address => string[]) private userCertificates;
    
    address payable public owner;  // Your wallet address
    uint256 public constant FEE_AMOUNT = 600 * 10**9; // 600 NGN worth of WEI (adjust this based on ETH price)

    event CertificateStored(address indexed owner, string ipfsHash);
    event FeePaid(address indexed payer, uint256 amount);

    constructor() {
        owner = payable(msg.sender); // Set contract deployer as owner
    }

    function storeCertificate(string memory _ipfsHash) public payable {
        require(bytes(certificates[_ipfsHash].ipfsHash).length == 0, "Certificate already exists");
        require(msg.value >= FEE_AMOUNT, "Insufficient fee! 600 NGN worth of ETH required");

        certificates[_ipfsHash] = Certificate(_ipfsHash, msg.sender);
        userCertificates[msg.sender].push(_ipfsHash);

        owner.transfer(msg.value); // Transfer fee to owner

        emit CertificateStored(msg.sender, _ipfsHash);
        emit FeePaid(msg.sender, msg.value);
    }

    function verifyCertificate(string memory _ipfsHash) public view returns (bool, address) {
        Certificate memory cert = certificates[_ipfsHash];
        if (bytes(cert.ipfsHash).length > 0) {
            return (true, cert.owner);
        }
        return (false, address(0));
    }
}
