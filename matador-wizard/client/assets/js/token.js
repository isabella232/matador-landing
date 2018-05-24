$(document).ready(function() {
	const web3 = window.web3;
	const ownerAddr = web3.eth.coinbase;
	const matadorPrice = 100;
	const decimalFactor = 10**18;
	const polyFeeWei = matadorPrice * decimalFactor;
	const decimals = 18 * decimalFactor;
	const namespace = 'matador';

	// post data
	var postData;

	// network
	var curNetwork;

	// Contract Addresses
	const strAdr = '0xe93d40736a9537308d822bf15edae634a24be179';
	const polyAdr = '0x96A62428509002a7aE5F6AD29E4750d852A3f3D7';

	// STR Contract
	const strContract = web3.eth.contract(strAbi).at(strAdr);
	console.log('STR Contract:', strContract);

	// Poly Contract
	const polyContract = web3.eth.contract(polyAbi).at(polyAdr);
	console.log('POLY Contract:', polyContract);

	// Watch for new Approvals
	const approvalEvent = polyContract.Approval({});
	approvalEvent.watch(function (err, res) {
		if (err) console.log('Approval Event Error:', err);
		if (res.args.owner == ownerAddr) {
			console.log('Approval Event result:', res);
			$('#loader .loading-text').html('Approving Token Creation!');
			$('#loader .loading-tx').html("");

			approvalEvent.stopWatching();
			createToken();
		}
	});

	// Watch for new security token creation.
	const newTokenEvent = strContract.LogNewSecurityToken({});
	newTokenEvent.watch(function (err, res) {
		if (err) {
			$('#loader').modal('hide');
			console.log('New Token Event Error:', err);
		}
		console.log('New Token Event:', res);
		postData['ethAddress'] = res.args._securityTokenAddress;
		$('#loader .loading-text').html('Token created, Saving to Database!');
		$('#loader .loading-tx').html('');
		$.post( "/api/tokens", { postData })
			.done(function( data ) {
				$('#loader .loading-text').html('Successfully Saved to Database!');
				setTimeout(function() {window.location = '/dashboard.html'}, 5000);
			});
		newTokenEvent.stopWatching();
	});

	// Create Token Button Event
	$('.create-token-btn').click(function () {
		postData = {
			"repName": $("#input-contact-person").val(),
			"repTitle": $("#input-title").val(),
			"repPhone": $("#input-phone-number").val(),
			"repEmail": $("#input-email").val(),
			"companyName": $("#input-legal-name").val(),
			"entityType": $("#input-equity-jurisdiction").val(),
			"description": $("#input-description").val(),
			"website": $("#input-website").val(),
			"ticker": $("#input-ticker").val(),
			"supply": $("#total-supply").val(),
			"owner": $("#owner-address").val(),
			"offeringType": $("#input-desired-symbol").val(),
			"tokenName": $("#input-token-name").val(),
		};
		approvePoly();
	});

	// Approve Poly
	function approvePoly() {
		$('#loader').modal('show');
		polyContract.approve(strAdr, polyFeeWei, function (err, res) {
			if (err) {
				console.log('Approve Error:', err);
				$('#loader .loading-text').html('Transaction Declined!');
				setTimeout(function() {$('#loader').modal('hide')}, 2000);
			} else {
				console.log(res);
			$('#loader .loading-text').html('Waiting for block to be mined...');
				$('#loader .loading-tx').html(`<a href="https://${curNetwork}etherscan.io/tx/${res}" target="_blank">Etherscan TX: ${res}</a>`);
				console.log('Approve TX:', res);
			}
		});
	}

	// Create Security token
	function createToken() {
// (nameSpace, Token Name, Token Symbol, total supply, decimals (default 18), owner (eth address), type (default 8))
		strContract.createSecurityToken(namespace, postData.tokenName, postData.ticker, postData.supply, decimals, ownerAddr, 8, function (err, res) {
			if (err) {
				console.log('TX Error:', err);
				$('#loader .loading-text').html('Transaction Declined!');
				setTimeout(function() {$('#loader').modal('hide')}, 2000);
			} else {
				console.log(res);
				$('#loader .loading-text').html('Creating Security Token...');
				$('#loader .loading-tx').html(`<a href="https://${curNetwork}etherscan.io/tx/${res}" target="_blank">Etherscan TX: ${res}</a>`);
			}
		});
	}


	  //////////////
	 // Defaults //
	//////////////
	// Set user eth address as default
	$('#owner-address').val(ownerAddr);

	// Set total supply
	$('#total-supply').val(1000000000);

	// Set Poly Balance in Header
	polyContract.balanceOf(ownerAddr, function(err, res) {
		if (err) console.log(err);
		const poly = web3.fromWei(res.toNumber(), "ether" );
		$('#cur-poly-balance').html(' ' + poly + ' POLY');
	});

	// Set Network Name in Header
	web3.version.getNetwork(function(err, netId) {
		var network;
		switch (netId) {
		case "1":
			network = 'Mainnet';
			curNetwork = '';
			break;
		case "2":
			network = 'Deprecated Test Net';
			curNetwork = '';
			break;
		case "3":
			network = "Ropsten Test Net";
			curNetwork = 'ropsten.';
			break;
		case "4":
			network = 'Rinkeby Test Net';
			curNetwork = 'rinkeby.';
			break;
		case "42":
			network = 'Kovan Test Net';
			curNetwork = 'kovan.';
			break;
		default:
			network = 'Unknown Network';
		}
		$('#cur-network').html(network);
	});

	  /////////////////
	 // SETUP STUFF //
	/////////////////

	// Setup PolyToken Contract

	// Create namespace
	// strContract.createNameSpace(namespace, polyFeeWei, function (err, res) {
	// if (err) console.log(err);
	// console.log(res);
	// });

	// Check namespace
	// strContract.getNameSpaceData(namespace, (err, res) {
	// if (err) console.log(err);
	// console.log(res);
	// });

	// Get Poly Tokens
	// polyContract.getTokens(10000, ownerAddr, function (err, res) {
	// 	if (err) console.log('Get Tokens Error:', err);
	// 	console.log('Get Tokens', res);
	// });

	// polyContract.allowance(ownerAddr, strAdr, function (err, res) {
	// 	if (err) console.log(err);
	// 	const allowance = web3.fromWei(res.toNumber(), "ether" );
	// 	console.log('Allowance:', allowance + ' Poly');
	// });
});


const polyAbi = [{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_subtractedValue","type":"uint256"}],"name":"decreaseApproval","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimalFactor","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_addedValue","type":"uint256"}],"name":"increaseApproval","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"_polyDistributionContractAddress","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"}];
const strAbi = [{"constant":true,"inputs":[],"name":"polyCustomersAddress","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_nameSpace","type":"string"},{"name":"_ticker","type":"string"}],"name":"getSecurityTokenAddress","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_nameSpace","type":"string"},{"name":"_fee","type":"uint256"}],"name":"changeNameSpace","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_nameSpace","type":"string"},{"name":"_fee","type":"uint256"}],"name":"createNameSpace","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_nameSpaceName","type":"string"},{"name":"_name","type":"string"},{"name":"_ticker","type":"string"},{"name":"_totalSupply","type":"uint256"},{"name":"_decimals","type":"uint8"},{"name":"_owner","type":"address"},{"name":"_type","type":"uint8"}],"name":"createSecurityToken","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_STAddress","type":"address"}],"name":"getSecurityTokenData","outputs":[{"name":"","type":"string"},{"name":"","type":"string"},{"name":"","type":"address"},{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"polyComplianceAddress","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"PolyToken","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_nameSpace","type":"string"}],"name":"getNameSpaceData","outputs":[{"name":"","type":"address"},{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"VERSION","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"_polyTokenAddress","type":"address"},{"name":"_polyCustomersAddress","type":"address"},{"name":"_polyComplianceAddress","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_nameSpace","type":"string"},{"indexed":false,"name":"_ticker","type":"string"},{"indexed":true,"name":"_securityTokenAddress","type":"address"},{"indexed":true,"name":"_owner","type":"address"},{"indexed":false,"name":"_type","type":"uint8"}],"name":"LogNewSecurityToken","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_nameSpace","type":"string"},{"indexed":false,"name":"_owner","type":"address"},{"indexed":false,"name":"_fee","type":"uint256"}],"name":"LogNameSpaceCreated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_nameSpace","type":"string"},{"indexed":false,"name":"_newOwner","type":"address"},{"indexed":false,"name":"_newFee","type":"uint256"}],"name":"LogNameSpaceChange","type":"event"}];
