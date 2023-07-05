import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Modal from "react-modal";

const Record = (props) => (
  <tr>
    <td>{props.record.first_name}</td>
    <td>{props.record.last_name}</td>
    <td>{props.record.email}</td>
    <td>{props.record.region}</td>
    <td>{props.record.rating}</td>
    <td>{props.record.fee}</td>
    <td>
      <Link className="btn btn-link" to={`/edit/${props.record._id}`}>
        Edit
      </Link>{" "}
      |
      <button className="btn btn-link" onClick={() => props.deleteRecord()}>
        Delete
      </button>
    </td>
  </tr>
);

export default function RecordList() {
  const [records, setRecords] = useState([]);
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const [selectedRecord, setSelectedRecord] = useState(null);

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
      method: "DELETE",
    });

    const newRecords = records.filter((el) => el._id !== id);
    setRecords(newRecords);
  }

  // Fonction pour ouvrir le modal de confirmation
  function openConfirmationModal(record) {
    setSelectedRecord(record);
    setShowConfirmationModal(true);
  }

  // Fonction pour fermer le modal de confirmation
  function closeConfirmationModal() {
    setSelectedRecord(null);
    setShowConfirmationModal(false);
  }

  // This method will map out the records on the table
  function recordList() {
    return records.map((record) => {
      return (
        <Record
          record={record}
          deleteRecord={() => openConfirmationModal(record)}
          key={record._id}
        />
      );
    });
  }

  // This following section will display the table with the records of individuals.
  return (
    <div>
      <h3 style={{ textAlign: "center", marginTop: "40px", fontstyle: "bold", color: "blue" }}>
        Agents List
      </h3>
      <div className="table-responsive">
        <table className="table table-striped" style={{ marginTop: "40px" }}>
          <thead className="thead-dark">
            <tr>
              <th style={{ color: "blue" }}>First Name</th>
              <th style={{ color: "red" }}>Last Name</th>
              <th style={{ color: "blue" }}>Email</th>
              <th style={{ color: "red" }}>Region</th>
              <th style={{ color: "blue" }}>Rating</th>
              <th style={{ color: "red" }}>Fee</th>
            </tr>
          </thead>
          <tbody>{recordList()}</tbody>
        </table>
      </div>

   <Modal
      isOpen={showConfirmationModal}
      onRequestClose={closeConfirmationModal}
      contentLabel="Confirmation Modal"
      style={{
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        },
        content: {
          width: "400px",
          maxWidth: "90%",
          margin: "0 auto",
          marginBottom: "350px",
        },
      }}
    >
      <h2>Êtes-vous sûr de vouloir continuer ?</h2>
      <div>
    <button
      style={{
        marginRight: "10px",
        padding: "10px 20px",
        border: "none",
        borderRadius: "4px",
        color: "#fff",
        backgroundColor: "blue",
        cursor: "pointer",
      }}
      onClick={() => {
        deleteRecord(selectedRecord._id);
        closeConfirmationModal();
      }}
    >
      Oui/Confirmer
    </button>
    <button
      style={{
        padding: "10px 20px",
        border: "none",
        borderRadius: "4px",
        color: "#fff",
        backgroundColor: "red",
        cursor: "pointer",
      }}
      onClick={closeConfirmationModal}
    >
      Non/Retour
    </button>
    </div>
  </Modal>
    </div>
  );
}
