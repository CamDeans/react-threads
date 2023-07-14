import { useState, useEffect } from "react"
import Feed from "./components/Feed"
import Header from "./components/Header"
import Nav from "./components/Nav"
//import PopUp from "./components/PopUp"
//import PopupThread from "./components/PopupThread"
//import Thread from "./components/Thread"
//import ThreadInput from "./components/ThreadInput"

const App = () => {
  const [ user, setUser ] = useState(null)

  const userId = "91f16eb3-b041-47f0-b538-267c5b77cd12"

  const getUser = async () => {
    try {
      const response = await fetch(`localhost:3000/users?user_uuid=${userId}`)
      const data = await response.json()
      setUser(data[0])
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getUser()
  }, [])

  console.log(user)

  return (
    <div className="app">
     <Nav></Nav>
     <Header></Header>
     <Feed></Feed> 
     {/*<PopUp></PopUp>*/}
    </div>
  );
}

export default App;
