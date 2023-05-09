import './Components/appointments/appointment.css';
import './Components/packages/package.css';
import './Components/products/products.css';
import './Components/employees/Employee.css';
import './Components/finance/transactions.css';
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
import Order from './Components/orders/Order';
import SuppliersPdf from './Components/suppliers/SuppliersPdf';
import OrdersPdf from './Components/orders/OrdersPdf';
import SupOrder from './Components/dashboard/suporder';
import CreateOrder from './Components/orders/AddOrder';


import AddOrder from './Components/orders/Order'
// import SupplierPdf from './Components/suppliers/SuppliersPdf';
import Appointment from './Components/appointments/Appointments';
import AddAppointment from './Components/appointments/AddAppointment';
import Appointmentsreport from './Components/appointments/Appointmentsreport';
import Products from './Components/products/Products';
import AddProducts from './Components/products/addProduct';
import AddEmployee from './Components/employees/addEmployee';
import Employees from './Components/employees/Employee';
import ReportPdf from './Components/employees/ReportPdf';
import CustomPack from './Components/packages/CustomPack';
import CustomSucces from './Components/packages/CustomSucces';
import AddTransactions from './Components/finance/addTransactions';
import Transactions from './Components/finance/Transactions';
import FinanceReport from '../src/Components/finance/FinanceReport';

import ViewMsg from './Components/suppliers/ViewMsg';
import SendMessage from './Components/suppliers/SendMessage';

import ViewIMsg from './Components/products/ViewIMsg';
import SendIMessage from './Components/products/SendMessage';

//import Products from './Components/products/Products';
import CreateProduct from './Components/products/addProduct';
import ProductsPdf from './Components/products/ProductsPdf';



function App() {
    return (
        <div className="App">
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/home' element={<DashBoard />} />
                <Route path='/suporder' element={<SupOrder />}/>
                <Route path='/signup' element={<Signup />} />
                <Route path='/posts' element={<Posts />} />
                <Route path='/posts/create' element={<CreatePost />} />
                <Route path='/posts/create/posts' element={<Posts />} />
                <Route path='/posts/report' element={<ReactPdfPrint />} />
                <Route path='/posts/clientPack' element={<Client />} />
                <Route path='/sup' element={<Supplier />} />
                <Route path='/sup/add' element={<AddSupplier />} />
                <Route path='/sup/add/sups' element={<Supplier />} />
                <Route path='/sup/report' element={<SuppliersPdf/>}/>

                <Route path='/ord' element={<Order/>}/>
                <Route  path='/ord/add' element ={<CreateOrder />}/>
                <Route path='/ord/add/ords' element={<Order />}/>
                <Route path='/ord/report' element={< OrdersPdf/>} />

                
                
                <Route path='/appointments' element={<Appointment />} />
                <Route path='/appointments/add' element={<AddAppointment />} />
                <Route path='/appointments/add/appointments' element={<Appointment />} />
                <Route path='/appointments/report' element={<Appointmentsreport />} />
                <Route path='/products' element={<Products />} />
                <Route path='/products/add' element={<AddProducts />} />
                <Route path='/products/add/products' element={<Products />} />
                <Route path='/emp' element={<Employees />} />
                <Route path='/emp/add' element={<AddEmployee />} />
                <Route path='/emp/add/emp' element={<Employees />} />
                <Route path='/emp/empDetails' element={<ReportPdf />} />
                <Route path='/posts/clientPack/create' element={<CustomPack />} />
                <Route path='/posts/clientPack/create/customsucces' element={<CustomSucces />} />
                <Route path='/fin'element={<Transactions />} />
                <Route path='/fin/add' element={<AddTransactions />} />
                <Route path='/fin/add/trans'element={<Transactions />} />
                <Route path='/fin/report' element={<FinanceReport />} />

                <Route path='/msg' element={<ViewMsg />}/>
                <Route path='/msg/add' element={<SendMessage />} />
                <Route path='/msg/add/msgs' element={<ViewMsg />}/>

                <Route path='/imsg' element={<ViewIMsg />}/>
                <Route path='/imsg/add' element={<SendIMessage />} />
                <Route path='/imsg/add/imsgs' element={<ViewIMsg />}/>

                <Route path='/products' element={<Products />} />
                <Route path='/products/add' element={<CreateProduct />} />
                <Route path='/products/add/products' element={<Products />} />

            </Routes>
        </div>
    );
}
  
export default App;



