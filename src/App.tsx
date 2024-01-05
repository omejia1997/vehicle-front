import { Routes, Route, BrowserRouter } from "react-router-dom";
import ListVehicles from './components/ListVehicles';
import RegisterVehicle from "./components/RegisterVehicle";
import FilterVehicles from "./components/FilterVehicles";


function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ListVehicles />}></Route>
        <Route path="/register-vehicle" element={<RegisterVehicle />}></Route>
        <Route path="/filter-vehicles" element={<FilterVehicles />}></Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
