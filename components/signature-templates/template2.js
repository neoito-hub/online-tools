import React from "react";
import {
    Card,
    CardBody
  } from "shards-react";
import '../../static/fontawesome/js/all';


function Template2({ props }){
    return(
        <Card>
            <CardBody>
                <div id="template2">
                    <div>
                        <img
                            src={props.proPic}
                            width="70"
                            style={{borderRadius: "50%"}}
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
                    <table style={{marginTop: "2.5px", marginLeft: "-5px"}}>
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

export default Template2;