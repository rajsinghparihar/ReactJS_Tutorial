import "./App.css";
import Header from "./MyComponents/Header";
import { List } from "./MyComponents/List";
import Footer from "./MyComponents/Footer";
import React, { useState } from "react";
import { AddItem } from "./MyComponents/AddItem";

function App() {
  const onDelete = (item) => {
    setItems(
      items.filter((e) => {
        return e !== item;
      })
    );
  };

  const addItem = (title, desc) => {
    let sno = items.length + 1;
    const itemToAdd = {
      sno: sno,
      title: title,
      desc: desc,
    };
    setItems([...items, itemToAdd]);
  };

  const [items, setItems] = useState([
    {
      sno: 1,
      title: "Sleep?",
      desc: "But only if you wanna!",
    },
    {
      sno: 2,
      title: "Watch Movie?",
      desc: "Netflix? HTSDO(F) Season 3 up now!!",
    },
    {
      sno: 3,
      title: "Thirsty!!",
      desc: "Have a Coke!",
    },
  ]);
  return (
    <>
      <Header title="Kawaii To-Do List" />
      <div className="container">
        <AddItem addItem={addItem} />
        <hr />
        <List item={items} onDelete={onDelete} />
      </div>
      <Footer />
    </>
  );
}

export default App;
