import React, {useState}from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css"
import{Dropdown, DropdownItem, DropdownMenu, DropdownToggle} from "reactstrap"
import Card from "./Card";

function App() {

  const[dropdown, setDropdown]=useState(false);
  const openCloseDropDown=()=>{
    setDropdown(!dropdown)
  }

  const actionTest=()=>{
    alert("Seguro Vida Activa")
  }

 
  return (
    <div className="App container d-flex flex-column">
      <div className="row row-1 mt-5">
      <div className="logo-bice">
        
      </div>
      <h2 className= "title my-4">¿A quién quieres proteger?</h2>
      <h4 className= "sub-titulo my-3">Encuentra el seguro que mejor se adapte a tus necesidades. Elige una opción y nosotros te asesoramos</h4>
      
     <Dropdown isOpen={dropdown}toggle={openCloseDropDown} direction="left" size="lg" >
       <DropdownToggle caret className="buttonDropDown">
         Seguros
       </DropdownToggle>
    
      <DropdownMenu>
      <DropdownItem header>  Seleccione el Plan </DropdownItem>
      <DropdownItem divider/>
        <DropdownItem onClick={()=> actionTest()}> Seguro Vida Activa </DropdownItem>
        <DropdownItem onClick={()=> actionTest()}>Seguro Viaje Protegido  </DropdownItem>
        <DropdownItem disabled>Accion 3(deshabilitada)</DropdownItem>
      </DropdownMenu>
     </Dropdown>
     </div>
     
     <br />  <br /> <br /> <br /> <br />

     <div className="row row-2 justify-content-center mt-5">
     <Card/>
     </div>
    </div>
  );
}

export default App;
