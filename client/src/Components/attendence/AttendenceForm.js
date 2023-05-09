import { Form } from "react-bootstrap";
import {useNavigate} from 'react-router-dom';
import { useState } from "react";
import axios from "axios";
import './Attendence.css';

function CreatePost () {
    const navigate = useNavigate();
    const [data, setData] = useState ({
        name: "",
        id: "",
        date: "",
        state: "",
    });

    const handleChange = (event) => {
        const { name, value } = event.target;

        setData((prev) => {
            return {
                ...prev,
                [name]: value,
            };
        });
    };

    const handleClick = (event) => {
        event.preventDefault();

        axios.post("/api/sch/add", data)
        .then((res) => console.log(res))
        .catch((err) => console.log(err));

        navigate("data");
        
    };

    return (
        <div className="packages-create">

        <div className="Create-post">
            <h1 className="title">Add Employee Attendence</h1><br />
            <Form className="Form">
                <Form.Group className="Form-Group">
                    <Form.Control className="Form-Control" 
                        name="name" 
                        value={data.name}
                        placeholder="Name"
                        onChange={handleChange}
                        style={{width:"80%", marginLeft:"10%"}}
                        required />
                    
                    <Form.Control className="Form-Control" 
                        name="id" 
                        value={data.id}
                        placeholder="Employee ID"
                        onChange={handleChange}
                        style={{width:"80%", marginLeft:"10%"}}
                        required />

                    <Form.Control className="Form-Control"
                        name="date" 
                        value={data.date}
                        placeholder="Date"
                        onChange={handleChange} 
                        style={{width:"80%", marginLeft:"10%"}}
                        required />

                    <Form.Control className="Form-Control"
                        name="state" 
                        value={data.state}
                        placeholder="State"
                        onChange={handleChange} 
                        style={{width:"80%", marginLeft:"10%"}}
                        required />
                </Form.Group>
                <br />
                <button style={{borderRadius:"5px", background:"#b30059", padding:"1.5%", width:"45%", fontSize:"17px", 
                paddingLeft:"5px", paddingRight:"5px", border:"#b30059"}} onClick={handleClick}>ADD ATTENDENCE</button>
            </Form>
            <br />
        </div>
        </div>
    );
}

export default CreatePost;