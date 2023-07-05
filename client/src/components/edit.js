import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import Modal from "react-modal";

export default function Edit() {
  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    email: "",
    rating: "",
    fee: "",
    records: [],
  });
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      const id = params.id.toString();
      const response = await fetch(`http://localhost:5050/record/${params.id.toString()}`);

      if (!response.ok) {
        const message = `An error has occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }

      const record = await response.json();
      if (!record) {
        window.alert(`Record with id ${id} not found`);
        navigate("/recordList");
        return;
      }

      setForm(record);
    }

    fetchData();

    return;
  }, [params.id, navigate]);

  function updateForm(value) {
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  }

  function openConfirmationModal() {
    setShowConfirmationModal(true);
  }

  function closeConfirmationModal() {
    setShowConfirmationModal(false);
  }

  async function onSubmit(e) {
    e.preventDefault();
    openConfirmationModal();
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div style={{ width: '400px', border: '1px solid #ccc', padding: '20px' }}>
        <h3 style={{ textAlign: 'center', color: 'red', marginBottom: '20px' }}>Update Agent</h3>
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor="first_name">First Name: </label>
            <input
              type="text"
              className="form-control"
              id="first_name"
              value={form.first_name}
              onChange={(e) => updateForm({ first_name: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label htmlFor="last_name">Last Name: </label>
            <input
              type="text"
              className="form-control"
              id="last_name"
              value={form.last_name}
              onChange={(e) => updateForm({ last_name: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email: </label>
            <input
              type="text"
              className="form-control"
              id="email"
              value={form.email}
              onChange={(e) => updateForm({ email: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label htmlFor="rating">Rating: </label>
            <input
              type="text"
              className="form-control"
              id="rating"
              value={form.rating}
              onChange={(e) => updateForm({ rating: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label htmlFor="fee">Fee: </label>
            <input
              type="text"
              className="form-control"
              id="fee"
              value={form.fee}
              onChange={(e) => updateForm({ fee: e.target.value })}
            />
          </div>

          <div className="form-group">
            <input
              type="submit"
              value="Update Agent"
              className="btn btn-primary"
            />
          </div>
        </form>
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
        <h2>Confirmer la mise à jour de l'agent</h2>
        <div>
          <button
            onClick={() => {
              // Ajoutez ici votre logique de mise à jour de l'agent
              closeConfirmationModal();
            }}
            style={{
              marginRight: "10px",
              padding: "10px 20px",
              border: "none",
              borderRadius: "4px",
              color: "#fff",
              backgroundColor: "blue",
              cursor: "pointer",
            }}
          >
            Oui/Confirmer
          </button>
          <button
            onClick={closeConfirmationModal}
            style={{
              padding: "10px 20px",
              border: "none",
              borderRadius: "4px",
              color: "#fff",
              backgroundColor: "red",
              cursor: "pointer",
            }}
          >
            Non/Retour
          </button>
        </div>
      </Modal>
    </div>
  );
}
