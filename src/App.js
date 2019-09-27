import React from 'react';
import './App.css';
import SimpleTable from './SimpleTable';
import Header from './Header'; 
import Modal from './Modal'; 
import { rows } from './formDataContents'; 
import { bindActionCreators } from 'redux'; 
import{ connect } from 'react-redux'; 



function App(props) {
  // [1,2] 1= statename, 2= setstate
  // useState (3) 3 means defaul value
  const [open, setOpen] = React.useState(false); 
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const emptyDefault = {
    id: '',
    title: "", 
    state: "", 
    url: '', 
    created: '', 
    updated: ''
  }

  // function
  const getDataFromId = () => {

    // find the index of the object containg the right id
    const index = rows.findIndex((row) => formDataId === row.id)

    console.log('index', index); 
    return rows[index]; 
  }

  // data type: boolean 
  const[isAddButton, setIsAddButton] = React.useState(false); 
  console.log('button',isAddButton);
  // data type: number
  const[formDataId, setFormDataId] = React.useState(null); 
  console.log('formDataId', formDataId); 

  return (
    <div className="App">
      
      <Header />
      <SimpleTable 
        // formData={this.props.formData}
        openModal={handleClickOpen} 
        setIsAddButton={setIsAddButton}
        setFormDataId={setFormDataId} />

      {open &&(
        <Modal handleClose={handleClose} 
          formData={isAddButton ? emptyDefault : getDataFromId()} />
      )}
      
    </div>
  );
}

// gets stuff from the store and returns in the component as props
function mapStateToProps(store) {
  return {
    formData: store.formData
  }
}

// returning as props
function mapDispatchToProps(){}

export default connect(
  // 1. getting states
  mapStateToProps,
  // 2. getting actions
  mapDispatchToProps
) (App);
