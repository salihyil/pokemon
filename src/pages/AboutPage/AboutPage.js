import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const AboutPage = () => {
  const { pokeName } = useParams();
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div>
      <div>{pokeName}</div>
      <button onClick={handleBack}>Back</button>
    </div>
  );
};

export default AboutPage;
