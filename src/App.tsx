import Header from "./components/Header"
import Sidebar from "./components/Sidebar"
import MainPage from "./components/MainPage"

function App() {
  return (
    <>
      <div className="flex items-center flex-col">
        <Header />

        <div className="flex justify-end">
          <Sidebar />
          <MainPage />
        </div>
      </div>
    </>
  )
}

export default App
