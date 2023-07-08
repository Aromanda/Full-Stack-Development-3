// import express from 'express';
// import db from '../conn.mjs'; // Importez l'objet db depuis conn.mjs

// const router = express.Router();

// router.get('/transaction-data', async (req, res) => {
//   try {
//     const transactions = await db.collection('transactions').find().sort({ date: -1 }).limit(10).toArray();
//     const agents = await db.collection('agents').find().toArray();

//     res.json({
//       status: 'ok',
//       data: {
//         transactions,
//         agents
//       },
//       message: null
//     });
//   } catch (error) {
//     res.status(500).json({ message: 'Error retrieving transaction data' });
//   }
// });

// router.post('/transaction', async (req, res) => {
//   const { amount, agent_id } = req.body;

//   try {
//     const transaction = { amount, agentId: agent_id };
//     await db.collection('transactions').insertOne(transaction);
//     res.status(201).json({ status: 'ok', data: transaction, message: null });
//   } catch (error) {
//     res.status(500).json({ message: 'Error creating transaction' });
//   }
// });

// export default router;
