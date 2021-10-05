import React from 'react';
import {Card, CardBody, CardSubtitle, CardText, Button, Container} from "reactstrap";
import {toast} from "react-toastify";

const btn=()=>{
    toast("Updated successfully")
};

const btn1=()=>{
    toast("Deleted successfully")
};

const Course=()=>{
    return (
        <Card>
            <CardBody className="text-center">
                <CardSubtitle className = "font-weight-bold"> Java Course</CardSubtitle>
                <CardText> It is a java course for beginners </CardText>
                <Container className = "text-center">
                    <Button color = "danger" onClick={btn1}> Delete </Button>
                    <Button color ="warning" onClick={btn}>Update</Button>
                </Container>
            </CardBody>
        </Card>
    );
}

export default Course;