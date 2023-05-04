import { useEffect,useState } from "react";
import axios from "axios";
import {Form, InputGroup } from "react-bootstrap";
// import {useNavigate } from "react-router-dom";
import Modal from 'react-bootstrap/Modal';
import { Link } from "react-router-dom";
import './Employee.css';





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
    axios.get("/api/emp/emps")
        .then((res) => {
            console.log(res)
            setEmp(res.data);
        })
        .catch((err) => console.log(err));
}, []);

const deletePost = (id) => {
axios
.delete(`/api/emp/delete/${id}`)
.then((res) => console.log(res))
.catch((err) => console.log(err));

window.location.reload();
};

const updatePost = (post) => {
setUpdatedPost(post);
handleShow();
}

const handleChange = (e) => {
const { name, value} = e.target;

setUpdatedPost((prev) => {
    return {
        ...prev,
        [name]: value,
    };
});
};

const saveUpdatedPost = () => {
axios.put(`/api/emp/update/${updatedPost._id}`, updatedPost)
.then((res) => console.log(res))
.catch((err) => console.log(err));

handleClose();
window.location.reload();
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
        {/* <button onClick={() => navigate(-1)}>BACK</button> */}
        <Modal show={show} onHide={handleClose} >
            <Modal.Header closeButton>
                <Modal.Title style={{color:"#b30059"}}>Update Employee Details</Modal.Title>
            </Modal.Header>
            <Modal.Body style={{width:"100%", height:"200%"}}>
                <Form>
                    <Form.Group>
                        <Form.Control 
                            style={{width: "80%",
                                    padding: "6px 10px",
                                    margin: "10px 0",
                                    border: "1px solid #c762a1",
                                    borderRadius: "5px",
                                    boxSizing: "border-box",
                                    display: "block",
                                    marginLeft: "10%"}}
                            placeholder="Name"
                            name="name"
                            value={updatedPost.name ? updatedPost.name : ""}
                            onChange={handleChange}/>
                        <Form.Control 
                            style={{width: "80%",
                                    padding: "6px 10px",
                                    margin: "10px 0",
                                    border: "1px solid #c762a1",
                                    borderRadius: "5px",
                                    boxSizing: "border-box",
                                    display: "block",
                                    marginLeft: "10%"}}
                            placeholder="Employee ID"
                            name="id"
                            value={updatedPost.id ? updatedPost.id : ""}
                            onChange={handleChange}/>
                                
                        <Form.Control 
                            style={{width: "80%",
                            padding: "6px 10px",
                            margin: "10px 0",
                            border: "1px solid #c762a1",
                            borderRadius: "5px",
                            boxSizing: "border-box",
                            display: "block",
                            marginLeft: "10%"}}
                            placeholder="salary"
                            name="salary"
                            value={updatedPost.salary ? updatedPost.salary : ""}
                            onChange={handleChange}/>

                        <Form.Control 
                            style={{width: "80%",
                            padding: "6px 10px",
                            margin: "10px 0",
                            border: "1px solid #c762a1",
                            borderRadius: "5px",
                            boxSizing: "border-box",
                            display: "block",
                            marginLeft: "10%"}}
                            placeholder="Joined Date"
                            name="joinedDate"
                            value={updatedPost.joinedDate ? updatedPost.joinedDate : ""}
                            onChange={handleChange}/>
                        <Form.Control 
                            style={{width: "80%",
                            padding: "6px 10px",
                            margin: "10px 0",
                            border: "1px solid #c762a1",
                            borderRadius: "5px",
                            boxSizing: "border-box",
                            display: "block",
                            marginLeft: "10%"}}
                            placeholder="Address"
                            name="address"
                            value={updatedPost.address ? updatedPost.address : ""}
                            onChange={handleChange}/>

                        <Form.Control 
                            style={{width: "80%",
                            padding: "6px 10px",
                            margin: "10px 0",
                            border: "1px solid #c762a1",
                            borderRadius: "5px",
                            boxSizing: "border-box",
                            display: "block",
                            marginLeft: "10%"}}
                            placeholder="Phone No"
                            name="phoneNo"
                            value={updatedPost.phoneNo ? updatedPost.phoneNo : ""}
                            onChange={handleChange}/>

                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <button style={{borderRadius:"5px", background:"#b30059", padding:"1.5%", width:"200px", fontSize:"17px", 
                border:"#b30059", marginRight:"25%"}} onClick={handleClose}>
                    Close
                </button>
                <br />
                <button style={{borderRadius:"5px", background:"#b30059", padding:"1.5%", width:"200px", fontSize:"17px", 
                border:"#b30059", marginRight:"25%"}} onClick={saveUpdatedPost}>
                    Save Changes
                </button>
            </Modal.Footer>
        </Modal>

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
                <button style={{borderRadius:"5px", background:"#b30059", padding:"0.5%"}}><Link to="/emp/add" style={{color:"white", textDecoration:"none"}}>Add Employee</Link></button>&nbsp;&nbsp;&nbsp;&nbsp;
                <button style={{borderRadius:"5px", background:"#b30059", padding:"0.5%"}}><Link to="/emp/report" style={{color:"white", textDecoration:"none"}}>Download Employee List</Link></button>&nbsp;&nbsp;&nbsp;&nbsp;
                <button style={{borderRadius:"5px", background:"#b30059", padding:"0.5%"}}><Link to="/emp/report" style={{color:"white", textDecoration:"none"}}>Employee Salary</Link></button>


                <br /><br />
                <center>
                    <h1 style={{color:"#660033", fontWeight:"bolder", fontSize:"50px"}}>Employees Details</h1>
                </center>

                <div className="container">
                <button onClick={() => sorting("name")}>Sort by Name</button>&nbsp;
                <button onClick={() => sorting("salary")}>Sort by Salary</button>
                </div>
                <br />
                    
                        {emp.filter((data) => {
                            return search.toLowerCase() === ''
                                ? data
                                : data.name.toLowerCase().includes(search) ||
                                  data.id.toLowerCase().includes(search) ||
                                  data.salary.toLowerCase().includes(search) ||
                                  data.joinedDate.toLowerCase().includes(search) ||
                                  data.address.toLowerCase().includes(search) ||
                                  data.phoneNo.toLowerCase().includes(search)
                        })


                        
                        .map((employee) => {
                            return (
        
                                    <div key={employee._id} className = "package-preview" >
                                        <center>
                                            <h2>{employee.name}</h2>
                                            <p>{employee.id}</p>
                                            <p>{employee.salary}</p>
                                            <p>{employee.joinedDate}</p>
                                            <p>{employee.address}</p>
                                            <p>{employee.phoneNo}</p>
                                                <button onClick={() => updatePost(employee)}>UPDATE</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                <button style={{color:"white", background:"#3d3c3c", border:"black"}} onClick={() => deletePost(employee._id)}>DELETE</button><br />
                                            
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
