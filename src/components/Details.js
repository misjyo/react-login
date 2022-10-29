import React, { useEffect, useState } from 'react'
// import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { useNavigate,Link } from 'react-router-dom'
// import Addemp from './emp/Addemp'

const Details = () => {

    const [logindata, setLoginData] = useState([]);


    const history = useNavigate();

    // const [ setShow] = useState(false);

    // var todayDate = new Date().toISOString().slice(0, 10);
  

    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);

    const Birthday = () => {
        const getuser = localStorage.getItem("user_login");
        if (getuser && getuser.length) {
            const user = JSON.parse(getuser);
         
            setLoginData(user);


            // const userbirth = logindata.map((el, k) => {
            //     return el.date === todayDate
            // });

            // if (userbirth) {
            //     setTimeout(() => {
            //         console.log("ok");
            //         handleShow();
            //     }, 3000)
            // }
        }
    }

    const userlogout = ()=>{
        localStorage.removeItem("user_login")
        history("/");
    }

    useEffect(() => {
        Birthday();
    },// eslint-disable-next-line
     [])

    return (
        <>
            {
                logindata.length === 0 ? "errror" :
                    <>
                        <h3 style={{marginTop:"20px"}}>Welcome {logindata[0].name}</h3>
                        {/* <h1>{logindata[0].name}</h1> */}
                        <Button onClick={userlogout} style={{marginTop:"20px"}}>LogOut</Button>

                        <div style={{ marginTop:"20px", }}>
                       <Link to ="/addemp" style={{ textDecoration:"none" , fontSize:"20px",color:"black"}}>Add Employee</Link>
                       <Link to ="/viewemp" style={{marginLeft:"20px", marginTop:"20px",textDecoration:"none",fontSize:"20px", color:"black"}}>View Employee</Link>

                        </div>

                {/* {
                    logindata[0].date === todayDate ? 
                    <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>{logindata[0].name} 😄</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>Wish you many many happy returns of the day ! 🍰</Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose}>
                                    Close
                                </Button>
                                <Button variant="primary" onClick={handleClose}>
                                    Save Changes
                                </Button>
                            </Modal.Footer>
                        </Modal>:""
                }    */}
                     
                    </>
            }
        </>
    )
}

export default Details






















