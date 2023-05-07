import { useEffect,useState } from "react";
import axios from "axios";
import {Form, InputGroup } from "react-bootstrap";
// import {useNavigate } from "react-router-dom";
import Modal from 'react-bootstrap/Modal';
import { Link } from "react-router-dom";
import './Salary.css';



function App() {
// const navigate = useNavigate();


// const navigate = useNavigate();
const [emp, setEmp] = useState([]);
const [updatedPost, setUpdatedPost] = useState({})
const [search, setSearch] = useState('');

const [show, setShow] = useState(false);
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);

useEffect(() => {
    axios.get("/api/sal/sals")
        .then((res) => {
            console.log(res)
            setEmp(res.data);
        })
        .catch((err) => console.log(err));
}, []);


const handleChange = (e) => {
const { name, value} = e.target;

setUpdatedPost((prev) => {
    return {
        ...prev,
        [name]: value,
    };
});
};

//Sorting function
const [order, setOrder] = useState("ASC");
const sorting = (col) =>{
  if(order ==="ASC"){
    const sorted = [...emp].sort((a,b) =>
        a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1);

        setEmp(sorted);
        setOrder("DESC");
  }
  if(order ==="DESC"){
    const sorted = [...emp].sort((a,b) =>
        a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1);

        setEmp(sorted);
        setOrder("ASC");
    }
  };



return (
    <div className="packages">
    <div>
        {/* style={{width:"90%", margin: "auto auto", textAlign: "center"}} */}
        
      <br /><br />
        

        {emp ? (
            
            <>
            
            <Form>
                <InputGroup className="my-1" style={{width:"20%", marginLeft:"75%"}}>
                    <Form.Control 
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search here"/>
                </InputGroup>
            </Form>
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <button style={{borderRadius:"5px", background:"#b30059", padding:"0.5%"}}><Link to="/emp/sals/adds" style={{color:"white", textDecoration:"none"}}>Add Salary</Link></button>&nbsp;&nbsp;&nbsp;&nbsp;
                <button style={{borderRadius:"5px", background:"#b30059", padding:"0.5%"}}><Link to="/sal/empDetails" style={{color:"white", textDecoration:"none"}}>Download Salary Sheet</Link></button>&nbsp;&nbsp;&nbsp;&nbsp;

                <br /><br />
                <center>
                    <h1 style={{color:"#660033", fontWeight:"bolder", fontSize:"50px"}}>Salary Details</h1>
                </center>

                <div className="container">
                <button onClick={() => sorting("id")}>Sort by ID</button>&nbsp;
                <button onClick={() => sorting("netSal")}>Sort by Net Salary</button>
                </div>
                <br />
                    
                        {emp.filter((data) => {
                            return search.toLowerCase() === ''
                                ? data
                                : data.id.toLowerCase().includes(search) ||
                                  data.workingDays.toLowerCase().includes(search) ||
                                  data.payRate.toLowerCase().includes(search) ||
                                  data.netSal.toLowerCase().includes(search) 
                        })

                        
                        .map((employee) => {
                            return (
        
                                    <div key={employee._id} className = "package-preview" >
                                        <center>
                                            <h2>{employee.id}</h2>
                                            <p>{employee.workingDays}</p>
                                            <p>{employee.payRate}</p>
                                            <p>{employee.netSal}</p>
                                        </center>
        
                                    </div>   
                            );
                        })}
                        
            </>
        ) : (
          ""
        )}
    </div>
    </div>
);
}


export default App;
