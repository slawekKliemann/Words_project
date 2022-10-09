import './App.scss';
import {Footer} from "./components/common/Footer";
import {Header} from "./components/common/Header";
import {Nav} from "./components/common/Nav";

function App() {
  return (
    <div className="App">
      <Header/>
      <Nav/>
      <Footer/>
    </div>
  );
}

export default App;
