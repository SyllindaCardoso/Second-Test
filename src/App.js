import React from 'react';
import './App.css';
import SimpleTable from './SimpleTable';
import Header from './Header'; 
import Modal from './Modal'; 
import { rows } from './formDataContents'; 
import { bindActionCreators } from 'redux'; 
import{ connect } from 'react-redux';
// redux step: get form datag 
import { getFormData, addFormData, deleteFormData } from './actions/formDataAction'; 




function App(props) {
  console.log('formData', props.formDataRows); 
  // [1,2] 1= statename, 2= setstate
  // useState (3) 3 means defaul value
  // this way of writing is called hooks 
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

    // this fires the function right away when component loads 
    React.useEffect(() => {
      if(props.formDataRows.length === 0) {
        props.getFormData();
      }
    })  


  return (
    <div className="App">
      
      <Header />
      <SimpleTable 
        // formData={this.props.formData}
        openModal={handleClickOpen} 
        setIsAddButton={setIsAddButton}
        setFormDataId={setFormDataId}
        rows={props.formDataRows} />

      {open &&(
        <Modal handleClose={handleClose} 
        addFormData={props.addFormData}
        deleteFormData={props.deleteFormData}
        formData={isAddButton ? emptyDefault : getDataFromId()} />
      )}
      
    </div>
  );
}

// gets stuff from the store and returns in the component as props
// formDataRows in the store
function mapStateToProps(store) {
  console.log('store', store);
  return {
    formDataRows: store.formData.rows
  }
}

// gets action from redux and returs in the components as props
function mapDispatchToProps(dispatch){
  return bindActionCreators ({
    getFormData,
    addFormData 
  }, dispatch)
}

export default connect(
  // 1. getting states
  mapStateToProps,
  // 2. getting actions
  mapDispatchToProps
) (App);
