import React, { useState } from "react";

type Props = {};

const App1 = (props: Props) => {
  const [count, setCount] = useState<number>(0);
  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div style={{ margin: "5px" }}>
      <h3>event basic</h3>
      <div>
        <button onClick={increment}>증가</button>
        <button onClick={decrement}>감소</button>
      </div>
      <div>
        카운트 : <input type="text" value={count} />
      </div>
    </div>
  );
};

export default App1;
