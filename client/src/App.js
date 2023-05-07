import './Components/packages/package.css';
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
import AddEmployee from './Components/employees/addEmployee';
import Employees from './Components/employees/Employee';
import ReportPdf from './Components/employees/ReportPdf';
import Client from './Components/packages/Client'
import CustomPack from './Components/packages/CustomPack';
import CustomSucces from './Components/packages/CustomSucces';
import Client from './Components/packages/Client';
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
            </Routes>
        </div>
    );
}
  
export default App;
        

