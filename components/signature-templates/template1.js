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


function Template1({ props }){
    console.log(props)
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
        <Card>
            <CardBody>
                <div>
                    <span>
                        <img
                        src={props.proPic}
                        width="70"
                        style={{borderRadius: "50%"}}
                         />
                    </span>
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
                    {props.feInputAddress && props.feMobileNumber && props.feEmailAddress ? <table
                        cellPadding="0"
                        cellSpacing="0"
                        style={style.table}>
                        <tbody
                            style={{
                                borderLeft: "solid",
                                borderColor: `rgba(${ props.color.r }, ${ props.color.g }, ${ props.color.b }, ${ props.color.a })`,
                            }}
                        >
                            <tr>
                                <td style={{paddingLeft: "10px"}}>
                                    📍 {`${props.feInputAddress}`}
                                </td>
                            </tr>
                            <tr>
                                <td style={{paddingLeft: "10px"}}>
                                    📞 {`${props.feMobileNumber}`}
                                </td>
                            </tr>
                            <tr>
                                <td style={{paddingLeft: "10px"}}>
                                    📧 {`${props.feEmailAddress}`}
                                </td>
                            </tr>
                        </tbody>
                    </table> : ''}<br/>
                    {props.feFacebook?<span style={{marginRight: "2.5px"}}><a href={`${props.feFacebook}`} color="#000" style={{color: "#000", display: "inline-block", padding: "0px", backgroundColor: `rgba(${props.color.r},${props.color.g},${props.color.b},${props.color.a})`}}><img src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/facebook-icon.png" alt="facebook" style={{color: "#000", maxWidth: "135px", display: "block"}} /></a></span>:''}
                    {props.feTwitter?<span style={{marginRight: "2.5px"}}><a href={`${props.feTwitter} `}color="#000" style={{color: "#000", display: "inline-block", padding: "0px", backgroundColor: `rgba(${props.color.r},${props.color.g},${props.color.b},${props.color.a})`}}><img src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/twitter-icon.png" alt="twitter" style={{color: "#000", maxWidth: "135px", display: "block"}} /></a></span>:''}
                    {props.feLinkedIn?<span style={{marginRight: "2.5px"}}><a href={`${props.feLinkedIn}`} color="#000" style={{color: "#000", display: "inline-block", padding: "0px", backgroundColor: `rgba(${props.color.r},${props.color.g},${props.color.b},${props.color.a})`}}><img src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/linkedin-icon.png" alt="linkedin" style={{color: "#000", maxWidth: "135px", display: "block"}} /></a></span>:''}
                </div>
            </CardBody>
        </Card>
    );
}

export default Template1;