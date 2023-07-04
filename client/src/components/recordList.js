import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
 
const Record = (props) => (
 <tr>
   <td>{props.record.first_name}</td>
   <td>{props.record.last_name}</td>
   <td>{props.record.email}</td>
   <td>{props.record.region}</td>
   <td>{props.record.rating}</td>
   <td>{props.record.fee}</td>
   <td>
     <Link className="btn btn-link" to={`/edit/${props.record._id}`}>Edit</Link> |
     <button className="btn btn-link"
       onClick={() => {
         props.deleteRecord(props.record._id);
       }}
     >
       Delete
     </button>
   </td>
 </tr>
);
 
export default function RecordList() {
 const [records, setRecords] = useState([]);
 
 // This method fetches the records from the database.
 useEffect(() => {
   async function getRecords() {
     const response = await fetch(`http://localhost:5050/record/`);
 
     if (!response.ok) {
       const message = `An error occurred: ${response.statusText}`;
       window.alert(message);
       return;
     }
 
     const records = await response.json();
     setRecords(records);
   }
 
   getRecords();
 
   return;
 }, [records.length]);
 
 // This method will delete a record
 async function deleteRecord(id) {
   await fetch(`http://localhost:5050/record/${id}`, {
     method: "DELETE"
   });
 
   const newRecords = records.filter((el) => el._id !== id);
   setRecords(newRecords);
 }
 
 // This method will map out the records on the table
 function recordList() {
   return records.map((record) => {
     return (
       <Record
         record={record}
         deleteRecord={() => deleteRecord(record._id)}
         key={record._id}
       />
     );
   });
 }
 
 // This following section will display the table with the records of individuals.
 return (
  <div>
    <h3 style={{ textAlign: 'center', marginTop: '40px', fontstyle: 'bold', color: 'blue'}}>Agents List</h3>
    <div className="table-responsive">
      <table className="table table-striped" style={{ marginTop: '40px' }}>
        <thead className="thead-dark">
          <tr>
            <th style={{ color: 'blue'}}>First Name</th>
            <th style={{ color: 'red'}}>Last Name</th>
            <th style={{ color: 'blue'}}>Email</th>
            <th style={{ color: 'red'}}>Region</th>
            <th style={{ color: 'blue'}}>Rating</th>
            <th style={{ color: 'red'}}>Fee</th>
          </tr>
        </thead>
        <tbody>{recordList()}</tbody>
      </table>
    </div>
  </div>
);

}