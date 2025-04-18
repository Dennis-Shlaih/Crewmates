import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { supabase } from "../client.js";

const Detail = () => {
  const { id } = useParams();
  const [crewmate, setCrewmate] = useState(null);

  useEffect(() => {
    const fetchCrewmate = async () => {
      const { data } = await supabase.from("crewmates").select("*").eq("id", id).single();
      setCrewmate(data);
    };
    fetchCrewmate();
  }, [id]);

  if (!crewmate) return <p>Loading...</p>;

  return (
    <div className="detail-container">
      <h2>{crewmate.name}</h2>
      <p><strong>Position:</strong> {crewmate.position}</p>
      <p><strong>Skills:</strong> {crewmate.skills}</p>
      <p><strong>Bio:</strong> {crewmate.extra_info}</p>
      <p><strong>Created At:</strong> {new Date(crewmate.created_at).toLocaleString()}</p>
      <Link to={`/edit/${crewmate.id}`} className="edit-link">Edit</Link>
    </div>
  );
};

export default Detail;
