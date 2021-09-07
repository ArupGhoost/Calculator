import './App.css';
import {useState, useRef, useEffect} from 'react';

function App() {
      const[result, setresult] = useState('');
    
          const inputRef = useRef(null);

          useEffect(() => {
          inputRef.current.focus();
        })

        const anything = (e) => {
          let numbers = result.concat(e.target.name)
           setresult(numbers);
       };

          const clearEvery = () => {
            setresult('');
            };

          const backSpace = (e) => {
             let numbers = result.concat(e.target.name)
            setresult(numbers.slice(0, -1));       
           }

          const calculate = () => {
             try{
               setresult(eval(result).toString());
            }catch (error){
              setresult('Error')
            } 
          };
    return (
      <div className="App">
              <div className='calc-app'>
                <form >
                    <input type='text' value={result} ref={inputRef}/>
                </form>

                <div className='keypad'>
                     <button id='clear' onClick={clearEvery}>Clear</button>
                     <button id='backspace' onClick={backSpace}>C</button>
                     <button name= '+' onClick={anything}>+</button>
                     <button name= '7' onClick={anything}>7</button>
                     <button name= '8' onClick={anything}>8</button>
                     <button name= '9' onClick={anything}>9</button>
                     <button name= '-' onClick={anything}>-</button>  
                     <button name= '4' onClick={anything}>4</button>
                     <button name= '5' onClick={anything}>5</button>
                     <button name= '6' onClick={anything}>6</button>
                     <button name= '*' onClick={anything}>*</button>
                     <button name= '1' onClick={anything}>1</button>
                     <button name= '2' onClick={anything}>2</button>
                     <button name= '3' onClick={anything}>3</button>
                     <button name= '/' onClick={anything}>/</button>
                     <button name= '0' onClick={anything}>0</button>
                     <button name= '.' onClick={anything}>.</button>
                     <button id='result' onClick={calculate}>Result</button>
                </div>
                <div className='footer'>
                       <h2>Calculator(Using React Hooks)</h2>
                </div>
            </div>
    </div>
  );
}

export default App;
