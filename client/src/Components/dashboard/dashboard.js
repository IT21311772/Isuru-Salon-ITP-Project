import "./dashboard.css";
import MainLayout from "../../layouts/MainLayout";

function Dashboard() {

  const navigate = useNavigate();

  return (
    <div className="dashboard">


    <div className="App">

      <MainLayout>
        <center><h1 style={{ fontFamily: "mulish,sans-serif" }}>Dashboard</h1></center><br />
      </MainLayout>

      

        <center><h1 style={{fontFamily:"Georgia",fontWeight:"bold"}}>Dashboard</h1></center><br />
      </MainLayout>

      <div className="dash">
        <center>
          <div className="container">
            <button className="btn-func" onClick={() => navigate("/posts")}>Package Management</button>
            <button className="btn-func" onClick={() => navigate("/services")}>Service Management</button>
          </div>
          <div className="container">

            <button className="btn-func" onClick={() => navigate("/posts")}>Schedule Management</button>
            <button className="btn-func" onClick={() => navigate("/fin")}>Finance Management</button>
          </div>

          <div className="container">
            <button className="btn-func" onClick={() => navigate("/appointments")}>Appointment Management</button>
            <button className="btn-func" onClick={() => navigate("/products")}> Inventory Management</button>
          </div>
          <div className="container">
            <button className="btn-func" onClick={() => navigate("/suporder")}>Supplier Management</button>
            <button className="btn-func" onClick={() => navigate("/emp")}>Employee Management</button>
          </div>
        <div className="container">
          <button className="btn-func" onClick={() => navigate("/posts")}>Schedule Management</button>

          
       

          </div>
          
        <div className="container">
          <button className="btn-func" onClick={() => navigate("/fin")}>Finance Management</button>
          <button className="btn-func" onClick={() => navigate("/data")}>Schedule Management</button>
        </div>

        <div className="container">
          <button className="btn-func" onClick={() => navigate("/products")}> Inventory Management</button>
          <button className="btn-func" onClick={() => navigate("/appointments")}>Appointment Management</button>
        </div>

        <div className="container">
          <button className="btn-func" onClick={() => navigate("/sups")}>Supplier Management</button>
          <button className="btn-func" onClick={() => navigate("/emp")}>Employee Management</button>
        </div>
        
        </center>
      </div>
      </div>
    </div>
  
  );
}

export default Dashboard;
