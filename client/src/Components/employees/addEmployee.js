import { Form } from "react-bootstrap";
import {useNavigate} from 'react-router-dom';
import { useState } from "react";
import axios from "axios";
import './Employee.css';

function CreatePost () {
    const navigate = useNavigate();
    const [emp, setEmp] = useState ({
        name: "",
        id: "",
        NIC: "",
        joinedDate: "",
        address: "",
        phoneNo: "",
    });

    const handleChange = (event) => {
        const { name, value } = event.target;

        setEmp((prev) => {
            return {
                ...prev,
                [name]: value,
            };
        });
    };

    const handleClick = (event) => {
        event.preventDefault();

        axios.post("/api/emp/add", emp)
        .then((res) => console.log(res))
        .catch((err) => console.log(err));

        navigate("emp");
        
    };

    return (
        <div className="packages-create">

        <div className="Create-post">
            <h1 className="title">Create New Package</h1><br />
            <Form className="Form">
                <Form.Group className="Form-Group">
                    <Form.Control className="Form-Control" 
                        name="name" 
                        value={emp.name}
                        placeholder="Name"
                        onChange={handleChange}
                        style={{width:"80%", marginLeft:"10%"}}
                        required />

                    <Form.Control className="Form-Control"
                        name="id" 
                        value={emp.id}
                        placeholder="Employee ID"
                        onChange={handleChange} 
                        style={{width:"80%", marginLeft:"10%"}}
                        required />

                        <Form.Control className="Form-Control"
                        name="NIC" 
                        value={emp.NIC}
                        placeholder="NIC"
                        onChange={handleChange} 
                        style={{width:"80%", marginLeft:"10%"}}
                        required />

                    <Form.Control className="Form-Control"
                        name="joinedDate" 
                        value={emp.joinedDate}
                        placeholder="Joined Date"
                        onChange={handleChange} 
                        style={{width:"80%", marginLeft:"10%"}}
                        required />
                    <Form.Control className="Form-Control"
                        name="address" 
                        value={emp.address}
                        placeholder="Address"
                        onChange={handleChange} 
                        style={{width:"80%", marginLeft:"10%"}}
                        required />
                    <Form.Control className="Form-Control"
                        name="phoneNo" 
                        value={emp.phoneNo}
                        placeholder="Phone No"
                        onChange={handleChange} 
                        style={{width:"80%", marginLeft:"10%"}}
                        required />
                </Form.Group>
                <br />
                < button style={{borderRadius:"5px", background:"#b30059", padding:"1.5%", width:"45%", fontSize:"17px", 
                paddingLeft:"5px", paddingRight:"5px", border:"#b30059"}} onClick={handleClick}>Add Employees</button>
            </Form>
            <br />

        </div>
        </div>
    );
}

export default CreatePost;