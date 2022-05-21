import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';

const Example = () => {
    return <h1>Let's Go</h1>;
};

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Example />}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
