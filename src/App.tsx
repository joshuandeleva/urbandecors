import { Navbar } from 'components/Navigation/index';
import { Home } from 'pages/Home';
import { Route, Routes } from 'react-router-dom';

const App = () => {
    return (
        <div className="app">
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </div>
    );
};

export default App;
