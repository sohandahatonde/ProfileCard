
import AdminList from "./Components/AdminList"
import CardList from "./Components/CardList"
import Navbar from "./Components/Navbar"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import UdpateForm from "./Components/UdpateForm"

const App = () => {
  return (
    <div>
      <BrowserRouter>
           <Navbar/>
      <Routes>
            <Route exact path="/" element={<CardList/>} ></Route>
            <Route exact path="/Admin" element={<AdminList/>} ></Route>
            <Route exact path="/Admin/updateForm/:id" element={<UdpateForm/>} ></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
