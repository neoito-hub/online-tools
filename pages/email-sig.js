import Layout from "../components/layout/MainLayout";
import PageTitle from "../components/common/PageTitle";
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
  Button
} from "shards-react";
import { useState, useEffect } from "react";
import Template1 from "../components/signature-templates/template1";
import Template2 from "../components/signature-templates/template2";
import reactCSS from 'reactcss';
import { SketchPicker } from 'react-color';
import Template3 from "../components/signature-templates/template3";

export default function CompleteFormExample (){
  const [formData, setFormData] = useState(
    {
        feFirstName: 'Jack',
        feLastName: 'Scott',
        fePosition: 'Jnr. SWE',
        feCompanyName: 'My Company',
        feInputAddress: '7588 W Gray St',
        feFacebook: '',
        feTwitter: '',
        feLinkedIn: '',
        feEmailAddress: 'jack.scott@example.com',
        feMobileNumber: 'xxxxxxxxxx',
        proPic: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
        color: {
            r: 0,
            g: 0,
            b: 0,
            a: 1
        },
    }
  );
  const [colorPicker, setColorPicker] = useState(false);
  const print = ({ target }) => {
    setFormData(prevState => ({
        ...prevState,
        [target.id]: target.value
    }))
  }
  const imagehandler = (e) =>{
    const reader = new FileReader();
    console.log(reader);
    reader.onload = () => {
        if(reader.readyState === 2){
            setFormData(prevState => ({
                ...prevState,
                "proPic": reader.result
            }))
        }
    } 
    reader.read
    reader.readAsDataURL(e.target.files[0]);
    console.log(formData);
}
const handleClick = () => {
    setColorPicker(prevState => (!prevState));
    console.log(colorPicker);
}
const handleClose = () => {
    setColorPicker(prevState => (!prevState));
}
const handleChange = (color) => {
    setFormData(prevState => ({
        ...prevState,
        color: color.rgb
    }))
}
const styles = reactCSS({
      'default': {
        color: {
          width: '36px',
          height: '14px',
          borderRadius: '2px',
          background: `rgba(${ formData.color.r }, ${ formData.color.g }, ${ formData.color.b }, ${ formData.color.a })`,
        },
        swatch: {
          padding: '5px',
          background: '#fff',
          borderRadius: '1px',
          boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
          display: 'inline-block',
          cursor: 'pointer',
        },
        popover: {
          position: 'absolute',
          zIndex: '2',
        },
        cover: {
          position: 'fixed',
          top: '0px',
          right: '0px',
          bottom: '0px',
          left: '0px',
        },
      },
    });
  return(
      <Layout>
          <Container fluid className="main-content-container px-4">
          <Row noGutters className="page-header py-4">
            <PageTitle
              title="Email Signature Generator"
              subtitle="Generate Email Signature for Your Profession Email's."
              md="12"
              className="ml-sm-auto mr-sm-auto"
            />
          </Row>
            <Row className="py-4">
                <Col md="6">
                <ListGroup flush>
            <ListGroupItem className="p-3">
                <Row>
                    <Col>
                        <Form onSubmit= {ev => print(ev)}>
                            <Row form>
                                <Col md="6" className="form-group">
                                    <label htmlFor="feFirstName">First Name</label>
                                    <FormInput
                                    id="feFirstName"
                                    type="text"
                                    placeholder="First Name"
                                    onChange={data => print(data)}
                                    />
                                </Col>
                            <Col md="6">
                                <label htmlFor="feLastName">Last Name</label>
                                <FormInput
                                id="feLastName"
                                type="text"
                                placeholder="Last Name"
                                onChange={data => print(data)}
                                />
                            </Col>
                            </Row>
                            <Row form>
                            <Col md="6" className="form-group">
                                <label htmlFor="fePosition">Position</label>
                                <FormInput
                                id="fePosition"
                                type="text"
                                placeholder="Jnr. SWE"
                                onChange={data => print(data)}
                                />
                            </Col>
                            <Col md="6">
                                <label htmlFor="feCompanyName">Company Name</label>
                                <FormInput
                                id="feCompanyName"
                                type="text"
                                placeholder="Neoito"
                                onChange={data => print(data)}
                                />
                            </Col>
                            </Row>
                            <FormGroup>
                            <label htmlFor="feInputAddress">Address</label>
                            <FormInput id="feInputAddress" placeholder="1234 Main St" 
                            onChange={data => print(data)}/>
                            </FormGroup>
                            <FormGroup>
                            <label htmlFor="feFacebook">Facebook Link</label>
                            <FormInput
                                id="feFacebook"
                                placeholder="https://www.facebook.com/XXXXXXXXX"
                                onChange={data => print(data)}
                            />
                            </FormGroup>
                            <FormGroup>
                            <label htmlFor="feTwitter">Twitter Link</label>
                            <FormInput
                                id="feTwitter"
                                placeholder="https://twitter.com//XXXXXXXXX"
                                onChange={data => print(data)}
                            />
                            </FormGroup>
                            <FormGroup>
                            <label htmlFor="feLinkedIn">LinkedIn Link</label>
                            <FormInput
                                id="feLinkedIn"
                                placeholder="https://in.linkedin.com/in/XXXXXXXXX"
                                onChange={data => print(data)}
                            />
                            </FormGroup>
                            <Row form>
                            <Col md="6" className="form-group">
                                <label htmlFor="feEmailAddress">Email</label>
                                <FormInput
                                id="feEmailAddress"
                                type="email"
                                placeholder="Email"
                                onChange={data => print(data)}
                                />
                            </Col>
                            <Col md="6" className="form-group">
                                <label htmlFor="feMobileNumber">Number</label>
                                <FormInput 
                                id="feMobileNumber" 
                                placeholder="1122334455"
                                onChange={data => print(data)}/>
                            </Col>
                            <Row>
                                <Col md="10">
                                    <div className="custom-file mb-3">
                                        <input type="file" className="custom-file-input" id="proPic" name="propic" accept="image/*" onChange={e => imagehandler(e)}/>
                                            <label className="custom-file-label" htmlFor="proPic">
                                                Upload Photo...
                                            </label>
                                    </div>
                                </Col>
                                <Col>
                                    <div style={ styles.swatch } onClick={ handleClick }>
                                        <div style={ styles.color } />
                                    </div>
                                    { colorPicker ? <div style={ styles.popover }>
                                        <div style={ styles.cover } onClick={ handleClose }/>
                                        <SketchPicker color={ formData.color } onChange={ handleChange } />
                                        </div> : null }
                                </Col>
                            </Row>
                            </Row>
                        </Form>
                    </Col>
                </Row>
            </ListGroupItem>
        </ListGroup>
                </Col>
                <Col>
                    <Row className="mb-4">
                        <Template1 props={formData}/>
                    </Row>
                    <Row className="mb-4">
                        <Col>
                            <Template2 props={formData}/>
                        </Col>
                    </Row>
                    <Row className="mb-4">
                        <Template3 props={formData}/>
                    </Row>
                </Col>
            </Row>
          </Container>
      </Layout>
  );
}