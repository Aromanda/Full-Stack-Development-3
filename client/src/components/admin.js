import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

function AgentsListCard() {
  const navigate = useNavigate();

  const redirectToRecordList = () => {
    navigate('/recordList');
  };

  return (
    <Card>
      <Card.Header>Option 1</Card.Header>
      <Card.Body>
        <Card.Title>Agents List</Card.Title>
        <Card.Text>
          Take a look at our top agents and choose wisely.
        </Card.Text>
        <Button variant="primary" onClick={redirectToRecordList}>
          Click here
        </Button>
      </Card.Body>
    </Card>
  );
}

function TransactionsCard() {
    const navigate = useNavigate();

    const redirectToTransactionsList = () => {
      navigate('/transaction');
    };

  return (
    <Card>
      <Card.Header>Option 2</Card.Header>
      <Card.Body>
        <Card.Title>Transactions List</Card.Title>
        <Card.Text>
          You will have access to see the last 10 transactions and a new transaction form.
        </Card.Text>
        <Button variant="danger" onClick={redirectToTransactionsList}>
            Click here
        </Button>
      </Card.Body>
    </Card>
  );
}

export { AgentsListCard, TransactionsCard };
