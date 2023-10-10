import {BrowserRouter} from 'react-router-dom'

import RoutesApp from './Routes'
import Header from './Components/Header'

export default function App() {
  return (
    <BrowserRouter>
      <Header/>
      <RoutesApp/>
    </BrowserRouter>
  )
}