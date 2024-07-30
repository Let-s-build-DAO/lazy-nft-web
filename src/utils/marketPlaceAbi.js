const MARKETPLACE_ABI =[
	{
			"inputs": [
					{
							"internalType": "address",
							"name": "nftAddress",
							"type": "address"
					}
			],
			"stateMutability": "nonpayable",
			"type": "constructor"
	},
	{
			"inputs": [],
			"name": "MarketPlace__ItemClaimed",
			"type": "error"
	},
	{
			"inputs": [],
			"name": "MarketPlace__ItemIsNotClaimable",
			"type": "error"
	},
	{
			"inputs": [],
			"name": "MarketPlace__ItemNotFound",
			"type": "error"
	},
	{
			"inputs": [],
			"name": "MarketPlace__NotAskingPrice",
			"type": "error"
	},
	{
			"inputs": [],
			"name": "MarketPlace__OutOfSale",
			"type": "error"
	},
	{
			"inputs": [],
			"name": "MarketPlace__OutOfSupply",
			"type": "error"
	},
	{
			"inputs": [
					{
							"internalType": "address",
							"name": "owner",
							"type": "address"
					}
			],
			"name": "OwnableInvalidOwner",
			"type": "error"
	},
	{
			"inputs": [
					{
							"internalType": "address",
							"name": "account",
							"type": "address"
					}
			],
			"name": "OwnableUnauthorizedAccount",
			"type": "error"
	},
	{
			"inputs": [],
			"name": "ReentrancyGuardReentrantCall",
			"type": "error"
	},
	{
			"anonymous": false,
			"inputs": [
					{
							"indexed": true,
							"internalType": "uint96",
							"name": "itemId",
							"type": "uint96"
					},
					{
							"indexed": true,
							"internalType": "uint96",
							"name": "tokenId",
							"type": "uint96"
					},
					{
							"indexed": false,
							"internalType": "address",
							"name": "giver",
							"type": "address"
					},
					{
							"indexed": false,
							"internalType": "uint96",
							"name": "supply",
							"type": "uint96"
					}
			],
			"name": "ClaimableItemCreated",
			"type": "event"
	},
	{
			"anonymous": false,
			"inputs": [
					{
							"indexed": true,
							"internalType": "uint96",
							"name": "itemId",
							"type": "uint96"
					},
					{
							"indexed": true,
							"internalType": "uint96",
							"name": "tokenId",
							"type": "uint96"
					},
					{
							"indexed": false,
							"internalType": "address",
							"name": "giver",
							"type": "address"
					},
					{
							"indexed": false,
							"internalType": "uint96",
							"name": "supply",
							"type": "uint96"
					}
			],
			"name": "MarketItemClaimed",
			"type": "event"
	},
	{
			"anonymous": false,
			"inputs": [
					{
							"indexed": true,
							"internalType": "uint96",
							"name": "itemId",
							"type": "uint96"
					},
					{
							"indexed": true,
							"internalType": "uint96",
							"name": "tokenId",
							"type": "uint96"
					},
					{
							"indexed": false,
							"internalType": "address",
							"name": "seller",
							"type": "address"
					},
					{
							"indexed": false,
							"internalType": "uint256",
							"name": "price",
							"type": "uint256"
					},
					{
							"indexed": false,
							"internalType": "uint96",
							"name": "supply",
							"type": "uint96"
					}
			],
			"name": "MarketItemCreated",
			"type": "event"
	},
	{
			"anonymous": false,
			"inputs": [
					{
							"indexed": true,
							"internalType": "uint96",
							"name": "itemId",
							"type": "uint96"
					},
					{
							"indexed": true,
							"internalType": "uint96",
							"name": "tokenId",
							"type": "uint96"
					},
					{
							"indexed": false,
							"internalType": "address",
							"name": "buyer",
							"type": "address"
					},
					{
							"indexed": false,
							"internalType": "uint256",
							"name": "price",
							"type": "uint256"
					},
					{
							"indexed": false,
							"internalType": "uint96",
							"name": "supply",
							"type": "uint96"
					}
			],
			"name": "MarketItemSold",
			"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
					"indexed": true,
					"internalType": "address",
					"name": "previousOwner",
					"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "uint96",
				"name": "itemId",
				"type": "uint96"
			}
		],
		"name": "claimNft",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
			"inputs": [
					{
							"internalType": "uint96",
							"name": "tokenId",
							"type": "uint96"
					},
					{
							"internalType": "uint96",
							"name": "supply",
							"type": "uint96"
					}
			],
			"name": "createClaimableItem",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
	},
	{
			"inputs": [
					{
							"internalType": "uint96",
							"name": "tokenId",
							"type": "uint96"
					},
					{
							"internalType": "uint256",
							"name": "price",
							"type": "uint256"
					},
					{
							"internalType": "uint96",
							"name": "supply",
							"type": "uint96"
					}
			],
			"name": "createMarketItem",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
	},
	{
			"inputs": [
					{
							"internalType": "uint96",
							"name": "itemId",
							"type": "uint96"
					},
					{
							"internalType": "uint96",
							"name": "supply",
							"type": "uint96"
					}
			],
			"name": "createMarketSale",
			"outputs": [],
			"stateMutability": "payable",
			"type": "function"
	},
	{
			"inputs": [],
			"name": "fetchClaimableItems",
			"outputs": [
					{
							"components": [
									{
											"internalType": "uint96",
											"name": "itemId",
											"type": "uint96"
									},
									{
											"internalType": "uint96",
											"name": "tokenId",
											"type": "uint96"
									},
									{
											"internalType": "address",
											"name": "giver",
											"type": "address"
									},
									{
											"internalType": "uint96",
											"name": "suppy",
											"type": "uint96"
									}
							],
							"internalType": "struct MarketPlace.s_ClaimableItem[]",
							"name": "",
							"type": "tuple[]"
					}
			],
			"stateMutability": "view",
			"type": "function"
	},
	{
			"inputs": [],
			"name": "fetchItemsCreated",
			"outputs": [
					{
							"components": [
									{
											"internalType": "uint96",
											"name": "itemId",
											"type": "uint96"
									},
									{
											"internalType": "uint96",
											"name": "tokenId",
											"type": "uint96"
									},
									{
											"internalType": "address payable",
											"name": "seller",
											"type": "address"
									},
									{
											"internalType": "uint256",
											"name": "price",
											"type": "uint256"
									},
									{
											"internalType": "uint96",
											"name": "suppy",
											"type": "uint96"
									}
							],
							"internalType": "struct MarketPlace.s_MarketItem[]",
							"name": "",
							"type": "tuple[]"
					}
			],
			"stateMutability": "view",
			"type": "function"
	},
	{
			"inputs": [],
			"name": "fetchMarketItems",
			"outputs": [
					{
							"components": [
									{
											"internalType": "uint96",
											"name": "itemId",
											"type": "uint96"
									},
									{
											"internalType": "uint96",
											"name": "tokenId",
											"type": "uint96"
									},
									{
											"internalType": "address payable",
											"name": "seller",
											"type": "address"
									},
									{
											"internalType": "uint256",
											"name": "price",
											"type": "uint256"
									},
									{
											"internalType": "uint96",
											"name": "suppy",
											"type": "uint96"
									}
							],
							"internalType": "struct MarketPlace.s_MarketItem[]",
							"name": "",
							"type": "tuple[]"
					}
			],
			"stateMutability": "view",
			"type": "function"
	},
	{
			"inputs": [
					{
							"internalType": "address",
							"name": "user",
							"type": "address"
					}
			],
			"name": "getAllUserPurchases",
			"outputs": [
					{
							"components": [
									{
											"internalType": "uint96",
											"name": "itemId",
											"type": "uint96"
									},
									{
											"internalType": "uint96",
											"name": "tokenId",
											"type": "uint96"
									},
									{
											"internalType": "uint96",
											"name": "suppy",
											"type": "uint96"
									}
							],
							"internalType": "struct MarketPlace.s_UserItem[]",
							"name": "",
							"type": "tuple[]"
					}
			],
			"stateMutability": "view",
			"type": "function"
	},
	{
			"inputs": [
					{
							"internalType": "address",
							"name": "user",
							"type": "address"
					},
					{
							"internalType": "uint96",
							"name": "itemId",
							"type": "uint96"
					}
			],
			"name": "getUserPurchases",
			"outputs": [
					{
							"components": [
									{
											"internalType": "uint96",
											"name": "itemId",
											"type": "uint96"
									},
									{
											"internalType": "uint96",
											"name": "tokenId",
											"type": "uint96"
									},
									{
											"internalType": "uint96",
											"name": "suppy",
											"type": "uint96"
									}
							],
							"internalType": "struct MarketPlace.s_UserItem",
							"name": "",
							"type": "tuple"
					}
			],
			"stateMutability": "view",
			"type": "function"
	},
	{
			"inputs": [],
			"name": "i_nftContract",
			"outputs": [
					{
							"internalType": "contract IERC1155",
							"name": "",
							"type": "address"
					}
			],
			"stateMutability": "view",
			"type": "function"
	},
	{
			"inputs": [
					{
							"internalType": "address",
							"name": "",
							"type": "address"
					},
					{
							"internalType": "address",
							"name": "",
							"type": "address"
					},
					{
							"internalType": "uint256[]",
							"name": "",
							"type": "uint256[]"
					},
					{
							"internalType": "uint256[]",
							"name": "",
							"type": "uint256[]"
					},
					{
							"internalType": "bytes",
							"name": "",
							"type": "bytes"
					}
			],
			"name": "onERC1155BatchReceived",
			"outputs": [
					{
							"internalType": "bytes4",
							"name": "",
							"type": "bytes4"
					}
			],
			"stateMutability": "nonpayable",
			"type": "function"
	},
	{
			"inputs": [
					{
							"internalType": "address",
							"name": "",
							"type": "address"
					},
					{
							"internalType": "address",
							"name": "",
							"type": "address"
					},
					{
							"internalType": "uint256",
							"name": "",
							"type": "uint256"
					},
					{
							"internalType": "uint256",
							"name": "",
							"type": "uint256"
					},
					{
							"internalType": "bytes",
							"name": "",
							"type": "bytes"
					}
			],
			"name": "onERC1155Received",
			"outputs": [
					{
							"internalType": "bytes4",
							"name": "",
							"type": "bytes4"
					}
			],
			"stateMutability": "nonpayable",
			"type": "function"
	},
	{
			"inputs": [],
			"name": "owner",
			"outputs": [
					{
							"internalType": "address",
							"name": "",
							"type": "address"
					}
			],
			"stateMutability": "view",
			"type": "function"
	},
	{
			"inputs": [],
			"name": "renounceOwnership",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
	},
	{
			"inputs": [],
			"name": "s_claimableCounter",
			"outputs": [
					{
							"internalType": "uint96",
							"name": "",
							"type": "uint96"
					}
			],
			"stateMutability": "view",
			"type": "function"
	},
	{
			"inputs": [],
			"name": "s_claimedItemsCounter",
			"outputs": [
					{
							"internalType": "uint96",
							"name": "",
							"type": "uint96"
					}
			],
			"stateMutability": "view",
			"type": "function"
	},
	{
			"inputs": [
					{
							"internalType": "uint96",
							"name": "",
							"type": "uint96"
					}
			],
			"name": "s_idToClaimableItem",
			"outputs": [
					{
							"internalType": "uint96",
							"name": "itemId",
							"type": "uint96"
					},
					{
							"internalType": "uint96",
							"name": "tokenId",
							"type": "uint96"
					},
					{
							"internalType": "address",
							"name": "giver",
							"type": "address"
					},
					{
							"internalType": "uint96",
							"name": "suppy",
							"type": "uint96"
					}
			],
			"stateMutability": "view",
			"type": "function"
	},
	{
			"inputs": [
					{
							"internalType": "uint96",
							"name": "",
							"type": "uint96"
					}
			],
			"name": "s_idToMarketItem",
			"outputs": [
					{
							"internalType": "uint96",
							"name": "itemId",
							"type": "uint96"
					},
					{
							"internalType": "uint96",
							"name": "tokenId",
							"type": "uint96"
					},
					{
							"internalType": "address payable",
							"name": "seller",
							"type": "address"
					},
					{
							"internalType": "uint256",
							"name": "price",
							"type": "uint256"
					},
					{
							"internalType": "uint96",
							"name": "suppy",
							"type": "uint96"
					}
			],
			"stateMutability": "view",
			"type": "function"
	},
	{
			"inputs": [],
			"name": "s_itemsCounter",
			"outputs": [
					{
							"internalType": "uint96",
							"name": "",
							"type": "uint96"
					}
			],
			"stateMutability": "view",
			"type": "function"
	},
	{
			"inputs": [],
			"name": "s_salePercentage",
			"outputs": [
					{
							"internalType": "uint96",
							"name": "",
							"type": "uint96"
					}
			],
			"stateMutability": "view",
			"type": "function"
	},
	{
			"inputs": [],
			"name": "s_soldItemsCounter",
			"outputs": [
					{
							"internalType": "uint96",
							"name": "",
							"type": "uint96"
					}
			],
			"stateMutability": "view",
			"type": "function"
	},
	{
			"inputs": [
					{
							"internalType": "address",
							"name": "",
							"type": "address"
					},
					{
							"internalType": "uint96",
							"name": "",
							"type": "uint96"
					}
			],
			"name": "s_userPurchases",
			"outputs": [
					{
							"internalType": "uint96",
							"name": "itemId",
							"type": "uint96"
					},
					{
							"internalType": "uint96",
							"name": "tokenId",
							"type": "uint96"
					},
					{
							"internalType": "uint96",
							"name": "suppy",
							"type": "uint96"
					}
			],
			"stateMutability": "view",
			"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes4",
				"name": "interfaceId",
				"type": "bytes4"
			}
		],
		"name": "supportsInterface",
		"outputs": [
			{
					"internalType": "bool",
					"name": "",
					"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
			"inputs": [
					{
							"internalType": "address",
							"name": "newOwner",
							"type": "address"
					}
			],
			"name": "transferOwnership",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
	},
	{
			"inputs": [
					{
							"internalType": "address payable",
							"name": "_payableAddress",
							"type": "address"
					}
			],
			"name": "withdraw",
			"outputs": [],
			"stateMutability": "payable",
			"type": "function"
	}
]
export default MARKETPLACE_ABI;