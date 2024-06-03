import "./FormPage.css";

export const FormPage = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = {
      latitude: formData.get("latitude"),
      longitude: formData.get("longitude"),
      text: formData.get("text"),
    };
    console.log(data);
    fetch("http://localhost:8080/notes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((response) => {
      if (response.ok) {
        console.log("note created");
      } else {
        console.log("note not created");
      }
    });
  };

  return (
    <div className="FormPage">
      <h1 className="FormPage-title">happy angry note</h1>
      <form className="FormPage-form" onSubmit={onSubmit}>
        <label>
          <span>latitude</span>
          <input type="text" name="latitude" />
        </label>
        <br />
        <label>
          <span>longitude</span>
          <input type="text" name="longitude" />
        </label>
        <br />
        <label>
          <span>text</span>
          <textarea name="text" />
        </label>
        <br />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};
