// import React, { useState, useEffect } from "react";
// import Table from "react-bootstrap/Table";
// import { Link } from "react-router-dom";
// const newArr = []
// function Viewemp() {
//   const token = localStorage.getItem("data");
//   console.log(token);
//   const data = newArr.push(token)
//   console.log("data", data);
//   console.log("array",newArr)
  

//   return (
//     <>
//       <Link
//         to="/addemp"
//         style={{ textDecoration: "none", fontSize: "20px", color: "black" }}
//       >
//         Add Employee
//       </Link>
//       <Table striped bordered hover>
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>Name</th>
//             <th>Technical Skills</th>
//             <th>Experience</th>
//             <th>Communication</th>
//             <th>Technical Rating</th>
//             <th>Company</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td>1</td>
//             <td>John</td>
//             <td>Html</td>
//             <td>2 years</td>
//             <td>English</td>
//             <td>5 star</td>
//             <td>control f5</td>
//           </tr>
//         </tbody>
//       </Table>
//     </>
//   );
// }

// export default Viewemp;
import React, { useState, useEffect } from "react";
import { Table } from "antd";

const Viewemp = () => {
  const [emp, setEmp] = useState([]);
  useEffect(() => {
    const data = localStorage.getItem("users");
    setEmp(JSON.parse(data));
  }, [emp]);
  const dataSource = [];

  emp.length > 0 &&
    emp.map((item) =>
      dataSource.push({
        key: Math.random() * 100,
        name:item.name,
        techskills: item.techskills,
        experience: item.experience,
        communication :item.communication,
        company :item.company

      })
    );

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Techskills",
      dataIndex: "techskills",
      key: "techskills",
    },
    {
      title: "Experience",
      dataIndex: "experience",
      key: "experience",
    },
    {
      title: "Communication",
      dataIndex: "communication",
      key: "communication",
    },
    {
      title: "Company",
      dataIndex: "company",
      key: "company",
    },
  
  ];
  return <Table dataSource={dataSource} columns={columns} />;
};

export default Viewemp;
