import './Components/packages/package.css';
import './Components/attendence/Attendence.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import CreatePost from './Components/packages/CreatePost';
import Posts from './Components/packages/Posts';
import Login from './Components/login/Login';
import Signup from './Components/login/Signup';
import DashBoard from './Components/dashboard/dashboard';
import ReactPdfPrint from './Components/packages/ReactPdfPrint';
import Client from './Components/packages/Client';
import Attendence from './Components/attendence/Attendence';
import AttendenceForm from './Components/attendence/AttendenceForm';





function App() {
    return ( 
        <div className="App">
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/home' element={<DashBoard />} />
                <Route path='/signup' element={<Signup />} />
                <Route path='/posts' element={<Posts />} />
                <Route path='/posts/create' element={<CreatePost />} />
                <Route path='/posts/create/posts' element={<Posts />} />
                <Route path='/posts/report' element={<ReactPdfPrint />} />
                <Route path='/posts/clientPack' element={<Client />} />
                <Route path='/data' element={<Attendence />} />
                <Route path='/data/add' element={<AttendenceForm />} />
                <Route path='/data/add/data' element={<Attendence />} />

             

            </Routes>
        </div>
    );
}
  
export default App;
        

