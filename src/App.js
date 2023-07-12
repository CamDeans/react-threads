import Feed from "./components/Feed"
import Header from "./components/Header"
import Nav from "./components/Nav"
import PopUp from "./components/PopUp"
//import PopupThread from "./components/PopupThread"
//import Thread from "./components/Thread"
//import ThreadInput from "./components/ThreadInput"

const App = () => {
  return (
    <div className="app">
     <Nav></Nav>
     <Header></Header>
     <Feed></Feed> 
     <PopUp></PopUp>
    </div>
  );
}

export default App;
