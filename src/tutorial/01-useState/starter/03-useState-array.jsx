import { data } from "../../../data";
import React from "react";

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data);

  const removeItem = (id) => {
    const newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };

  const clearAllItems = () => {
    setPeople([]);
  };

  return (
    <div>
      {people.map((person) => {
        return (
          <div key={person.id}>
            <h3>{person.name}</h3>
            <button
              type="button"
              className="btn"
              onClick={() => removeItem(person.id)}
            >
              remove
            </button>
          </div>
        );
      })}
      <button type="button" className="btn" onClick={clearAllItems}>
        Clear All
      </button>
    </div>
  );
};

export default UseStateArray;
