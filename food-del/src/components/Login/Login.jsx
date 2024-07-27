import { useState, useContext} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

import { CartContext } from '../../Context/CartContex';

import './Login.css'

function Login(props) {
    const [type,setType] = useState("Sign Up")
    // const [error, setError] = useState("")
    const {errorMsg, setErrorMsg} = useContext(CartContext);

    const [formData, setFormData] = useState({
      username : "",
      email : "",
      password : "",
    })

    function dataHandler(e) {
      // const {name, value } = e.target;
      setFormData(prevState => {
        return {
          ...prevState,
          [e.target.name] : e.target.value
        }
      })
    }

    async function fetchData(e) {
        e.preventDefault()
        // setFormData({
        //   username : "",
        //   email : "",
        //   password : "",
        // })
        

        try{
          const result = await fetch("http://localhost:8000/api/authenticate/", {
            method: 'POST',
            headers : {
              'Content-Type' : 'application/json',
            },
            body : JSON.stringify(formData)
          })
          
          if (result.ok) {
            const data = await result.json();
            console.log('Success:', data);

            if (data.detail === 'User successfully created!' || data.detail === 'User Logged In') {
              setErrorMsg(prevState =>  {
                return {
                  ...prevState , 
                  detail : data.detail,
                  status : "success",
                  login : true
                }
              })
              props.setModalShow(false);
            }} 
            else {
              const errorData = await result.json();
              if(errorData.detail) {
              setErrorMsg(prevState => {
                return {
                  detail : errorData.detail,
                  status: "error",
                  login : false
                }
              })
              props.setModalShow(true);
              }
              console.error('Error:', errorData.detail || 'Unknown error');
            }
    } catch (error) {
        console.error('Fetch error:', error);
    }
  }

  const statusColor = errorMsg.status === "success" ? "text-success" : "text-danger";

  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered 
      className='login-modal'
    >
      <Modal.Header closeButton>
        <Modal.Title className='ms-auto' id="contained-modal-title-vcenter">
          {type}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form className='login-form d-flex flex-column'>
            {type === "Login" ? <></> :
                <Form.Group className="mb-3" controlId="formBasicUsername">
                    <Form.Label>Username:</Form.Label>
                    <Form.Control type="text" name="username" onChange={dataHandler} value={formData.username} placeholder="Enter your username" />
                </Form.Group>
            }
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address:</Form.Label>
                <Form.Control type="email" name="email" onChange={dataHandler} value={formData.email} placeholder="Enter email" />
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password:</Form.Label>
                <Form.Control type="password" name="password" onChange={dataHandler} value={formData.password} placeholder="Password" />
            </Form.Group>
            {type === "Login" ? 
                <p>Create a new account? <span onClick={() => setType("Sign Up")}>Click Here</span></p> :
                <p>Already have an account? <span onClick={() => setType("Login")}>Login Here</span></p> 
            }
            <p className={`text-center ${statusColor}`} >{errorMsg.detail}</p>
            <Button className='login-btn py-2' onClick={fetchData} type="submit">
                {type === "Login" ? "Login" : "Create an Account" }
            </Button>

        </Form> 
      </Modal.Body>
    </Modal>
  );
}

export default Login;