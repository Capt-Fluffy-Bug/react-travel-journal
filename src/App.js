import React from "react";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import data from "./data"

function App() {
  const info = data.map(item => {
    return (
      <div className="main--cards" key={item.id}> 
        <Card 
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

/* Line 9: The unique key should be on the object that's being returned */