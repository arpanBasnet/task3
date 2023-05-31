import React, { useState, useEffect } from 'react';
import editButton from './editButton.png'
import deleteButton from './delete.jpg'
import './style.css'
// function MyComponent({formData}) {
//   const [formData, setFormData] = useState([]);

//   useEffect(() => {
//     // Fetch data or set the data manually
//     const fetchData = async () => {
//       // Example: Fetch data from an API
//       //const response = await fetch('https://example.com/api/data');
//       const response = await fetch('./db.json'); 
//       const jsonData = await response.json();
//       const tableData=jsonData.map(item => ({name:item.name, title: item.title, amount: item.amount }));
//       return tableData;
//       //setFormData(jsonData);
//     };

//     fetchData();
//   }, []);

function TableComponent() {
  const [tableData, setTableData] = useState([]);









  // const fetchData = async () => {
  //   try {
  //     const response = await fetch('./db.json');
  //     // const jsonData = await response.json();
  //     // const tableData = jsonData.map(item => ({ name:item.name,title: item.title, amount: item.amount }));
  //     // console.log(tableData)
  //    // return tableData;
  //     //console.log(response)
  //   } catch (error) {
  //     console.log('Error fetching data:', error);
  //     return [];
  //   }
  // };


  
  


  useEffect(() => {

    fetch('http://localhost:3001/data').then((data)=>{
     
      return data.json()
    }).then((data)=>{
      console.log(data)
      setTableData(data);
    })
    // const getData = async () => {
    //   const data1 = await fetchData();
    //   setTableData(data1);
    // };

    // getData();
   // fetchData();
  },[])

  const handleEdit= () => {
    // Handle cancel logic here
    console.log('edit button clicked');
  };
  const handleDelete= () => {
    // Handle clear logic here
    console.log('delete button clicked');
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    
    const { name : buttonName} = e.nativeEvent.submitter;

    switch (buttonName) {
        case 'edit':
          handleEdit();
          break;
        case 'delete':
          handleDelete();
          break;
        default:
          break;
      }
    }


  return (




    <table>
      <thead>
        <tr>
          <th>name</th>
          <th>title</th>
          <th>amount</th>
          <th>action</th>
          {/* Add more table headers as needed */}
        </tr>
      </thead>
      
      <tbody>
       tableData ={tableData.map((item, index) => (
          <tr key={index}>
            <td>{item.name}</td>
            <td>{item.title}</td>
            <td>{item.amount}</td> 
            <td>
            <div className='edit-delete-button'>
            <form className='buttons' onSubmit={handleSubmit}>
            <button  type="submit" name="edit">
        <img src={editButton} alt="img" style={{ width: '20px', height: 'auto' }}/>
      </button>
      <button type="submit" name="delete">
        <img src={deleteButton} alt="img"style={{ width: '20px', height: 'auto' }} />
      </button>
      </form>
      </div>
      
            </td>
            {/* Add more table cells as needed */}
          </tr>
          
        ))}
      </tbody>
     
    </table>
  );
}
export default TableComponent
