import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { supabase } from "../client.js";

const Edit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [skills, setSkills] = useState("");
  const [extraInfo, setExtraInfo] = useState("");
  const [createdAt, setCreatedAt] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCrewmate = async () => {
      const { data } = await supabase.from("crewmates").select("*").eq("id", id).single();
      setName(data.name);
      setPosition(data.position);
      setSkills(data.skills);
      setExtraInfo(data.extra_info);
      setCreatedAt(data.created_at);
      setLoading(false);
    };

    fetchCrewmate();
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    await supabase.from("crewmates").update({
      name,
      position,
      skills,
      extra_info: extraInfo,
    }).eq("id", id);

    navigate("/gallery");
  };

  const handleDelete = async () => {
    const confirmDelete = window.confirm("Are you sure you want to delete this crewmate?");
    if (!confirmDelete) return;

    await supabase.from("crewmates").delete().eq("id", id);
    navigate("/gallery");
  };

  return (
    <div className="form-container">
      <h2>Edit Crewmate</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <form onSubmit={handleUpdate}>
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
            <textarea value={extraInfo} onChange={(e) => setExtraInfo(e.target.value)} />
          </label>
          <p><strong>Created At:</strong> {new Date(createdAt).toLocaleString()}</p>
          <button type="submit">Update</button>
          <button type="button" onClick={handleDelete}>
            Delete
          </button>
        </form>
      )}
    </div>
  );
};

export default Edit;
