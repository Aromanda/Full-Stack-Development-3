import express from "express";
import session from 'express-session';
import cors from "cors";
import "./loadEnvironment.mjs";
import Record from "./routes/record.routes.mjs";
import Users from "./routes/users.routes.mjs";
import Session from "./routes/session.routes.mjs";

const PORT = process.env.PORT || 5050;
const app = express();

app.use(cors());
app.use(express.json());

app.use(
  session({
    secret: 'rocket',
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: false,
    }
  })
);

app.use("/record", Record);
app.use("/users", Users);
app.use("/session", Session);


// start the Express server
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
