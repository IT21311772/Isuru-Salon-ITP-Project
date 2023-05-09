import './Components/packages/package.css';
import './Components/products/products.css';
import './Components/employees/Employee.css';
import './Components/finance/transactions.css';
import './Components/attendence/Attendence.css';
import './Components/salary/salary.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';

import CreatePost from './Components/packages/CreatePost';
import Posts from './Components/packages/Posts';

import Login from './Components/login/Login';
import Signup from './Components/login/Signup';
import DashBoard from './Components/dashboard/dashboard';

import ReactPdfPrint from './Components/packages/ReactPdfPrint';

import AddEmployee from './Components/employees/addEmployee';
import Employees from './Components/employees/Employee';
import ReportPdf from './Components/employees/ReportPdf';
import Salary from './Components/salary/Salary';
import AddSalary from './Components/salary/addSalary';
import ReportSal from './Components/salary/ReportSal';


import CustomPack from './Components/home/CustomPack';
import Client from './Components/home/Client';
import Home from './Components/home/Home';
import ContactUs from './Components/home/ContactUs';
import HProducts from './Components/home/Product';


import Attendence from './Components/attendence/Attendence';
import AttendenceForm from './Components/attendence/AttendenceForm';

import Services from './Components/services/Services';
import Report from './Components/services/Report'
import CreateService from './Components/services/CreateService';
import AddSupplier from './Components/suppliers/AddSupplier';
import Supplier from './Components/suppliers/Suppliers';
import Order from './Components/orders/Order'
import AddOrder from './Components/orders/Order'
// import SupplierPdf from './Components/suppliers/SuppliersPdf';
import Appointment from './Components/appointments/Appointments';
import AddAppointment from './Components/appointments/AddAppointment';
import Appointmentsreport from './Components/appointments/Appointmentsreport';

import Products from './Components/products/Products';
import AddProducts from './Components/products/addProduct';

import CustomSucces from './Components/packages/CustomSucces';
import AddTransactions from './Components/finance/addTransactions';
import Transactions from './Components/finance/Transactions';
import FinanceReport from '../src/Components/finance/FinanceReport';

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
                <Route path='/posts/clientPack/create' element={<CustomPack />} />

                <Route path='/posts/clientPack/create/clientPack' element={<Client />} />

                <Route path='/clientHome' element={<Home />} />
                <Route path='/packages' element={<Client />} />
                <Route path='/contact' element={<ContactUs />} />
                <Route path='/pros' element={<HProducts />} />

                <Route path='/posts/clientPack/create/customsucces' element={<CustomSucces />} />

                <Route path='/services' element={<Services />} />
                <Route path='/services/report' element={<Report />} />
                <Route path='/services/create' element={<CreateService />} />


                <Route path='/sup/add' element={<AddSupplier />} />
                <Route path='/sups' element={<Supplier />} />
                <Route path='/sup/add/sups' element={<Supplier />} />
                <Route  path='/ords/addorder' element ={<AddOrder/>}/>
                <Route path='/ords' element={< Order/>}/>
                <Route path='/sup/addorder/ords' element={<Order />} />
                
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
                <Route path='/emp/sals' element={<Salary />} />
                <Route path='/emp/sals/tap' element={<AddSalary />} />
                <Route path='/emp/sals/tap/sals' element={<Salary />} />
                <Route path='/emp/sal/salDetails' element={<ReportSal />} />
                

                <Route path='/fin'element={<Transactions />} />
                <Route path='/fin/add' element={<AddTransactions />} />
                <Route path='/fin/add/trans'element={<Transactions />} />
                <Route path='/fin/report' element={<FinanceReport />} />

                <Route path='/data' element={<Attendence />} />
                <Route path='/data/add' element={<AttendenceForm />} />
                <Route path='/data/add/data' element={<Attendence />} />

             
            </Routes>
        </div>
    );
}
  
export default App;




