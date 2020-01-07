import React, { useState } from 'react';

function App() {
  const [fruit, setFruit] = useState(['uva', 'banana', 'melancia', 'jabuticaba']);
  const [inputValue, setInputValue] = useState();
  const [toggle, setToggle] = useState(false);
  var A = [1, 2, 3, 4, 5, 6];
  var B = [7, 8, 9, 10, 11, 12];
  var C = ['uva', 'limão', 'maçã', 'pera', 'abacaxi', 'beterraba'];
  var D = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n'];
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

      <div>
        <h1>Função copyWithin</h1>
        <p> copia parte de um array para outra localização dentro deste mesmo array e o retorna</p>
        ['a','b','c','d','e','f','g','h', 'i', 'j', 'k', 'l', 'm', 'n'].copyWithin(0, 3);
        Resultado:
        <br />
        {D.copyWithin(0, 3).map((item) => <li>{item}</li>)}
        <br />
        <br />
        {
          D.map(item => <li>{item}</li>)
        }
      </div>
      <div>
        <h1>Função every</h1>
        <p> percorre todos os elementos do array e executa uma arrow function pra cada elemento, se todas as funções retornarem true, a função every tambem retorna true senão retorna false</p>

        [1, 2, 3, 4, 5, 6].every(item => item > 4)

        <br /><br />Retorno da função: {[1, 2, 3, 4, 5, 6].every(item => item > 4) ? <p>true</p> : <p>false</p>}
      </div>

      <div>
        <h1>função Fill</h1>
        <p>preenche todos os valores do array a partir de um inicio até um final com um valor. Ele irá mudar o objeto em si, e retorná-lo</p>
        [1,2,3,4,5,6,7,8,9,10]<br />
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].fill(0, 1, 3)
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].fill(0, 1, 3).map(item => <li>{item}</li>)}
      </div>

      <div>
        <h1>Filter</h1>
        <p> cria um novo array com todos os elementos que passaram na condição implementado pela arrow function.</p>
        [0,1,2,3,4,5,6,7,8]
        <p>item >= 5</p>
        {[0, 1, 2, 3, 4, 5, 6, 7, 8].filter(item => item >= 5).map(item => <li>{item}</li>)}
      </div>
      <div>
        <h1>Find</h1>
        <p>retorna o primeiro elemento que o retorno da arrow function for true, caso contrario undefined</p>
        [1,2,3,4,5,6,7]
        [1,2,3,4,5,6,7].find(item => item > 3)
        <li>{[1, 2, 3, 4, 5, 6, 7].find(item => item > 3)}</li>
      </div>
      <div>
        <h1>findIndex</h1>
        <p> retorna o índice no array do primeiro elemento que satisfizer a arrow function função. Caso contrário, retorna -1.</p>
        [1,2,3,4,5,6,7,8]
        <br />
        [1, 2, 3, 4, 5, 6, 7, 8].findIndex(item => item === 5)
        <li>{[1, 2, 3, 4, 5, 6, 7, 8].findIndex(item => item === 5)}</li>
      </div>

      <div>
        <h1>Flat</h1>
        <p>retorna a concatenação de arrays dentro de arrays de forma recursiva até onde for delimitado </p>
        [1,2,3.4,5,6,7,8] <br />
        [1, 2, 3, 4, 5, 6, 7, 8, [12,13,14,15,[66,77,88,99,[99,88,665,34234]]]].flat(3)
        {[1, 2, 3, 4, 5, 6, 7, 8, [12, 13, 14, 15, [66, 77, 88, 99, [99, 88, 665, 34234]]]].flat(3).map(item => <li>{item}</li>)}
        <br />

        [1, 2, 3, 4, 5, 6, 7, 8, [1, 2, 3, 4, 5]].flat() //1
        {[1, 2, 3, 4, 5, 6, 7, 8, [1, 2, 3, 4, 5]].flat(1).map(item => <li> {item}</li>)}
      </div>

      <div>
        <h1>forEach</h1>
        <p>executa uma função pra cada elemento</p>

        [10,20,30,40,50,60]
        <br />
        Resultado no console
      {[10, 20, 30, 40, 50, 60].forEach((item, index) => console.log(`${index} ola mundo ${item}`))}
      </div>

      <div>
        <h1>Includes</h1>
        <p>retorna true ou false se o elemento existir no array</p>
        [1,3,4,57,7,89,9] <br /> <br />
        [1,3,4,57,7,89,9].includes(58) <br />
        Resultado:
        {[1, 3, 4, 57, 7, 89, 9].includes(58) ? 'true' : 'false'} <br />

        <br />
        [1,3,4,57,7,89,9].includes(57) <br />
        Resultado:
        {[1, 3, 4, 57, 7, 89, 9].includes(57) ? 'true' : 'false'}
      </div>
      <div>
        <h1>indexOf</h1>
        <p>retorna o indice do primeiro elemento encontrado no array caso não seja encontrado retorna -1</p>

        [5,7,9,5,3,6,9] <br />
        [5,7,9,5,3,6,9].indexOf(9) <br />
        Resultado: {[5, 7, 9, 5, 3, 6, 9].indexOf(9)} <br />

        [5,7,9,5,3,6,9].indexOf(8) <br />
        Resultado: {[5, 7, 9, 5, 3, 6, 9].indexOf(8)}
      </div>
      <div>
        <h1>join</h1>
        <p>transforma todos os elementos de um array em uma string, os elementos podem ser separados por algum caractere</p>
        [32,32.1321,5,8,89,7,8,5,4,5,52]
        {[32, 32, 1321, 5, 8, 89, 7, 8, 5, 4, 5, 5].map(item => <li>{item}</li>)}
        [32,32,1321,5,8,89,7,8,5,4,5,5].join() <br />
        Resultado:
        {[32, 32, 1321, 5, 8, 89, 7, 8, 5, 4, 5, 5].join()}<br /><br />
        Resultado:
        [32, 32, 1321, 5, 8, 89, 7, 8, 5, 4, 5, 5].join(-) <br />
        {[32, 32, 1321, 5, 8, 89, 7, 8, 5, 4, 5, 5].join('-')}
        <br />
        <br />

        *N possibilidades de separação
      </div>

      <div>
        <h1> keys</h1>
        <p>retorna um array com os indices do array</p>
        [9,8,7,6,5,4,3,35,6,6,4,45,56,77,7,6,54] <br />
        Resultado:
        {Object.keys([9, 8, 7, 6, 5, 4, 3, 35, 6, 6, 4, 45, 56, 77, 7, 6, 54]).map(item => <li>{item}</li>)}
      </div>
      <div>
        <h1> reverse</h1>
        <p> reverte a posição de todos os elementos do array (123... => 321...) e mantem os indices</p>
        [1,2,3,4,5,6]
      {[1, 2, 3, 4, 5, 6].reverse().map((item, index) => <li> [{index}] = {item}</li>)}
      </div>
      <div>
        <h1>slice</h1>
        <p>retorna uma parte do array</p>
        [2,4,6,8,1,2,3] <br />
        [2, 4, 6, 8, 1, 2, 3].slice(2, 5)
        {[2, 4, 6, 8, 1, 2, 3].slice(2, 5).map(item => <li>{item}</li>)}
      </div>
      <div>
        <h1>some</h1>
        <p>retorna true se pelo menos um elemento passar na validação implementada senão retorna false</p>
        [1,2,3,4,5,6,7] <br />
        [1,2,3,4,5,6,7].some(item => item > 6)<br />
        {[1, 2, 3, 4, 5, 6, 7].some(item => item > 6) ? 'true' : 'false'}
      </div>
      <div>
        <h1>sort</h1>
        <p>ordena os elementos do array no padrão unicode e retorna o array</p>
        ['uva', 'limão','maçã', 'pera', 'abacaxi','beterraba'] <br />

        Resultado ['uva', 'limão', 'maçã', 'pera', 'abacaxi', 'beterraba'].sort((a, b) => a - b) <br />
        {['uva', 'limão', 'maçã', 'pera', 'abacaxi', 'beterraba'].sort().map(item => <li>{item}</li>)}
      </div>

      <div>
        <h1>splice</h1>
        <p>remove a e adiciona elementos ao array e retorna um array das remoções.</p> <br />
        ['uva', 'limão','maçã', 'pera', 'abacaxi','beterraba'] <br /><br />
        ['uva', 'limão','maçã', 'pera', 'abacaxi','beterraba'].splice(0,3,'kkkkk') <br />

        Retorno do Splice: <br />
        {C.splice(0, 3, 'kkkkk').map(item => <li>{item}</li>)}

        <br /><br />
        Retorno do Array depois do Splice: <br />
        {C.map(item => <li>{item}</li>)}
      </div>
    </div>
  );
}

export default App;
