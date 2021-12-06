import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from 'react-router-dom';
import HomePage from "./HomePage";
import UserLoginPage from "./Forms/UserLoginPage";
import SignUpPage from './Forms/SignUpPage';
import AdminLoginPage from "./Forms/AdminLoginPage";
import DealSubmit from "./Forms/DealSubmit";


const App = () =>{
    return(
        <>
        <Routes>
            <Route exact path='/' element={<HomePage/>} />
            <Route exact path='/userlogin' element={<UserLoginPage/>} />
            <Route exact path='/signup' element={<SignUpPage/>} />
            <Route exact path='/adminlogin' element={<AdminLoginPage/>} />
            <Route exact path='/submitdeal' element={<DealSubmit/>} />
        </Routes>
        </>
    );
}

export default App;