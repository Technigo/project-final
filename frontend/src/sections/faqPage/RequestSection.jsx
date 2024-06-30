import { useState } from "react";
import "./styling/RequestSection.css";

const RequestSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!name || !email || !message) {
      setError("Please fill in all fields");
      return;
    }

    try {
      const response = await fetch(
        "https://project-final-rentals-api.onrender.com/api/form-requests",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, email, message }),
        }
      );

      if (response.status === 201) {
        setSuccess("Form request submitted successfully.");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        const data = await response.json();
        setError(data.error || "Failed to submit form");
      }
    } catch (error) {
      setError("Failed to submit form");
      console.error("Error submitting form", error);
    }
  };

  return (
    <div className="requestContainer">
      <img
        className="sunriseIcon"
        src="/icons/SunriseIcon.png"
        alt="Sunrise icon"
      />
      <h2 className="requestTitle">Request an item</h2>
      <p className="requestText">
        Are you missing something on your vacation and cant find it on the site?
        Fill in this form to request any other items you may need to rent.
      </p>
      <form className="requestForm" onSubmit={handleSubmit}>
        <label className="requestLabel">
          Name:
          <input
            type="text"
            className="requestInput"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <label className="requestLabel">
          Email:
          <input
            type="email"
            className="requestInput"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label className="requestLabel">
          What would you like to rent?
          <input
            type="text"
            className="requestInputBig"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </label>
        <div className="sendFormButtonWrapper">
          <button type="submit" className="sendFormButton">
            Send Form
          </button>
        </div>
        {error && <p className="requestError">{error}</p>}
        {success && <p className="requestSuccess">{success}</p>}
      </form>
    </div>
  );
};

export default RequestSection;
