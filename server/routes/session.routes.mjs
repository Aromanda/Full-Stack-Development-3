import { v4 as uuidv4 } from 'uuid';
import express from "express";
import db from "../db/conn.mjs";
import { ObjectId } from "mongodb";
import Session from "../db/session.schema.mjs";

const router = express.Router();

router.post("/:id", async (req, res) => {
    const userId = req.params
    console.log(userId.id);
    console.log(userId);

    const token = uuidv4();
    console.log(token);

    let newSession = new Session({
        session_token: token,
        user: userId.id,
    })
    console.log(newSession);

    let collection = await db.collection("session");
     await collection.insertOne(newSession);
    res.json({
        status:"ok", 
        data:{token: token}, 
        message:'session saved successfully'
    });
  });
  
export default router;




