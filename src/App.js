import React from "react";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import data from "./data"

function App() {
  console.log(<Navbar />)
  const info = data.map(item => {
    return (
      <div className="main--cards">
        <Card 
            key={item.id}
            item={item}
        />
        <hr />
      </div>
    )
  })
  return (
    <main>
        <Navbar />
        {info}
    </main>
  );
}

export default App;
