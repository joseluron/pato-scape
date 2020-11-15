import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';

import './Test.scss';
import Map from '../../assets/img/map.png';
import Cesar from '../../assets/img/cesar.png';

const TestPage = props => {
  const [toDoTest, setToDoTest] = useState({});
  const [solution, setSolution] = useState("");
  
  const TESTS = [
    {
      path: "/map",
      text: "Parece ser que el pato Dani debe hacer un pequeño viaje en coche para encontrar uno de los regalos. ¿Qué camino debe tomar?",
      image: Map,
      solution: "oneso"
    },
    {
      path: "/cesar",
      text: "Es posible que el mapache Jose haya dejado apuntado en esta nota donde dejo uno de los regalos. Esta escrito en un lenguaje un poco raro, así que el pato Dani le pide ayuda a su amigo el emperador Cesar para descifrarlo. ¿Dónde se ha dejado el mapache Jose el regalo?",
      image: Cesar,
      solution: "estanque"
    }
  ]
  
  useEffect(() => {
    setToDoTest(TESTS.find(test => test.path === props.location.pathname));
  }, []);

  const checkSolution = () => {
    if (solution === toDoTest.solution) {
      alert("Eureka!");
    }
  }
  
  return (
    <div className="test-container">
      <div className="test-wrapper">
        {toDoTest &&
          <>
            <span>{toDoTest.text}</span>
            <img src={toDoTest.image} alt="Test image" />
            <input type="text" value={solution} onChange={(ev) => setSolution(ev.target.value)} />
            <button onClick={checkSolution}>Resolver</button>
          </>
        }
      </div>
    </div>
  );
}

export default withRouter(TestPage);
