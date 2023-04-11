import { useState } from "react"
import { Calculator } from "./components"
import { useSelector } from "react-redux";



function App() {
  
  const theme = useSelector(state => state.theme.value);

  return (
    <div className={`App flex items-center justify-center h-screen bg-main ${theme} transition-colors duration-500`}>
      <Calculator  />
    </div>
  )
}

export default App
