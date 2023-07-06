import React from "react";
 
// We use Route in order to define the different routes of our application
import { Route, Routes } from "react-router-dom";
 
// We import all the components we need in our app
import Navbar from "./components/navbar";
import RecordList from "./components/recordList";
import Edit from "./components/edit";
import Create from "./components/create";
import Login from "./components/login";
import Error from "./components/error";
import BodyOnlyExample from "./components/transaction";
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
  const cookie = getCookie("sessionToken");
 return (
   <div>
     <Navbar />
     <Routes>
       <Route exact path="/recordList" element={<RecordList />} />
       <Route path="/edit/:id" element={<Edit />} />
       <Route path="/" element={<Login />} />
       <Route path="/create" element={<Create />} />
       <Route path="/error" element={<Error />} />
       <Route path="/admin" element={<AdminPage />} />
       <Route path="/transaction" element={<BodyOnlyExample />} />
     </Routes>
   </div>
 );
};
 
export default App;
