import React from 'react';
import PropTypes from 'prop-types';

import './CompletedTransactionsList.css';

import Transaction from '../Transaction/Transaction';

const CompletedTransactionsList = ({ transactions }) => (
	<div className='CompletedTransactionsList'>
		<div className='wave'></div>
		{transactions.length > 0 &&
			transactions.map(transaction => (
				<Transaction
					key={transaction.hash}
					{...transaction}
				/>
			))
		}
		{transactions.length <= 0 &&
			<div className='no-results'>
				<p>
					There are no transactions to show...yet
				</p>
			</div>
		}
	</div>
);

CompletedTransactionsList.description = `
Iterates through the transactions and hands rendering responsibility to child <Transaction/> components.

Should have an empty state for no transactions.
`;

CompletedTransactionsList.propTypes = {
	/** Array of Transactions, see the Transaction component for specific propTypes */
	transactions: PropTypes.array,
};

export default CompletedTransactionsList;
