import {Routes, Route} from 'react-router-dom'

import Home from '../Pages/Home'

export default function RoutesApp() {
    return (
        <Routes>
            <Route path='/' element={<Home/>}/>
        </Routes>
    )
}