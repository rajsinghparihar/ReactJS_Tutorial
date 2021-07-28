import React, { useState } from "react";

export const AddItem = (props) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const submit = (e) => {
    e.preventDefault();
    if (!title || !desc) {
      alert("Title or Description cannot be blank!");
    } else props.addItem(title, desc);
  };

  return (
    <div>
      <h3 className="text-center">Add Item:</h3>
      <form onSubmit={submit}>
        <div className="mb-3">
          <label for="title" className="form-label">
            What To Do?
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            className="form-control"
            id="title"
            style={{ borderRadius: "20px", border: "2px dashed black" }}
          />
        </div>
        <div className="mb-3">
          <label for="description" className="form-label">
            Describe What To Do...
          </label>
          <input
            type="text"
            value={desc}
            onChange={(e) => {
              setDesc(e.target.value);
            }}
            className="form-control"
            id="description"
            style={{ borderRadius: "20px", border: "2px dashed black" }}
          />
        </div>
        <button
          type="submit"
          className="btn btn-sm btn-success"
          style={{ borderRadius: "20px", border: "2px dashed black" }}
        >
          Add Item
        </button>
      </form>
    </div>
  );
};
