import {Routes, Route} from 'react-router-dom'

import Home from '../Pages/Home'
import Historia from '../Pages/Historia'
import Discografia from '../Pages/Discografia'
import Premios from '../Pages/Premios'

export default function RoutesApp() {
    return (
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/historia' element={<Historia/>}/>
            <Route path='/discografia' element={<Discografia/>}/>
            <Route path='/premios' element={<Premios/>}/>
        </Routes>
    )
}