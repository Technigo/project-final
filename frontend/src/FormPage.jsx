import "./FormPage.css";

export const FormPage = () => {
  return (
    <div className="FormPage">
      <h1 className="FormPage-title">happy angry note</h1>
      <form className="FormPage-form">
        <label>
          <span>latitude</span>
          <input type="number" name="latitude" />
        </label>
        <br />
        <label>
          <span>longitude</span>
          <input type="number" name="longitude" />
        </label>
        <br />
        <label>
          <span>note</span>
          <textarea name="note" />
        </label>
        <br />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};
