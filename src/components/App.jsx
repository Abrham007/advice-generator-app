import React, { useEffect, useState } from "react";

function App() {
  const [advice, setAdvice] = useState();
  const [id, setId] = useState();

  async function fetchAdvice() {
    const response = await fetch("https://api.adviceslip.com/advice");
    const adviceJson = await response.json();
    setAdvice(adviceJson.slip.advice);
    setId(adviceJson.slip.id);
  }

  useEffect(() => {
    fetchAdvice();
  }, []);

  return (
    <div className="content">
      <h1 className="content__heading">ADVICE # {id}</h1>
      <q className="content__text">{advice}</q>
      <div className="content__divider"></div>
      <button onClick={fetchAdvice} className="content__btn"></button>
    </div>
  );
}

export default App;
