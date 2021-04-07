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


function Template3({ props }){
    const style = {
        table: {
                        marginLeft: "10px",
                        display: "inline", 
				        verticalAlign: '-webkit-baseline-middle',
				        fontSize: 'medium',
				        fontFamily: 'Arial',
                        fontSize: "13px"},
    }
    return(
        <Card id="template1">
            <CardBody>
                <div>
                    <div style={{marginLeft: "30%"}}>
                        <img
                            src={props.proPic}
                            width="70"
                            style={{borderRadius: "50%"}}
                         />
                    </div>
                    <div style={{fontSize: "13px", borderTop: "solid", marginTop: "5px", borderWidth: "2px"}}>
                        <table
                    cellPadding="0"
			        cellSpacing="0"
                    style={style.table}>
                        <tbody>
                        <tr>
                            <td>
                                {`${props.feFirstName} ${props.feLastName}`}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                {`${props.feCompanyName}`}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                {`${props.fePosition}`}
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    <table
                    cellPadding="0"
			        cellSpacing="0"
                    style={style.table}>
                        <tbody
                        style={{
                            borderLeft: "solid",
                            borderColor: `rgba(${ props.color.r }, ${ props.color.g }, ${ props.color.b }, ${ props.color.a })`,
                        }}>
                        <tr>
                            <td style={{paddingLeft: "10px"}}>
                                {`${props.feFirstName} ${props.feLastName}`}
                            </td>
                        </tr>
                        <tr>
                            <td style={{paddingLeft: "10px"}}>
                                {`${props.feCompanyName}`}
                            </td>
                        </tr>
                        <tr>
                            <td style={{paddingLeft: "10px"}}>
                                {`${props.fePosition}`}
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    </div>
                </div>
            </CardBody>
        </Card>
    );
}

export default Template3;