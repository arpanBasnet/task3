import React, { useState } from 'react'
import './style.css'
import axios from 'axios';
import TableComponent from './Fetch'






const Main = () => {

 



  // const fetchData = async () => {
  //   try {
  //     const response = await fetch('./db.json');
  //     const jsonData = await response.json();
  //     const tableData = jsonData.map(item => ({ name:item.name,title: item.title, amount: item.amount }));
  //     console.log(tableData)
  //     return tableData;

  //   } catch (error) {
  //     console.log('Error fetching data:', error);
  //     return [];
  //   }
  // };

  const [data, setData] = React.useState({
    name: ' ',
    gender: ' ',
    title: ' ',
    amount: ' ',

  });

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    });
  };

  // const [name, setName] = useState('');
  // const [title, setTitle] = useState('');
  // const [amount, setAmount] = useState('');
  const [nameError, setNameError] = useState('');
  const [titleError, setTitleError] = useState('');
  const [amountError, setAmountError] = useState('');

  const handleAdd = async (e) => {
    // Handle add logic here
    console.log('add button clicked');

    // Validate the name field
    if (data.name.trim() === '') {
      setNameError('* required');
    } 
    // Validate the title field
    else if (data.title.trim() === '') {
      setTitleError('* required');
    } 

    // Validate the amount field
    else if (data.amount.trim() === '') {
      setAmountError('* required');
    } 

    else {

      try {
        // Send a POST request to the local API
        await axios.post('http://localhost:3001/data', data);
        console.log('data transmit success'); // Response from the API
        alert('added successfully')


        // Clear the form data
        setData({
          name: '',
          gender: '',
          title: '',
          amount: ''
        });
      } catch (error) {
        console.error(error);
      }
    }
  }

    const handleUpdate = () => {
      // Handle update logic here
      console.log('Update button clicked');
    };

    const handleCancel = () => {
      // Handle cancel logic here
      console.log('Cancel button clicked');
    };
    const handleClear = () => {
      // Handle clear logic here
      console.log('clear button clicked');
    };

    const handleSubmit = async (e) => {
      e.preventDefault();



      const { name: buttonName } = e.nativeEvent.submitter;

      switch (buttonName) {
        case 'add':
          handleAdd();
          break;
        case 'update':
          handleUpdate();
          break;
        case 'clear':
          handleClear();
          break;
        case 'cancel':
          handleCancel();
          break;
        default:
          break;
      }
    }
  
  //const formData = [];     






  return (
    <>
      <form className='form' onSubmit={handleSubmit}>
        <table>
          <tr>
            <td>
              <label htmlFor="fullName">Full Name</label>
              {nameError && <span className="error">{nameError}</span>}</td>
            <td>
              <label htmlFor="gender">Gender:</label></td>
          </tr>
          <tr><td>
            <input placeholder='Enter full name'
              type="text"
              id="name"
              name="name"
              value={data.name} onChange={handleChange}
            ></input>
          </td>

            <td>

              <select id="gender" name="gender" value={data.gender} onChange={handleChange}>
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </td>
          </tr>
        </table>
        <div className='big-container'>
          <label htmlFor="title"
          >Title</label>
          {titleError && <span className="error">{titleError}</span>}<br />
          <input
            type="text"
            id="title"
            name="title"
            value={data.title} onChange={handleChange}
          ></input>



          <br />
          <label htmlFor="amount"  >Amount</label>
          {amountError && <span className="error">{amountError}</span>}
          <br></br>
          <input
            type="number"
            id="amount"
            name="amount"
            value={data.amount} onChange={handleChange}
          ></input><br /><br />
          <div className='big-container-button'>
            <button type="submit" name="add">Add</button>
            <button type="submit" name="clear">clear</button>
          </div>

        </div>
      </form>
      <div className='small-container'>
        <h2>Activity</h2><br />
        All the fields marked with an asterisk(*) are mandatory.
        <div className='small-container-button'>
          <button type="submit" name="cancel">cancel</button>
          <button type="submit" name="update">Update</button><br /><br />
        </div>



      </div>

      {/* {Object.keys(data).length > 0 && (
        <div>
          <h2>Submitted Form Data:</h2>
          <p>Name: {data.name}</p>
          <p>Gender: {data.gender}</p>
          <p>Title: {data.title}</p>
          <p>Amount: {data.amount}</p>
        </div>
      )} */}

      <div className='fetched-data-table'>
        <label htmlFor="search">Search</label>
        <input
          type="text"
          id="search"
        ></input><br />
        <TableComponent />
      </div>



    </>
  )
}

export default Main
