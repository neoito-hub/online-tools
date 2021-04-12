import React from "react";
import {
    Card,
    CardBody
  } from "shards-react";


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
        <Card id="template3">
            <CardBody>
                <div style={{width: "100%"}} id="template3">
                    <div style={{marginLeft: "31%"}}>
                        <img
                            src={props.proPic}
                            width="70"
                            style={{borderRadius: "50%"}}
                         />
                    </div>
                    <div style={{fontSize: "13px", borderTop: "solid", marginTop: "5px", borderWidth: "2px", width: "200px"}}>
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
                            borderTop: "solid",
                            borderColor: `rgba(${ props.color.r }, ${ props.color.g }, ${ props.color.b }, ${ props.color.a })`,
                        }}>
                        <tr>
                            <td>
                                {`${props.feInputAddress}`}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                {`${props.feMobileNumber}`}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                {`${props.feEmailAddress}`}
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    </div>
                    <table style={{marginLeft: "29%", marginTop: "2.5px"}}>
                        <tbody>
                            <tr>
                                <td>
                                    {props.feFacebook?<span style={{marginRight: "2.5px"}}><a href={`${props.feFacebook}`} color="#000" style={{color: "#000", display: "inline-block", padding: "0px", backgroundColor: `rgba(${props.color.r},${props.color.g},${props.color.b},${props.color.a})`}}><img src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/facebook-icon.png" alt="facebook" style={{color: "#000", maxWidth: "135px", display: "block"}} /></a></span>:''}
                                    {props.feTwitter?<span style={{marginRight: "2.5px"}}><a href={`${props.feTwitter} `}color="#000" style={{color: "#000", display: "inline-block", padding: "0px", backgroundColor: `rgba(${props.color.r},${props.color.g},${props.color.b},${props.color.a})`}}><img src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/twitter-icon.png" alt="twitter" style={{color: "#000", maxWidth: "135px", display: "block"}} /></a></span>:''}
                                    {props.feLinkedIn?<span style={{marginRight: "2.5px"}}><a href={`${props.feLinkedIn}`} color="#000" style={{color: "#000", display: "inline-block", padding: "0px", backgroundColor: `rgba(${props.color.r},${props.color.g},${props.color.b},${props.color.a})`}}><img src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/linkedin-icon.png" alt="linkedin" style={{color: "#000", maxWidth: "135px", display: "block"}} /></a></span>:''}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </CardBody>
        </Card>
    );
}

export default Template3;