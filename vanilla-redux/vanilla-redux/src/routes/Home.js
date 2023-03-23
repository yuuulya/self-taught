import React, { useState } from "react";

function Home() {
  const [text, setText] = useState("");

  function onChange(e) {
    setText(e.target.value);
  }
  return (
    <>
      <h1>To do </h1>
      <form>
        <input type="text" value={text} on/>
      </form>
      <ul></ul>
    </>
  );
}

export default Home;
