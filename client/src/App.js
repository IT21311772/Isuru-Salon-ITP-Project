import './Components/packages/package.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import CreatePost from './Components/packages/CreatePost';
import Posts from './Components/packages/Posts';
import Login from './Components/login/Login';
import Signup from './Components/login/Signup';
import DashBoard from './Components/dashboard/dashboard';
import ReactPdfPrint from './Components/packages/ReactPdfPrint';
import Client from './Components/packages/Client';
import AddSupplier from './Components/suppliers/AddSupplier';
import Supplier from './Components/suppliers/Suppliers';
import Order from './Components/orders/Order'
import AddOrder from './Components/orders/Order'
// import SupplierPdf from './Components/suppliers/SuppliersPdf';

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
                <Route path='/sup/add' element={<AddSupplier />} />
                <Route path='/sups' element={<Supplier />} />
                <Route path='/sup/add/sups' element={<Supplier />} />

                <Route  path='/ords/addorder' element ={<AddOrder/>}/>
                <Route path='/ords' element={< Order/>}/>
                <Route path='/sup/addorder/ords' element={<Order />} />
                
            </Routes>
        </div>
    );
}
  
export default App;