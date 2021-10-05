import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import {Button} from "reactstrap";
import {ToastContainer,toast} from "react-toastify";
import Home from "./components/Home"
import Course from "./components/Course";
function App() {
    const btnHandle=()=> {
        toast.error("done",{position:"top-right"
        });
    };
  return (

    <div>
{/*<Header name= "Sailesh" title="1st" />
        <hr/>
      <h1> Hello</h1>
      <p> This is a paragraph</p>
        <hr/>
        <Header name="Jigme" title="2nd"></Header>*/}
        <ToastContainer/>
        <Home/>
        <Course/>
       {/* <Button  color="danger" size="lg"  onClick={btnHandle}> Danger </Button>
*/}    </div>
  );
}


export default App;
