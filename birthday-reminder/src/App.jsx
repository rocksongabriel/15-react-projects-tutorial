import { useState } from "react";
import data from "./data"
import List from "./List"


function App() {
  const [people, setPeople] = useState(data)
  return (
    <>
      <div className="box">
        <div className="container">
          <h3>{people.length} birthdays today</h3>

          <List people={people} />

          <div className="buttons">
            <button onClick={() => setPeople([])}>clear all</button>
            <button onClick={() => setPeople(data)}>load birthdays</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App