import React from "react";
import Accordion from "./components/Accordion";
import Search from "./components/search";
import "../src/style.css";

const items = [
  {
    title: "What is React?",
    content: "React is a front end javascript framework"
  },
  {
    title: "Why use React?",
    content: "React is a favorite JS library among engineers"
  },
  {
    title: "How do you use React?",
    content: "You use React by creating components"
  }
];

export default function App() {
  return (
    <div className="App">
      <Accordion items={items} />
      <hr />
      <Search />
    </div>
  );
}
