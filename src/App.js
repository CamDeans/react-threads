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
  const [ threads, setThreads ] = useState(null)
  const [ viewThreadsFeed, setViewThreadsFeed ] = useState(true)

  const userId = "91f16eb3-b041-47f0-b538-267c5b77cd12"

  const getUser = async () => {
    try {
      const response = await fetch(`http://localhost:3000/users?user_uuid=${userId}`)
      const data = await response.json()
      setUser(data[0])
    } catch (error) {
      console.error(error)
    }
  }

  const getThreads = async () => {
    try {
      const response = await fetch(`http://localhost:3000/threads?thread_from${userId}`)
      const data = await response.json()
      setThreads(data[0])
    } catch (error) {
      console.error(error)
    }
  }

  const getThreadsFeed = () => {

  }

  useEffect(() => {
    getUser()
    getThreads()
  }, [])

  console.log(user, threads)

  return (
    <>
      {
        user && <div className="app">
        <Nav url={user.instagram_url} />
        <Header 
          user={user}
          viewThreadsFeed={viewThreadsFeed}  
          setViewThreadsFeed={setViewThreadsFeed}
        />
        <Feed />
        {/*<PopUp />*/}
        </div>
      }
    </>
  );
}

export default App
