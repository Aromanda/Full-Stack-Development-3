import React, { useState } from "react";
import { useNavigate } from "react-router";
import Modal from "react-modal";

export default function Create() {
  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    email: "",
    rating: "",
    fee: "",
  });
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const navigate = useNavigate();

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
        <h3 style={{ textAlign: 'center', color: 'red', marginBottom: '40px' }}>Create New Agents</h3>
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor="first_name">First Name</label>
            <input
              type="text"
              className="form-control"
              id="first_name"
              value={form.first_name}
              onChange={(e) => updateForm({ first_name: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label htmlFor="last_name">Last Name</label>
            <input
              type="text"
              className="form-control"
              id="last_name"
              value={form.last_name}
              onChange={(e) => updateForm({ last_name: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              className="form-control"
              id="email"
              value={form.email}
              onChange={(e) => updateForm({ email: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label htmlFor="rating">Rating</label>
            <input
              type="text"
              className="form-control"
              id="rating"
              value={form.rating}
              onChange={(e) => updateForm({ rating: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label htmlFor="fee">Fee</label>
            <input
              type="text"
              className="form-control"
              id="fee"
              value={form.fee}
              onChange={(e) => updateForm({ fee: e.target.value })}
            />
          </div>
          <div className="form-group">
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="regionOptions"
                id="regionNorth"
                value="north"
                checked={form.region === "north"}
                onChange={(e) => updateForm({ region: e.target.value })}
              />
              <label htmlFor="regionNorth" className="form-check-label">North</label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="regionOptions"
                id="regionSouth"
                value="south"
                checked={form.region === "south"}
                onChange={(e) => updateForm({ region: e.target.value })}
              />
              <label htmlFor="regionSouth" className="form-check-label">South</label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="regionOptions"
                id="regionEast"
                value="east"
                checked={form.region === "east"}
                onChange={(e) => updateForm({ region: e.target.value })}
              />
              <label htmlFor="regionEast" className="form-check-label">East</label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="regionOptions"
                id="regionWest"
                value="west"
                checked={form.region === "west"}
                onChange={(e) => updateForm({ region: e.target.value })}
              />
              <label htmlFor="regionWest" className="form-check-label">West</label>
            </div>
          </div>
          <div className="form-group">
            <input
              type="submit"
              value="Create agents"
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
        <h2>Confirmer la création de l'agent?</h2>
        <div>
          <button
            onClick={() => {
              // Ajoutez ici votre logique de création des agents
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
