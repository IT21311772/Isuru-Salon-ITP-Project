import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useState } from "react"; //deleted the (, useEffect )
import axios from "axios";
import MainLayout from "../../layouts/MainLayout";


function CreateService() {
  const navigate = useNavigate();
  const [post, setPost] = useState({
    sId: "",
    sName: "",
    sPrice: "",
    sCategory:"",
  });

  const handleChange = (event) => {
    const { name, value } = event.target; //handleChange function is use to get input value

    setPost((prev) => {
      return {
        ...prev,
        [name]: value, //save the values and change the next value
      };
    });
  };


  const handleClick = (event) => {
    event.preventDefault();

    //give last part of url insted of the whole URL and send the other part to package.json
    //send data to database using post method
    axios
      .post("/api/Post/create", post)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

    navigate("/posts");
  };

    return (
        <div className="packages">

        
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
                    
                    <Form.Select name="type"
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
                < button style={{borderRadius:"5px", background:"#a66f72", padding:"1%", width:"40%"}} onClick={handleClick}>CREATE PACKAGE</button>
            </Form>
            <br />
            {/* <br />
            <button style={{borderRadius:"5px", background:"#a66f72", padding:"0.5%"}} onClick={() => navigate(-1)}> BACK </button>   */}
        </div>
        </div>
    );
}

export default CreateService;
