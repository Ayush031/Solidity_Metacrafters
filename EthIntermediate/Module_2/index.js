const contractAddress = "0xeb36680F66EB086E7171efd334255E28e665E2Ec";

const abi = [
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "a",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "b",
				"type": "uint256"
			}
		],
		"name": "arithmeticFunction",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "count",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getArithmeticResult",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getCounter",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "incrementCounter",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "sum",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];

let provider;
let signer;
let contract;
let connectedAddress;

async function getWalletBalance(address) {
	try {
		let balance = await provider.getBalance(address);
		let formattedBalance = ethers.utils.formatEther(balance);
		document.getElementById('walletBalance').innerText = formattedBalance;
		return balance;
	} catch (error) {
		console.error('Error getting wallet balance:', error);
		return null;
	}
}

async function connectToMetaMask() {
	if (window.ethereum) {
		try {
			const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
			connectedAddress = accounts[0];
			provider = new ethers.providers.Web3Provider(window.ethereum);
			signer = provider.getSigner();
			document.getElementById('walletAddress').innerText = connectedAddress;
			getWalletBalance(connectedAddress);
			alert('Wallet connected');
		} catch (error) {
			console.error('Error connecting to MetaMask:', error);
			alert('Failed to connect wallet');
		}
	} else {
		alert('No wallet found');
	}
}

async function incrementCounter() {
	try {
		const contract = new ethers.Contract(contractAddress, abi, signer);
		const tx = await contract.incrementCounter();
		await tx.wait();
		let updatedCount = await contract.getCounter();
		document.getElementById('counter').innerText = updatedCount;
		console.log("Updated counter:", updatedCount);
		getWalletBalance(connectedAddress);
	} catch (error) {
		console.error("Error incrementing counter:", error);
	}
}
document.getElementById('incrementButton').addEventListener('click', incrementCounter);

async function performArithmetic() {
	const operand1 = document.getElementById("input1").value;
	const operand2 = document.getElementById("input2").value;

	try {
		const contract = new ethers.Contract(contractAddress, abi, signer);
		const tx = await contract.arithmeticFunction(operand1, operand2);
		await tx.wait();
		const calculatedResult = await contract.getArithmeticResult();
		document.getElementById('result').innerText = calculatedResult;
		console.log("Calculated result:", calculatedResult);
		getWalletBalance(connectedAddress);
	} catch (error) {
		console.error("Error performing arithmetic:", error);
	}
}
document.getElementById('calculateButton').addEventListener('click', performArithmetic);

document.getElementById('connectButton').addEventListener('click', connectToMetaMask);



