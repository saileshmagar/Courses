import React from "react";
import {Jumbotron, Container, Button} from "reactstrap";
import {toast} from "react-toastify";

const btn=()=>{
    toast.success("Well Done");
};
const Home=()=> {
    return (
<div>
    <Jumbotron className="text-center bg-primary">

        <h1 className="display-3"> Sailesh </h1>
        <p>
            Hello. This is Sailesh.
        </p>
<Container>
    <Button color="secondary" outline onClick={btn}> Start learning </Button>

</Container>
    </Jumbotron>
</div>
    );
};
export default Home;
