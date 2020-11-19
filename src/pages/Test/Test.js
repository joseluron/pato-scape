import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';

import Nav from '../../components/Nav';

import './Test.scss';
import Map from '../../assets/img/map.png';
import Cesar from '../../assets/img/cesar.png';

const TestPage = props => {
  const [toDoTest, setToDoTest] = useState({});
  const [solution, setSolution] = useState("");
  
  const TESTS = [
    {
      path: "/test/test1",
      text: "El mapache Jose se fue de vacaciones hace no mucho con su amigo el cangrejo Sebastian. Con lo distraido que es seguramente perdió el regalo en uno de los lugares que visitó",
      image: Map,
      solution: "oneso",
      clue0: "Hoy en día no se necesitan los mapas fisicos para ir de un lugar a otro. ¿Que se utilizará entonces?",
      clue1: "Google maps calcula el trayecto en coche para ir de un sitio a otro. Quiza el pato Dani debería utilizar esta aplicación",
      clue2: "En la esquina inferior izquierda de la nota aparecen dos letras. Seguramente la solución sea seguir el camino con una brujula"
    },
    {
      path: "/test/test2",
      text: "Es posible que el mapache Jose haya dejado apuntado en esta nota donde se olvidó uno de los regalos. Esta escrito en un lenguaje un poco raro, así que el pato Dani le pide ayuda a su amigo el emperador Cesar para descifrarlo. ¿Dónde se ha dejado el mapache Jose el regalo?",
      image: Cesar,
      solution: "estanque",
      clue0: "Parece ser que hace muchos muchos años un tal Julio Cesar cifraba muy bien los mensajes para que sus oponentes en la guerra no supiesen que escribía",
      clue1: "En el cifrado cesar es necesaria una clave; también conocida como valor de desplazamiento, para cifrar correctamente el texto. Es decir, cada letra del texto original se desplaza n veces en el abecedario castellano. Seguramente el mapache Jose haya dejado en algun lugar de la nota ese valor",
      clue2: "Los mapaches son muy limpios con la comida, siempre lavan todo lo que se vayan a comer. ¿Quizá el mapache José cofundió el regalo con comida y los lavo juntos en algun lugar?"
    },
    {
      path: "/test/test3",
      text: "Test",
      image: Cesar,
      solution: "test",
      clue0: "Test",
      clue1: "Test",
      clue2: "Test"
    }
  ]
  
  useEffect(() => {
    setToDoTest(TESTS.find(test => test.path === props.location.pathname));
  }, []);

  const checkSolution = () => {
    if (solution.toLowerCase().includes(toDoTest.solution)) {
      alert("Cuack! Que astuto es el pato Dani! Ha encontrado uno de los regalos del mapache Jose!");
    } else {
      alert("Vaya! Parece que el pato no es tan listo como creía...");
    }
  }

  const giveClue = index => {
    alert(toDoTest[`clue${index}`]);
  }
  
  return (
    <div className="test-container">
      <Nav />
      <div className="test-wrapper">
        {toDoTest &&
          <>
            <span>{toDoTest.text}</span>
            <img src={toDoTest.image} alt="Test" />
            <input type="text" value={solution} onChange={(ev) => setSolution(ev.target.value)} />
            <button onClick={checkSolution}>Resolver</button>
            <div className="clue-wrapper">
              {[...Array(3)].map((v, index) => <button onClick={() => giveClue(index)}>{`Pista ${index+1}`}</button>)}
            </div>
          </>
        }
      </div>
    </div>
  );
}

export default withRouter(TestPage);
