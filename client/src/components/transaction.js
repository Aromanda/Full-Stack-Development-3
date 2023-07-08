// import React, { useEffect, useState } from 'react';
// import { Form, Button, Modal } from 'react-bootstrap';

// const Transaction = () => {
//   const [amount, setAmount] = useState('');
//   const [agentId, setAgentId] = useState('');
//   const [agents, setAgents] = useState([]);
//   const [showConfirmation, setShowConfirmation] = useState(false);

//   useEffect(() => {
//     // Récupérer les données des transactions et des agents au chargement de la page
//     const fetchTransactionData = async () => {
//       try {
//         const response = await fetch('/transaction-data');
//         const data = await response.json();
//         const { transactions, agents } = data.data;
//         setAgents(agents);
//       } catch (error) {
//         console.error('Error retrieving transaction data:', error);
//       }
//     };

//     fetchTransactionData();
//   }, []);

//   const handleAmountChange = (e) => {
//     setAmount(e.target.value);
//   };

//   const handleAgentIdChange = (e) => {
//     setAgentId(e.target.value);
//   };

//   const handleSubmit = () => {
//     setShowConfirmation(true);
//   };

//   const handleConfirm = () => {
//     // Envoyer la transaction à l'API pour enregistrement
//     const transaction = {
//       amount: parseFloat(amount),
//       agent_id: agentId
//     };

//     fetch('/transaction', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(transaction)
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         console.log(data); // Traiter la réponse de l'API comme souhaité
//         setAmount('');
//         setAgentId('');
//         setShowConfirmation(false);
//       })
//       .catch((error) => {
//         console.error('Error creating transaction:', error);
//       });
//   };

//   const handleCloseConfirmation = () => {
//     setShowConfirmation(false);
//   };

//   return (
//     <div>
//       <h2>Transaction</h2>
//       <Form onSubmit={handleSubmit}>
//         <Form.Group controlId="amount">
//           <Form.Label>Amount:</Form.Label>
//           <Form.Control type="number" step="0.01" min="0" value={amount} onChange={handleAmountChange} required />
//         </Form.Group>

//         <Form.Group controlId="agentId">
//           <Form.Label>Agent:</Form.Label>
//           <Form.Control as="select" value={agentId} onChange={handleAgentIdChange} required>
//             <option value="">Select an agent</option>
//             {agents.map((agent) => (
//               <option key={agent._id} value={agent._id}>
//                 {agent.name}
//               </option>
//             ))}
//           </Form.Control>
//         </Form.Group>

//         <Button variant="primary" type="submit">
//           Submit
//         </Button>
//       </Form>

//       <Modal show={showConfirmation} onHide={handleCloseConfirmation}>
//         <Modal.Header closeButton>
//           <Modal.Title>Confirmation</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>Are you sure you want to submit the transaction?</Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleCloseConfirmation}>
//             Cancel
//           </Button>
//           <Button variant="primary" onClick={handleConfirm}>
//             Confirm
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </div>
//   );
// };

// export default Transaction;
