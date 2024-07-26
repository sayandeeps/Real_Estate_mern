import { BrowserRouter as Router, Route, Link, Routes }
    from "react-router-dom";

// Import the pages

import Home from "./pages/home"
import Register from "./pages/register"
import Login from "./pages/login"



function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/register" element={<Register />} />
                    <Route exact path="/login" element={<Login />} />

                </Routes>
            </Router>
        </div>
    );
}
export default App;