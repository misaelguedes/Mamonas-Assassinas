import {Routes, Route} from 'react-router-dom'

import Home from '../Pages/Home'
import Discografia from '../Pages/Discografia'

export default function RoutesApp() {
    return (
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/discografia' element={<Discografia/>}/>
        </Routes>
    )
}