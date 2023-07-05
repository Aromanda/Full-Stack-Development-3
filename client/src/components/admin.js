import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function AgentsListCard() {
  return (
    <Card>
      <Card.Header>Option 1</Card.Header>
      <Card.Body>
        <Card.Title>Agents List</Card.Title>
        <Card.Text>
        Take a look at our top agents and choose wisely.
        </Card.Text>
        <Button variant="primary">Click here</Button>
      </Card.Body>
    </Card>
  );
}

function TransactionsCard() {
  return (
    <Card>
      <Card.Header>Option 2</Card.Header>
      <Card.Body>
        <Card.Title>Transactions List</Card.Title>
        <Card.Text>
          You will have access to see the last 10 transactions and a new transaction form.
        </Card.Text>
        <Button variant="danger">Click here</Button>
      </Card.Body>
    </Card>
  );
}

export { AgentsListCard, TransactionsCard };

