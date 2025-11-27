import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState('')

  const isOperator = (char) => {
    return ['+', '-', '*', '/'].includes(char)
  }

  const handleOperator = (operator) => {
    if (count === '') return 
    
    const lastChar = count[count.length - 1]
    
    if (isOperator(lastChar)) {
      setCount(count.slice(0, -1) + operator)
    } else {
      setCount(count + operator)
    }
  }

  // Function to handle opening bracket
  const handleOpenBracket = () => {
    const lastChar = count[count.length - 1]
    
    // Add opening bracket if:
    // 1. String is empty, OR
    // 2. Last character is an operator, OR
    // 3. Last character is an opening bracket
    if (count === '' || isOperator(lastChar) || lastChar === '(') {
      setCount(count + '(')
    } else {
      // If last char is a number or closing bracket, add multiplication before opening bracket
      setCount(count + '*(')
    }
  }

  // Function to handle closing bracket
  const handleCloseBracket = () => {
    if (count === '') return // Can't start with closing bracket
    
    const lastChar = count[count.length - 1]
    
    // Only add closing bracket if:
    // 1. Last character is a number, decimal, or closing bracket, AND
    // 2. There are unmatched opening brackets
    const openBrackets = (count.match(/\(/g) || []).length
    const closeBrackets = (count.match(/\)/g) || []).length
    
    if ((lastChar >= '0' && lastChar <= '9') || lastChar === '.' || lastChar === ')') {
      if (openBrackets > closeBrackets) {
        setCount(count + ')')
      }
    }
  }

  // Enhanced calculation function with error handling
  const handleCalculate = () => {
    try {
      // Check for balanced brackets
      const openBrackets = (count.match(/\(/g) || []).length
      const closeBrackets = (count.match(/\)/g) || []).length
      
      if (openBrackets !== closeBrackets) {
        setCount('Error: Unmatched brackets')
        return
      }
      
      // Check if expression ends with operator
      const lastChar = count[count.length - 1]
      if (isOperator(lastChar)) {
        setCount('Error: Invalid expression')
        return
      }
      
      const result = eval(count)
      setCount(result.toString())
    } catch (error) {
      setCount('Error')
    }
  }

  return (
    <div className="container">
      <div className="calculator">
        <form action="">
          <div>
            <input type="text" className="calculator-screen" value={count}  />
          </div>
          <div className="calculator-keys">

            <div className="first-row">
              <button type="button" className="open-bracker" value="(" onClick={handleOpenBracket}>
                (
              </button>

              <button type="button" className="close-bracket" value=")" onClick={handleCloseBracket}>
                )
              </button>

              <button type="button" className="all-clear" value="all-clear" onClick={e => setCount('')}>
                AC
              </button>

              <button type="button" className="clear-entry" value="clear-entry" onClick={e => setCount(count.slice(0, -1))}>
                CE
              </button>
            </div>

            <div className="second-row">
              <button type="button" value="7" onClick={e => setCount(count + e.target.value)}>
                7
              </button>

              <button type="button" value="8" onClick={e => setCount(count + e.target.value)}>
                8
              </button>

              <button type="button" value="9" onClick={e => setCount(count + e.target.value)}>
                9
              </button>

              <button type="button" className="operator" value="/" onClick={e => handleOperator(e.target.value)}>
                &divide;
              </button>
            </div>

            <div className="third-row">
              <button type="button" value="4" onClick={e => setCount(count + e.target.value)}>
                4
              </button>
              
              <button type="button" value="5" onClick={e => setCount(count + e.target.value)}>
                5
              </button>

              <button type="button" value="6" onClick={e => setCount(count + e.target.value)}>
                6
              </button>

              <button type="button" className="operator" value="*" onClick={e => handleOperator(e.target.value)}>
                &times;
              </button>
            </div>

            <div className="fourth-row">
              <button type="button" value="1" onClick={e => setCount(count + e.target.value)}>
                1
              </button>

              <button type="button" value="2" onClick={e => setCount(count + e.target.value)}>
                2
              </button>

              <button type="button" value="3" onClick={e => setCount(count + e.target.value)}>
                3
              </button>

              <button type="button" className="operator" value="-" onClick={e => handleOperator(e.target.value)}>
                -
              </button>
            </div>

            <div className="fifth-row">
              <button type="button" value="0" onClick={e => setCount(count + e.target.value)}>
                0
              </button>

              <button type="button" className="decimal" value="." onClick={e => setCount(count + e.target.value)}>
                .
              </button>

              <button type="button" className="equal-sign" value="=" onClick={handleCalculate}>
                =
              </button>

              <button type="button" className="operator" value="+" onClick={e => handleOperator(e.target.value)}>
                +
              </button>
            </div>

          </div>
        </form>
      </div>
    </div>
  )
}

export default App
