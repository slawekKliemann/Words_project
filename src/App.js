import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router";
import {Footer} from "./components/common/Footer";
import {Header} from "./components/common/Header";
import {Nav} from "./components/common/Nav";
import {Start} from "./components/pages/Start";
import {HowToPlay} from "./components/pages/HowToPlay";
import {MainGame} from "./components/pages/MainGame";
import './scss/App.scss';

function App() {
    return(
        <BrowserRouter>
            <div className="App">
                <Header/>
                <Nav/>
                <Routes>
                    <Route exact path="/"          element={<Start/>}/>
                    <Route exact path="/howtoplay" element={<HowToPlay/>}/>
                    <Route exact path="/maingame"  element={<MainGame/>}/>
                </Routes>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;

