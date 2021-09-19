import NavBar from "../NavBars/NavBar";
import Brand from "./Brand";
import "./BrandHeader.css";
import logo from '../../imgs/Logo.png';
function BrandHeader({ children }){
  return (
    <header>
     <Brand title="BPB"></Brand>
      <NavBar></NavBar>
    </header>
  );
}

export default BrandHeader;
