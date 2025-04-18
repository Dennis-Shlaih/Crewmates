import React, { useState } from "react";
import { supabase } from "../client.js";

const CreateCrewmateForm = () => {
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [skills, setSkills] = useState("");
  const [extraInfo, setExtraInfo] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    await supabase.from("crewmates").insert([
      {
        name,
        position,
        skills,
        extra_info: extraInfo,
        created_at: new Date().toISOString(),
      },
    ]);

    setSuccessMessage("Crewmate successfully created!");
    setName("");
    setPosition("");
    setSkills("");
    setExtraInfo("");
  };

  return (
    <div className="form-container">
      <h2>Create a Basketball Crewmate</h2>
      {successMessage && <p className="success-message">{successMessage}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </label>
        <label>
          Position:
          <input type="text" value={position} onChange={(e) => setPosition(e.target.value)} required />
        </label>
        <label>
          Skills:
          <input type="text" value={skills} onChange={(e) => setSkills(e.target.value)} required />
        </label>
        <label>
          Extra Info:
          <textarea
            value={extraInfo}
            onChange={(e) => setExtraInfo(e.target.value)}
            placeholder="Stats, background, bio, etc."
          />
        </label>
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default CreateCrewmateForm;
