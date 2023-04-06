import React from 'react';
import { List } from '@mui/joy';
import { transactionsList } from './tempDataTransactions';
import { TransactionReward } from './types';
import TransactionListItem from './TransactionListItem/TransactionListItem';

const TransactionList: React.FC = () => {
  return (
    <List>
      {transactionsList.map((transaction: TransactionReward) => (
        <TransactionListItem transaction={transaction}/>
      ))}
    </List>
  );
};

export default TransactionList;