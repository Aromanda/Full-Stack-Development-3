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

  router.get("/validate_token", async (req, res) => {
    const token = req.query.token;
  
    // Vérifier si une session valide existe avec le token donné
    try {
      let collection = await db.collection("session");
      const session = await collection.findOne({ session_token: token });
  
      if (session) {
        // Session valide trouvée
        collection = await db.collection("users");
        const user = await collection.findOne({ _id: session.user });
  
        if (user) {
          const { first_name, last_name, id } = user;
          res.json({
            status: "ok",
            data: {
              valid: true,
              user: {
                first_name,
                last_name,
                id
              },
              message: null
            }
          });
        } else {
          // Aucun utilisateur correspondant trouvé
          res.json({
            status: "ok",
            data: {
              valid: false,
              user: null,
              message: null
            }
          });
        }
      } else {
        // Aucune session valide trouvée
        res.json({
          status: "ok",
          data: {
            valid: false,
            user: null,
            message: null
          }
        });
      }
    } catch (error) {
      // Une erreur s'est produite lors de la recherche de la session
      res.json({
        status: "error",
        data: null,
        message: "Une erreur s'est produite lors de la validation du token."
      });
    }
  });
  
  
  
export default router;




