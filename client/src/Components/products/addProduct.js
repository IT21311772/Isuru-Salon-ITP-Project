import { Form } from "react-bootstrap";
import {useNavigate} from 'react-router-dom';
import { useState } from "react";
import axios from "axios";
import './products.css';

function CreatePost () {
    const navigate = useNavigate();
    const [product, setProduct] = useState ({
        name: "",
        type: "",
        category: "",
        date: "",
        quantity: "",
        totalPrice: "",
    });

    const handleChange = (event) => {
        const { name, value } = event.target;

        setProduct((prev) => {
            return {
                ...prev,
                [name]: value,
            };
        });
    };

    const handleClick = (event) => {
        event.preventDefault();

        axios.post("/api/Product/add", product)
        .then((res) => console.log(res))
        .catch((err) => console.log(err));

        navigate("products");
        
    };

    return (
        <div className="packages-create">

        <div className="Create-post">
            <h1 className="title">Add Products</h1><br />
            <Form className="Form">
                <Form.Group className="Form-Group">
                    <Form.Control className="Form-Control" 
                        name="name" 
                        value={product.name}
                        placeholder="Product Name"
                        onChange={handleChange}
                        style={{width:"80%", marginLeft:"10%"}}
                        required />
                    
                    <Form.Control className="Form-Control" 
                        name="type" 
                        value={product.type}
                        placeholder="Product Type"
                        onChange={handleChange}
                        style={{width:"80%", marginLeft:"10%"}}
                        required />

                    <Form.Control className="Form-Control"
                        name="category" 
                        value={product.category}
                        placeholder="Category"
                        onChange={handleChange} 
                        style={{width:"80%", marginLeft:"10%"}}
                        required />
                    <Form.Control className="Form-Control"
                        name="date" 
                        value={product.date}
                        placeholder="Date"
                        onChange={handleChange} 
                        style={{width:"80%", marginLeft:"10%"}}
                        required />
                    <Form.Control className="Form-Control"
                        name="quantity" 
                        value={product.quantity}
                        placeholder="Quantity"
                        onChange={handleChange} 
                        style={{width:"80%", marginLeft:"10%"}}
                        required />
                    <Form.Control className="Form-Control"
                        name="totalPrice" 
                        value={product.totalPrice}
                        placeholder="Total Price"
                        onChange={handleChange} 
                        style={{width:"80%", marginLeft:"10%"}}
                        required />
                </Form.Group>
                <br />
                < button style={{borderRadius:"5px", background:"#b30059", padding:"1.5%", width:"45%", fontSize:"17px", 
                paddingLeft:"5px", paddingRight:"5px", border:"#b30059"}} onClick={handleClick}>ADD PRODUCT</button>
            </Form>
            <br />
            {/* <br />
            <button style={{borderRadius:"5px", background:"#a66f72", padding:"0.5%"}} onClick={() => navigate(-1)}> BACK </button>   */}
        </div>
        </div>
    );
}

export default CreatePost;