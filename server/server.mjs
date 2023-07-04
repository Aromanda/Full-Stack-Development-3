import express from "express";
import cors from "cors";
import "./loadEnvironment.mjs";
import Record from "./routes/record.routes.mjs";
import Users from "./routes/users.routes.mjs";

const PORT = process.env.PORT || 5050;
const app = express();

app.use(cors());
app.use(express.json());

app.use("/record", Record);
app.use("/users", Users);

// start the Express server
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
