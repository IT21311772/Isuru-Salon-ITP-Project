import { Form } from "react-bootstrap";
import {useNavigate} from 'react-router-dom';
import { useState } from "react";
import axios from "axios";
import './package.css';

function CreatePost () {
    const navigate = useNavigate();
    const [post, setPost] = useState ({
        title: "",
        type: "",
        description: "",
        price: "",
    });

    const handleChange = (event) => {
        const { name, value } = event.target;

        setPost((prev) => {
            return {
                ...prev,
                [name]: value,
            };
        });
    };

    const handleClick = (event) => {
        event.preventDefault();

        axios.post("/api/Post/create", post)
        .then((res) => console.log(res))
        .catch((err) => console.log(err));

        navigate("posts");
        
    };

    return (
        <div className="packages-create">

        <div className="Create-post">
            <h1 className="title">Create New Package</h1><br />
            <Form className="Form">
                <Form.Group className="Form-Group">
                    <Form.Control className="Form-Control" 
                        name="title" 
                        value={post.title}
                        placeholder="Title"
                        onChange={handleChange}
                        style={{width:"80%", marginLeft:"10%"}}
                        required />
                    
                    <Form.Select name="type" className="Form-Control" 
                        value={post.type} 
                        placeholder="Package Type"
                        onChange={handleChange} 
                        style={{width:"80%", marginLeft:"10%"}}
                        required>
                            <option>Package Type</option>
                            <option>Daily Package</option>
                            <option>Event Package</option>
                            <option>Seasonal Package</option>
                    </Form.Select>

                    <Form.Control className="Form-Control"
                        name="description" 
                        value={post.description}
                        placeholder="Description"
                        onChange={handleChange} 
                        style={{width:"80%", marginLeft:"10%"}}
                        required />
                    <Form.Control className="Form-Control"
                        name="price" 
                        value={post.price}
                        placeholder="Price"
                        onChange={handleChange} 
                        style={{width:"80%", marginLeft:"10%"}}
                        required />
                </Form.Group>
                <br />
                < button style={{borderRadius:"5px", background:"#b30059", padding:"1.5%", width:"45%", fontSize:"17px", 
                paddingLeft:"5px", paddingRight:"5px", border:"#b30059"}} onClick={handleClick}>CREATE PACKAGE</button>
            </Form>
            <br />
            {/* <br />
            <button style={{borderRadius:"5px", background:"#a66f72", padding:"0.5%"}} onClick={() => navigate(-1)}> BACK </button>   */}
        </div>
        </div>
    );
}

export default CreatePost;