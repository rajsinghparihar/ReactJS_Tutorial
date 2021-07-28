import React from "react";

export const ListItem = ({item, onDelete}) => {
  let flexbotStyle = {
    display: "flex",
    justifyContent: "space-between",
    paddingTop: "5px",
    paddingBottom: "5px",
  }
  return (
  <div style={flexbotStyle}>
    <div>
      <h4>{item.title}</h4>
      <p>{item.desc}</p>
    </div>
      <button className="btn btn-sm btn-danger" style={{borderRadius: "35px", border: "2px dashed black" }} onClick={()=>{onDelete(item)}}>Done?</button>
  </div>
  );
};
