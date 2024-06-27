import { lazy } from 'react'
const MyApp = lazy(() =>
  import('productApp/App').catch(
    (error) => {
      console.error("Component Failed Loading:", error);
      return { default: AppDefault }
    }
  )
)

import './App.css'

function App() {

  return (
    <>
     <h1>App - root</h1>
     <MyApp></MyApp>
    </>
  )
}

function AppDefault(){
  return <>
  <h2>Oppss.. Something wrong</h2>
  </>
}

export default App
