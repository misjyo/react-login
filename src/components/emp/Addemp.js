// import React, { useState, useEffect } from "react";
// import { Button, Form } from "react-bootstrap";
// import { Link, useNavigate } from "react-router-dom";
// import Table from "react-bootstrap/Table";

// // const getData =() =>{
// //   const data = localStorage.getItem("emp");
// //   if(data){
// //     return JSON.parse(data);
// //   }
// //   else {
// //     return []
// //   }
// // }

// export default function Addemp() {
//   // const [emp, setEmp] = useState(getData());
//   const [emp, setEmp] = useState();
//   const [data, setData] = useState({
//     name: "",
//     techskills: "",
//     experience: "",
//     communication: "",
//     company: "",
//   });

//   // const jyoti = [];
//   // Viewemp(jyoti)
//   const history = useNavigate();
//   const setValues = (e) => {
//     const { name, value } = e.target;

//     setData(() => {
//       // console.log(data)

//       return {
//         ...data,
//         [name]: value,
//       };
//     });
//   };

//   const submitData = (e) => {
//     e.preventDefault();
//     const { name, techskills, experience, communication, company } = data;
//     const emp = JSON.stringify({
//       name,
//       techskills,
//       experience,
//       communication,
//       company,
//     });
//     // jyoti.push(body);
//     // localStorage.setItem("data", jyoti);
//     // setEmp(jyoti);
//     setEmp([...emp,emp]);

//     // console.log("first", jyoti);
//     // history("/viewemp");

//     //  console.log("Data",setData())
//   };

//   useEffect(()=>{
//     localStorage.setItem('emp',emp);
//   },[emp])

//   return (
//     <div>
//       <div>
//         <Form className="m-5">
//           <Form.Group className="mb-2" controlId="formBasicEmail">
//             <Form.Label>Name</Form.Label>
//             <Form.Control
//               type="text"
//               placeholder="Enter email"
//               name="name"
//               value={data.name}
//               onChange={setValues}
//             />
//           </Form.Group>

//           <Form.Group className="mb-3" controlId="formBasicPassword">
//             <Form.Label>Technical Skills</Form.Label>
//             <Form.Control
//               type="text"
//               placeholder=""
//               name="techskills"
//               value={data.techskills}
//               onChange={setValues}
//             />
//           </Form.Group>
//           <Form.Group className="mb-3" controlId="formBasicPassword">
//             <Form.Label>Experience</Form.Label>
//             <Form.Control
//               type="text"
//               placeholder=""
//               name="experience"
//               value={data.experience}
//               onChange={setValues}
//             />
//           </Form.Group>
//           <Form.Group className="mb-3" controlId="formBasicPassword">
//             <Form.Label>Communication</Form.Label>
//             <Form.Control
//               type="text"
//               placeholder=""
//               name="communication"
//               value={data.communication}
//               onChange={setValues}
//             />
//           </Form.Group>

//           <Form.Group className="mb-3" controlId="formBasicPassword">
//             <Form.Label>Company</Form.Label>
//             <Form.Control
//               type="text"
//               placeholder=""
//               name="company"
//               value={data.company}
//               onChange={setValues}
//             />
//           </Form.Group>

//           <Button variant="btn btn-light" type="submit" onClick={submitData}>
//             Submit
//           </Button>
//           <Button
//             variant="btn btn-light"
//             type="submit"
//             style={{ marginLeft: "20px" }}
//           >
//             <Link to="/details"> Go back</Link>
//           </Button>
//         </Form>
//       </div>
//       <div>
//         <Table striped bordered hover>
//           <thead>
//             <tr>
//               <th>ID</th>
//               <th>Name</th>
//               <th>Technical Skills</th>
//               <th>Experience</th>
//               <th>Communication</th>
//               <th>Technical Rating</th>
//               <th>Company</th>
//             </tr>
//           </thead>
//           <tbody>
//             {emp.map((item) => {
//               console.log("value", data);
//               return (
//                 <tr>
//                   <td>{item.name}</td>
//                   <td>{item.techskills}</td>
//                   <td>{item.experience}</td>
//                   <td>{item.communication}</td>
//                   <td>{item.company}</td>
//                 </tr>
//               );
//             })}
//           </tbody>
//         </Table>
//       </div>
//     </div>
//   );
// }

import React from "react";
import { Button, Form, Input } from "antd";
import { Link } from "react-router-dom";

const Addemp = () => {
  const onFinish = (values) => {
    const prevUsers = JSON.parse(localStorage.getItem("users"));
    if (prevUsers) {
      localStorage.setItem("users", JSON.stringify([...prevUsers, values]));
    } else {
      localStorage.setItem("users", JSON.stringify([values]));
    }
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <>
      <h1 style={{textAlign:"center"}}>Employee Registration </h1>
      <Link to ="/viewemp" style={{marginLeft:"20px", marginTop:"20px",textDecoration:"none",fontSize:"20px", color:"black"}}>View Employee</Link>
  
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Name"
          name="name"
          rules={[
            {
              required: true,
              message: "Please input your Name!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Techskills"
          name="techskills"
          rules={[
            {
              required: true,
              message: "Please input your Techskills!",
            },
          ]}
        >
          <Input type="text" />
        </Form.Item>
        <Form.Item
          label="Experience"
          name="experience"
          rules={[
            {
              required: true,
              message: "Please input your Experience!",
            },
          ]}
        >
          <Input type="text" />
        </Form.Item>
        <Form.Item
          label="Communication"
          name="communication"
          rules={[
            {
              required: true,
              message: "Please input your Communication!",
            },
          ]}
        >
          <Input type="text" />
        </Form.Item>
        <Form.Item
          label="Company"
          name="company"
          rules={[
            {
              required: true,
              message: "Please input your Company!",
            },
          ]}
        >
          <Input type="text" />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default Addemp;
