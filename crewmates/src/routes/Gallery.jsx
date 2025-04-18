import React, { useEffect, useState } from "react";
import { supabase } from "../client.js";
import { Link } from "react-router-dom";

const Gallery = () => {
  const [crewmates, setCrewmates] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchCrewmates = async () => {
    const { data } = await supabase.from("crewmates").select("*").order("id", { ascending: false });
    setCrewmates(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchCrewmates();
  }, []);

  return (
    <div className="gallery-container">
      <h2>Your Crewmates</h2>
      {loading ? (
        <p>Loading crewmates...</p>
      ) : crewmates.length === 0 ? (
        <p>No crewmates created yet.</p>
      ) : (
        <ul className="crewmate-list">
          {crewmates.map((mate) => (
            <li key={mate.id} className="crewmate-card">
              <h3>
              <Link to={`/detail/${mate.id}`}>{mate.name}</Link>
              </h3>
              <p><strong>Position:</strong> {mate.position}</p>
              <p><strong>Skills:</strong> {mate.skills}</p>
              <Link to={`/edit/${mate.id}`}>Edit</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Gallery;
