import { Routes, Route } from 'react-router-dom';

import App from './App';
import Dashboard from './Routes/Dashboard';

const Router = () => {
    return (
        <Routes>
            <Route path='/' element={<App />} >
                <Route path='dashboard' element={<Dashboard />} />
                <Route
                    path="*"
                    element={
                        <main style={{ padding: "1rem" }}>
                            <p>There's nothing here!</p>
                        </main>
                    }
                />
            </Route>
        </Routes>
    )
}

export default Router;