import React from "react";
import {
    ListGroup,
    ListGroupItem,
    Row,
    Col,
    Form,
    FormInput,
    FormGroup,
    FormCheckbox,
    FormSelect,
    Container,
    Button,
    Card,
    CardBody
  } from "shards-react";
import '../../static/fontawesome/js/all';


function Template2({ props }){
    return(
        <Card id="template1">
            <CardBody>
                <div>
                    <div>
                        <img
                            src={props.proPic}
                            width="70"
                            style={{borderRadius: "50%", border: "solid", borderSize: "0.5px", borderColor: `rgba(${ props.color.r }, ${ props.color.g }, ${ props.color.b }, ${ props.color.a })`}}
                         />
                    </div>
                    <div style={{fontSize: "13px"}}>
                        <div style={{marginBottom: "0px", paddingBottom: "0px", textAlign: "left"}}>
                            {`${props.feFirstName} ${props.feLastName}`}
                        </div>
                        <div style={{marginBottom: "0px", paddingBottom: "0px", textAlign: "left"}}>
                            {props.feCompanyName}
                        </div>
                        <div style={{marginBottom: "0px", paddingBottom: "0px", textAlign: "left"}}>
                            {props.fePosition}
                        </div>
                    </div>
                </div>
            </CardBody>
        </Card>
    );
}

export default Template2;