/******************************************************************************
**	@Author:				Thomas Bouder <Tbouder>
**	@Email:					Tbouder@protonmail.com
**	@Date:					Wednesday July 14th 2021
**	@Filename:				actions.js
******************************************************************************/

import	{ethers}						from	'ethers';

export async function	approveToken({provider, contractAddress, amount, from}, callback) {
	const	signer = provider.getSigner();
	const	erc20 = new ethers.Contract(
		contractAddress,
		['function approve(address spender, uint256 amount) public returns (bool)'],
		signer
	);

	/**********************************************************************
	**	In order to avoid dumb error, let's first check if the TX would
	**	be successful with a static call
	**********************************************************************/
	try {
		await erc20.callStatic.approve(from, amount);
	} catch (error) {
		callback({error: true, data: undefined});
		return;
	}

	/**********************************************************************
	**	If the call is successful, try to perform the actual TX
	**********************************************************************/
	try {
		const	transaction = await erc20.approve(from, amount);
		const	transactionResult = await transaction.wait();
		if (transactionResult.status === 1) {
			callback({error: false, data: amount});
		} else {
			callback({error: true, data: undefined});
		}
	} catch (error) {
		callback({error: true, data: undefined});
	}
}

export async function	migrateTokens({provider, contractAddress, service, coinAddress}, callback) {
	const	abi = ['function migrate(tuple(uint8 service, address coin)[] swap)'];
	const	signer = provider.getSigner();
	const	contract = new ethers.Contract(contractAddress, abi, signer);

	/**********************************************************************
	**	If the call is successful, try to perform the actual TX
	**********************************************************************/
	try {
		const	swap = [[service, coinAddress]];
		const	transaction = await contract.migrate(swap);
		const	transactionResult = await transaction.wait();
		if (transactionResult.status === 1) {
			callback({error: false, data: undefined});
		} else {
			callback({error: true, data: undefined});
		}
	} catch (error) {
		console.error(error);
		callback({error: true, data: undefined});
	}
}

export async function	migrateBachTokens({provider, contractAddress, batch}, callback) {
	const	abi = ['function migrate(tuple(uint8 service, address coin)[] swap)'];
	const	signer = provider.getSigner();
	const	contract = new ethers.Contract(contractAddress, abi, signer);

	/**********************************************************************
	**	If the call is successful, try to perform the actual TX
	**********************************************************************/
	try {

		const	transaction = await contract.migrate(batch);
		const	transactionResult = await transaction.wait();
		if (transactionResult.status === 1) {
			callback({error: false, data: undefined});
		} else {
			callback({error: true, data: undefined});
		}
	} catch (error) {
		console.error(error);
		callback({error: true, data: undefined});
	}
}
