import "../../styling/sectionsStyling/faqPage/RequestSection.css";

const RequestSection = () => {
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
      <form className="requestForm">
        <label className="requestLabel">
          Name:
          <input type="text" className="requestInput" required />
        </label>
        <label className="requestLabel">
          Email:
          <input type="email" className="requestInput" required />
        </label>
        <label className="requestLabel">
          What would you like to rent?
          <input type="text" className="requestInputBig" required />
        </label>
        <div className="sendFormButtonWrapper">
          <button className="sendFormButton">Send Form</button>
        </div>
      </form>
    </div>
  );
};

export default RequestSection;
