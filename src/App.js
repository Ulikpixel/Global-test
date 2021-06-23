import React, { useState } from "react";
import { Route, Link } from "react-router-dom";
import { GlobalTest } from "./components";
import { Modal } from "./components/common";

const App = () => {
  const [modal, setModal] = useState(false);
  return (
    <div className="App">
      <Route path="/global-test" exact component={GlobalTest} />
      <Route path="/" render={() => <div className="controller">
        <Link to="/global-test">Начать тест</Link>
        <button onClick={() => setModal(true)}>Открыть окно</button>
        <Modal active={modal} setActive={setModal}></Modal>
      </div>} />
    </div>
  );
}

export default App;
