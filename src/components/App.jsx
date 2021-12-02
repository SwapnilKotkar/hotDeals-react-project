import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from 'react-router-dom';
import HomePage from "./HomePage";
import Login from "./Forms/LoginPage";
import SignUpPage from './Forms/SignUpPage';
import AdminLogin from "./Forms/AdminLogin";
import DealSubmit from "./DealSubmit";


let App = () =>{
    return(
        <>
        <Routes>
            <Route exact path='/' element={<HomePage/>} />
            <Route exact path='/userlogin' element={<Login/>} />
            <Route exact path='/signup' element={<SignUpPage/>} />
            <Route exact path='/adminlogin' element={<AdminLogin/>} />
            <Route exact path='/submitdealform' element={<DealSubmit/>} />
        </Routes>
    </>
    );
}

export default App;