const contractAddress = "0xd027251dF25EDA15c802A65c974859eFd31EAbeD";
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
			const connectedAddress = accounts[0];
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
		const tx = await contract.incrementCounter();
		await tx.wait();
		const updatedCount = await contract.getCounter();
		console.log("Updated counter:", updatedCount);
		document.getElementById('counter').innerText = updatedCount;
	} catch (error) {
		console.error("Error incrementing counter:", error);
	}
}

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
	} catch (error) {
		console.error("Error performing arithmetic:", error);
	}
}

let connectButton = document.getElementById('connectButton');
connectButton.addEventListener('click', connectToMetaMask);


document.getElementById('incrementButton').addEventListener('click', incrementCounter);

document.getElementById('calculateButton').addEventListener('click', performArithmetic);
