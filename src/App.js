import React, { useState } from 'react';

function App() {
  const [fruit, setFruit] = useState(['uva', 'banana', 'melancia', 'jabuticaba']);
  const [inputValue, setInputValue] = useState();
  const [toggle, setToggle] = useState(false);
  var A = [1, 2, 3, 4, 5, 6];
  var B = [7, 8, 9, 10, 11, 12];
  return (
    <div >
      <div >
        <p> Array inicial <br /> var fruit = ['uva', 'banana', 'melancia', 'jabuticaba'];</p>
        <h1>Função map:</h1>
        <ul >
          {fruit.map((item, index) => <li key={index}>{item}</li>)}
        </ul>
        <h4 style={{ color: 'red' }}> * Retorna um elemento atravéz de parametro e a função retorna um array </h4>
      </div>

      <div >
        <h1>Função forEach: </h1>
        <p>
          callback é invocado com três argumentos:<br />

          o valor do elemento<br />
          o índice do elemento<br />
          o array que está sendo percorrido</p>
        <ul>
          {console.log("Retornos da função foreach: \n")}
          {fruit.forEach((element, index, array) => {
            return (
              <div>
                <li>
                  Index: {index} <br />
                  Element: {element} <br />
                </li>
                {console.log(index, element, array)}
              </div>
            )
          })}
        </ul>
        <h4 style={{ color: 'red' }}> * não retornou nada pois o retorno é vazio tanto do array quanto do item</h4>
      </div>

      <div>
        <h1>Função pop</h1>
        <p>O método pop remove o último elemento de um array e retorna aquele valor.</p>

      </div>

      <div>
        <h1>Função push</h1>
        <p>Adiciona elementos ao final de um array e retorna o novo comprimento desse array.</p>
      </div>

      <div>
        <h1>Função shift</h1>
        <p>Remove o primeiro elemento do array e retorna esse elemento. Esse método muda o tamanho do array.</p>
      </div>

      <div>
        <h1>Função unshift</h1>
        <p>Adiciona elementos no inicio do array. Esse método muda o tamanho do array. </p>
      </div>

      <input type="text" onChange={(e) => setInputValue(e.target.value)} />
      <button onClick={() => {
        fruit.pop();
        setToggle(!toggle) // Gambiarra
      }}>pop</button>
      <button onClick={() => setFruit([...fruit, inputValue])}>push</button>
      <button onClick={() => setFruit(fruit.slice(1))}>shift</button>
      <button onClick={() => setFruit([inputValue, ...fruit])}>unshift</button>
      <ul>
        {fruit.map((item, index) => {
          return (
            <li key={index}>[{index}] = {item}</li>
          )
        })}
      </ul>

      <div>
        <h1>Função concat</h1>
        <p> retorna um array da concatenação de todos arrays ou valores passados por parametros</p>
        var A = [1,2,3,4,5,6]; <br />
        var B = [7,8,9,10,11,12]; <br />
        Concat: {A.concat(B).map((item, index) => <li key={index}>[{index}] = {item}</li>)}
      </div>

    </div>
  );
}

export default App;
