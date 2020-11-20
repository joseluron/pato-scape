import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';

import Nav from '../../components/Nav';

import './Test.scss';
import Map from '../../assets/img/map.png';
import Cesar from '../../assets/img/cesar.png';
import Laberinto from '../../assets/img/laberinto.png';

const TestPage = props => {
  const [toDoTest, setToDoTest] = useState({});
  const [solution, setSolution] = useState("");
  const [clueIndex, setClueIndex] = useState(0);
  
  const TESTS = [
    {
      path: "/test/test1",
      text: "El mapache Jose se fue de vacaciones hace no mucho con su amigo el cangrejo Sebastian. Con lo distraido que es seguramente perdió el regalo en uno de los lugares que visitó. ¿Quizá lo mejor sea recorrer el mismo camino?",
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
      text: "El mapache Jose tiene una guarida secreta, a la que accede por un laberinto hecho por los topos del pueblo. Seguramente haya dejado uno de los regalos allí. Ya hemos visto que el mapache José no es muy listo, así que para poder navegar por este laberinto tiene que seguir unas indicaciones numéricas para llegar, ya que si no nunca se acordaría del camino. ¿Que indicaciones numéricas ha seguido?",
      image: Laberinto,
      solution: "1143652",
      clue0: "¡Uuuuuuy, vayaaaaaaa, que gracioso es el mapache Jose!. Quería fastidiarte un poco para que tuvieses que pedir pisa si o si, jiji. Si quieres salir del laberinto tienes que saber que existen unas normas para ello:\n\n«El primer punto por el que pases + el segundo punto por el que pases será un valor, que multiplicado por el último punto por el que pases, será igual al tercer punto por el que pases»\n\n«Si le restas a el quinto punto por el que pases, el cuarto punto por el que pases, y le sumas el valor del último punto por el que pases, obtendrás el valor del sexto punto por el que pases»",
      clue1: "1 + 1 = 2, ¿Quién me lo iba a decir?",
      clue2: "6 - 3 + 2 = ?"
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
    
    if (index === clueIndex) {
      setClueIndex(index+1);
    }
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
              {[...Array(3)].map((v, index) => {
                return (
                  <div key={index}>
                    {(index <= clueIndex) && <button onClick={() => giveClue(index)}>{`Pista ${index+1}`}</button>}
                  </div>
                );
              })}
            </div>
          </>
        }
      </div>
    </div>
  );
}

export default withRouter(TestPage);
