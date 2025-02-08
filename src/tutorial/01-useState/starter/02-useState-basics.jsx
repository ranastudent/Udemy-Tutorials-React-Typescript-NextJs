import { useState } from "react";

const UseStateBasics = () => {
  
  const [count, setCount] = useState(0);

  const handleClick = () => {
    const increment = count + 1
    setCount( increment );
  };

  return (
    <div>
      <h4>Here You Click {count} times</h4>
      <button type="button" className="btn" onClick={handleClick}>Click Me</button>
    </div>
  );
};

export default UseStateBasics;
