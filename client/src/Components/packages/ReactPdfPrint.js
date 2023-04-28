import React,{ useRef} from "react";
import { useReactToPrint} from 'react-to-print';
import { useEffect,useState } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table } from "react-bootstrap";
import Logo from '../../images/logo.jpg';

const ReactPdfPrint = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get("/api/Post/posts")
            .then((res) => {
                console.log(res)
                setPosts(res.data);
            })
            .catch((err) => console.log(err));
}, []);
 // Creating Printing function
 const componentPDF = useRef();
 const generatePDF = useReactToPrint({
  content: ()=> componentPDF.current,
  documentTitle: "Available Services - Isuru Salon",
  onAfterPrint:()=>alert("Data saved in PDF")
 });




 return (
    <div >
          <div className="container mt-2  p-3  rounded-3"> 
         <div className="d-grid d-md-flex justify-content-md-end mb-3 ">
                <button className="btn-report " onClick={generatePDF}>Print Report</button>
        </div></div>

         <div ref={componentPDF} style={{width:'100%'}} className="container  p-3" >
        <div className="container mt-1  p-5  rounded-3">
   
        <img src={Logo} style={{width:'20%', height:'10%'}}></img>
        <br /><br />
            <h5>Isuru Salon</h5>
            <br></br>
            <h6>  225/2J</h6>
            <h6>  High Level Road</h6>
            <h6>  Homagama</h6>
            <br></br>
            <div className="container mt-1 bg-light p-5  rounded-3">
            <center><h4>Available Services Report</h4></center>
            </div>
      </div>

    
    <div className="container mt-3 bg-light p-5 mt-4 rounded-3">
    <table className="table  table-hover">
              <thead>
                <tr>
                  <th scope="col">Service ID</th>
                  <th scope="col">Servie Name</th>
                  <th scope="col">Price</th>
                  <th scope="col">Category</th>
                  
                </tr>
              </thead> 
              <tbody>
                {posts.map((item) =>(
                    <tr>
                        <td>{item.sId}</td>
                        <td>{item.sName}</td>
                        <td>{item.sPrice}</td>
                        <td>{item.sCategory}</td>
                    </tr>
                )) }
              
                </tbody>
              </table>
    


    </div></div>
</div>
  )
}


export default ReactPdfPrint;