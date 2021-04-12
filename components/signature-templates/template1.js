import React from "react";
import {
  Card,
  CardBody
} from "shards-react";


function Template1({ props }) {
  const style = {
    table: {
      marginLeft: "8px",
      display: "inline",
      verticalAlign: '-webkit-baseline-middle',
      fontSize: 'medium',
      fontFamily: 'Arial',
      fontSize: "13px"
    },
  }
  return (
    <Card>
      <CardBody>
        <div id="template1">
          <table
            cellPadding="0"
            cellSpacing="0"
            style={style.table}>
            <tr>
              <td>
                <span style={{marginRight: "8px"}}>
                  <img
                    src={props.proPic}
                    width="70"
                    style={{ borderRadius: "50%" }}
                  />
                </span>
              </td>
              <td style={{
                borderLeft: "solid",
                borderColor: `rgba(${props.color.r}, ${props.color.g}, ${props.color.b}, ${props.color.a})`,
              }}>
                <table
                  cellPadding="0"
                  cellSpacing="0"
                  style={style.table}>
                  <tbody>
                    <tr>
                      <td style={{ paddingLeft: "5px" }}>
                        {`${props.feFirstName} ${props.feLastName}`}
                      </td>
                    </tr>
                    <tr>
                      <td style={{ paddingLeft: "5px" }}>
                        {`${props.feCompanyName}`}
                      </td>
                    </tr>
                    <tr>
                      <td style={{ paddingLeft: "5px" }}>
                        {`${props.fePosition}`}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
              <td>
                {props.feInputAddress && props.feMobileNumber && props.feEmailAddress ? <table
                  cellPadding="0"
                  cellSpacing="0"
                  style={style.table}>
                  <tbody
                    style={{
                      borderLeft: "solid",
                      borderColor: `rgba(${props.color.r}, ${props.color.g}, ${props.color.b}, ${props.color.a})`,
                    }}
                  >
                    <tr>
                      <td style={{ paddingLeft: "10px" }}>
                        <table style={{ height: "1px" }}>
                          <tr>
                            <td>
                              📍 {`${props.feInputAddress.substring(0, 25)}`}
                            </td>
                          </tr>
                          {props.feInputAddress2? <tr>
                            <td style={{ paddingLeft: "20px" }}>
                              {`${props.feInputAddress2.substring(0, 25)}`}
                            </td>
                          </tr>: ''}
                          {props.feInputAddress3 ? <tr>
                            <td style={{ paddingLeft: "20px" }}>
                              {`${props.feInputAddress3.substring(0, 25)}`}
                            </td>
                          </tr> : ''}
                        </table>
                      </td>
                    </tr>
                    <tr>
                      <td style={{ paddingLeft: "10px" }}>
                        📞 {`${props.feMobileNumber}`}
                      </td>
                    </tr>
                    <tr>
                      <td style={{ paddingLeft: "10px" }}>
                        📧 {`${props.feEmailAddress}`}
                      </td>
                    </tr>
                  </tbody>
                </table> : ''}
              </td>
            </tr>
          </table>
          <br />
          <div style={{ marginTop: "3.5px" }}>
            {props.feFacebook ? <span style={{ marginRight: "2.5px" }}><a href={`${props.feFacebook}`} color="#000" style={{ color: "#000", display: "inline-block", padding: "0px", backgroundColor: `rgba(${props.color.r},${props.color.g},${props.color.b},${props.color.a})` }}><img src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/facebook-icon.png" alt="facebook" style={{ color: "#000", maxWidth: "135px", display: "block" }} /></a></span> : ''}
            {props.feLinkedIn ? <span style={{ marginRight: "2.5px" }}><a href={`${props.feLinkedIn}`} color="#000" style={{ color: "#000", display: "inline-block", padding: "0px", backgroundColor: `rgba(${props.color.r},${props.color.g},${props.color.b},${props.color.a})` }}><img src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/linkedin-icon.png" alt="linkedin" style={{ color: "#000", maxWidth: "135px", display: "block" }} /></a></span> : ''}
            {props.feTwitter ? <span style={{ marginRight: "2.5px" }}><a href={`${props.feTwitter} `} color="#000" style={{ color: "#000", display: "inline-block", padding: "0px", backgroundColor: `rgba(${props.color.r},${props.color.g},${props.color.b},${props.color.a})` }}><img src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/twitter-icon.png" alt="twitter" style={{ color: "#000", maxWidth: "135px", display: "block" }} /></a></span> : ''}
          </div>
        </div>
      </CardBody>
    </Card>
  );
}

export default Template1;