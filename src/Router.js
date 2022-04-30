import { Routes, Route } from 'react-router-dom';

import Home from './Routes/Home';
import Dashboard from './Routes/Dashboard';

const Router = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='dashboard' element={<Dashboard />} />
            <Route
                path="*"
                element={
                    <main style={{ padding: "1rem" }}>
                        <p>There's nothing here!</p>
                    </main>
                }
            />
        </Routes>
    )
}

export default Router;