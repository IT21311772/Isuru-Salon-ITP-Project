// import { useEffect, useState } from "react";
// import axios from "axios";
// import { Form, InputGroup } from "react-bootstrap";
// // import {useNavigate } from "react-router-dom";
// import Modal from 'react-bootstrap/Modal';
// import { Link } from "react-router-dom";


// function App() {
//     // const navigate = useNavigate();



//     // const navigate = useNavigate();
//     const [posts, setPosts] = useState([]);
//     const [updatedPost, setUpdatedPost] = useState({})
//     const [search, setSearch] = useState('');
//     console.log(search);

//     const [show, setShow] = useState(false);
//     const handleClose = () => setShow(false);
//     const handleShow = () => setShow(true);

//     const deletePost = (id) => {
//         axios
//             .delete(`/api/Book/delete/${id}`)
//             .then((res) => console.log(res))
//             .catch((err) => console.log(err));

//         window.location.reload();
//     };

//     useEffect((id) => {
//         axios.get(`/api/Book/appointment/${id}`)
//             .then((res) => {
//                 console.log(res)
//                 setPosts(res.data);
//             })
//             .catch((err) => console.log(err));
//     }, []);

//     const updatePost = (post) => {
//         setUpdatedPost(post);
//         handleShow();
//     }



//     const handleChange = (e) => {
//         const { name, value } = e.target;

//         setUpdatedPost((prev) => {
//             return {
//                 ...prev,
//                 [name]: value,
//             };
//         });
//     };

//     const saveUpdatedPost = () => {
//         axios.put(`/api/Book/update/${updatedPost._id}`, updatedPost)
//             .then((res) => console.log(res))
//             .catch((err) => console.log(err));

//         handleClose();
//         window.location.reload();
//     };

//     //Sorting function
//     const [order, setOrder] = useState("ASC");
//     const sorting = (col) => {
//         if (order === "ASC") {
//             const sorted = [...posts].sort((a, b) =>
//                 a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1);

//             setPosts(sorted);
//             setOrder("DESC");
//         }
//         if (order === "DESC") {
//             const sorted = [...posts].sort((a, b) =>
//                 a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1);

//             setPosts(sorted);
//             setOrder("ASC");
//         }
//     };



//     return (
//         <div className="packages">
//             <div>
//                 {/* style={{width:"90%", margin: "auto auto", textAlign: "center"}} */}

//                 <br /><br />
//                 {/* <button onClick={() => navigate(-1)}>BACK</button> */}
//                 <Modal show={show} onHide={handleClose} >
//                     <Modal.Header closeButton>
//                         <Modal.Title style={{ color: "#b30059" }}>Update Package</Modal.Title>
//                     </Modal.Header>
//                     <Modal.Body style={{ width: "100%", height: "200%" }}>
//                         <Form>
//                             <Form.Group>
//                                 <Form.Control
//                                     style={{
//                                         width: "80%",
//                                         padding: "6px 10px",
//                                         margin: "10px 0",
//                                         border: "1px solid #c762a1",
//                                         borderRadius: "5px",
//                                         boxSizing: "border-box",
//                                         display: "block",
//                                         marginLeft: "10%"
//                                     }}
//                                     placeholder="title"
//                                     name="title"
//                                     value={updatedPost.title ? updatedPost.title : ""}
//                                     onChange={handleChange} />
//                                 <Form.Select
//                                     style={{
//                                         width: "80%",
//                                         padding: "6px 10px",
//                                         margin: "10px 0",
//                                         border: "1px solid #c762a1",
//                                         borderRadius: "5px",
//                                         boxSizing: "border-box",
//                                         display: "block",
//                                         marginLeft: "10%"
//                                     }}
//                                     placeholder="type"
//                                     name="type"
//                                     value={updatedPost.type ? updatedPost.type : ""}
//                                     onChange={handleChange}>
//                                     <option>Package Type</option>
//                                     <option>Daily Package</option>
//                                     <option>Event Package</option>
//                                     <option>Seasonal Package</option>
//                                 </Form.Select>
//                                 <Form.Control
//                                     style={{
//                                         width: "80%",
//                                         padding: "6px 10px",
//                                         margin: "10px 0",
//                                         border: "1px solid #c762a1",
//                                         borderRadius: "5px",
//                                         boxSizing: "border-box",
//                                         display: "block",
//                                         marginLeft: "10%"
//                                     }}
//                                     placeholder="description"
//                                     name="description"
//                                     value={updatedPost.description ? updatedPost.description : ""}
//                                     onChange={handleChange} />
//                                 <Form.Control
//                                     style={{
//                                         width: "80%",
//                                         padding: "6px 10px",
//                                         margin: "10px 0",
//                                         border: "1px solid #c762a1",
//                                         borderRadius: "5px",
//                                         boxSizing: "border-box",
//                                         display: "block",
//                                         marginLeft: "10%"
//                                     }}
//                                     placeholder="price"
//                                     name="price"
//                                     value={updatedPost.price ? updatedPost.price : ""}
//                                     onChange={handleChange} />
//                             </Form.Group>
//                         </Form>
//                     </Modal.Body>
//                     <Modal.Footer>
//                         <button style={{
//                             borderRadius: "5px", background: "#b30059", padding: "1.5%", width: "200px", fontSize: "17px",
//                             border: "#b30059", marginRight: "25%"
//                         }} onClick={handleClose}>
//                             Close
//                         </button>
//                         <br />
//                         <button style={{
//                             borderRadius: "5px", background: "#b30059", padding: "1.5%", width: "200px", fontSize: "17px",
//                             border: "#b30059", marginRight: "25%"
//                         }} onClick={saveUpdatedPost}>
//                             Save Changes
//                         </button>
//                     </Modal.Footer>
//                 </Modal>

//                 {posts ? (

//                     <>


//                         <center>
//                             <h1 style={{ color: "#660033", fontWeight: "bolder", fontSize: "50px" }}>Salon Packages</h1>
//                         </center>


//                         <br />

//                         {posts.filter((post) => {
//                             return search.toLowerCase() === ''
//                                 ? post
//                                 : post.title.toLowerCase().includes(search) ||
//                                 post.type.toLowerCase().includes(search) ||
//                                 post.description.toLowerCase().includes(search)
//                         })
//                             .map((post) => {
//                                 return (

//                                     <div key={post._id} className="package-preview" >
//                                         <center>
//                                             <h2>{post.name}</h2>
//                                             <p>{post.contact}</p>
//                                             <p>{post.email}</p>
//                                             <p>{post.date}</p>
//                                             <p>{post.time}</p>
//                                             <p>{post.service}</p>
//                                             <button onClick={() => updatePost(post)}>UPDATE</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//                                             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//                                             <button style={{ color: "white", background: "#3d3c3c", border: "black" }} onClick={() => deletePost(post._id)}>DELETE</button><br />

//                                         </center>
//                                     </div>
//                                 );
//                             })}
//                     </>
//                 ) : (
//                     ""
//                 )}
//             </div>
//         </div>
//     );
// }


// export default App;


import { useLocation } from 'react-router-dom';
import MainLayout from '../../layouts/MainLayout';
import { Form } from "react-bootstrap";
import Modal from 'react-bootstrap/Modal';
import { useEffect, useState } from "react";
import axios from "axios";
// import {useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./View.css";

function ViewAppointment() {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const [posts, setPosts] = useState([]);


    const name = queryParams.get('name');
    const contact = queryParams.get('contact');
    const email = queryParams.get('email');
    const date = queryParams.get('date');
    const time = queryParams.get('time');
    const service = queryParams.get('service');


    //Get data from database
    useEffect(() => {
        axios.get("/api/Book/appointments")
            .then((res) => {
                console.log(res)
                setPosts(res.data);
            })
            .catch((err) => console.log(err));
    }, []);




    // Render the component
    return (
        <div>
            <div className=''>
                <MainLayout>
                    <h1>Appointment Details</h1>
                </MainLayout>
            </div>
            <div>
                <div className='view-form  mt-3 bg-light' style={{
                    marginLeft: "30%", padding: "5%", marginRight: "40%", marginBottom: "3%", borderRadius: "5px"
                }}>
                    <p>Name: &nbsp;&nbsp; {name}</p>
                    <p>Contact: &nbsp;&nbsp; {contact}</p>
                    <p>Email: &nbsp;&nbsp; {email}</p>
                    <p>Date: &nbsp;&nbsp; {date}</p>
                    <p>Time: &nbsp;&nbsp; {time}</p>
                    <p>Service: &nbsp;&nbsp; {service}</p>
                </div>


                < button className="btn-update" onClick={('')}>UPDATE</button>
                <button className='btn-delete' onClick={('')}>DELETE</button>
            </div>
        </div>
    );
}
export default ViewAppointment;
