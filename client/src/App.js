import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Navbar from "./components/navbar";
import RecordList from "./components/recordList";
import Edit from "./components/edit";
import Create from "./components/create";
import Login from "./components/login";
import Error from "./components/error";
// import Transactions from './routes/transactions.routes.mjs';
import { AgentsListCard, TransactionsCard } from "./components/admin";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { getCookie } from "react-use-cookie";

function AdminPage() {
  return (
    <Row>
      <Col>
        <AgentsListCard />
      </Col>
      <Col>
        <TransactionsCard />
      </Col>
    </Row>
  );
}

const App = () => {
  const navigate = useNavigate();
  const sessionToken = getCookie("sessionToken");

  const [fullname, setFullname] = useState("");

  useEffect(() => {
    const validateToken = async () => {
      try {
        const response = await fetch(`http://localhost:5050/session/validate_token?token=${sessionToken}`);
        const data = await response.json();
        console.log("ici");
        console.log(data.data)
        const { valid, user } = data.data;
        const {first_name, last_name} = user;
        setFullname(`${first_name} ${last_name}`);
        console.log(fullname);
        
        if (!valid) {
          navigate("/");
        }
        console.log(validateToken);
      } catch (error) {
        console.error("Une erreur s'est produite lors de la validation du token.");
        navigate("/error");
      }
    };

    validateToken();
  }, [sessionToken, navigate]);

  return (
    <div>
      <Navbar fullname={fullname} />
      <Routes>
        <Route exact path="/recordList" element={<RecordList />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="/" element={<Login />} />
        <Route path="/create" element={<Create />} />
        <Route path="/error" element={<Error />} />
        <Route path="/admin" element={<AdminPage />} />
        {/* <Route path="/transaction" element={<Transaction />} /> */}
      </Routes>
    </div>
  );
};

export default App;


