import "./App.css";
import Navbar from "./NavBar/Navbar";
import Image from "../Components/Images/Img.jpg";
import MiddleContainer from "./NavBar/assets/MiddleContainer";
import SubMiddleCont from "./NavBar/assets/SubMiddleCont";
import BottomMiddleCont from "./NavBar/assets/BottomMiddleCont";
import Container from "./NavBar/assets/Container";
import Container1 from "./NavBar/assets/Container1";
import Container2 from "./NavBar/assets/Container2";
import Container3 from './NavBar/assets/Container3';
import Container4 from "./NavBar/assets/Container4";
import Container5 from "./NavBar/assets/Container5";
import Container6 from "./NavBar/assets/Container6";
import Footer from "./NavBar/assets/Footer";
import Footer1 from './NavBar/assets/Footer1';



function App() {
  return (
    <div className="App box-border w-full">
      <Navbar />
      <header className="App-header ">
        <div
          className="h-screen w-h bg-no-repeat bg-cover"
          style={{ backgroundImage: "url(" + Image + ")" }}
        >
          <div className=" flex  justify-start flex-col  font-noto text-6xl text-white font-semibold py-80  px-28 ">
            Promo Agency
            <div className=" text-base mt-10 gap-5 text-gray-200">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat
              error nam obcaecati perferendis
              <br />{" "}
              <span className=" py-2">
                sunt asperiores ullam reiciendis vel sapiente doloremque
                veritatis.
              </span>
            </div>
            <div className=" flex ">
              <div className="h-0.5 w-16 bg-white flex-col mt-16 cursor-pointer"></div>
              <div className=" text-base mt-12 ml-4 flex">LEARN MORE</div>
            </div>
          </div>
        </div>
        <div className=" flex  flex-col bg-slate-100 ">
          <div className=" flex font-Noto mt-28 text-4xl font-bold justify-center">
            Promotion For Your Business
          </div>
          <div className=" ">
            <span className=" py-5 space-x-2 flex text-center text-gray-500 text-base justify-center">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat
              error nam obcaecati perferendis
              <br />
              sunt asperiores ullam reiciendis vel sapiente doloremque
              veritatis.
            </span>
          </div>
        </div>
        <MiddleContainer />
        <SubMiddleCont />
        <BottomMiddleCont />
        <Container/>
        <Container1/>
        <Container2/>
        <Container3/>
        <Container4/>
        <Container5/>
        <Container6/>
        <Footer/>
        <Footer1 />
      </header>
    </div>
  );
}

export default App;
