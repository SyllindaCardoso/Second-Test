import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import './App.css';
import uuidv1 from 'uuid/v1'; 


export default function FormDialog(props) {

    // destructure isAddButton = making a shortcut for keys in an object
    // so you don't have to type props.isAddButton

    const { id, title, state, url, created, updated } = props.formData;

    const[titleValue, setTitleValue] = React.useState(title); 
    const[stateValue, setStateValue] = React.useState(state);
    const[urlValue, setUrlValue] = React.useState(url);
    const[createdValue, setCreatedValue] = React.useState(created);
    const[updatedValue, setUpdatedValue] = React.useState(updated);

    const save = () => {
      // 2. save data to redux
      // if conditional can be written in an easer way 
      if (props.isAddButton) {
        props.addFormData({
          id: id ? id : uuidv1(), // id: id === null ? 'uuid()' : id; 
          title: titleValue,
          state: stateValue, 
          url: urlValue, 
          created: createdValue,
          updated: updatedValue
      });
      } else {
        props.editFormData({
          id: id, 
          title: titleValue,
          state: stateValue, 
          url: urlValue, 
          created: createdValue,
          updated: updatedValue
      });
      }
      props.handleClose();
    }
    // 1. validation 
    console.log({
        title: titleValue,
        state: stateValue,
        url: urlValue,
        created: createdValue,
        updated: updatedValue
    })
    
  return (
    <div>
      <Dialog open={true} onClose={props.handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Issue id: </DialogTitle>
        <DialogContent className='Edit-text' >
        <TextField
        id="standard-id"
        label="id"
        className='id'
        margin="normal"
        fullWidth
      /> <br></br>
      <TextField
        autoFocus
        required
        id="standard-required"
        label="Title"
        value={titleValue}
        onChange={(e) => setTitleValue(e.target.value)}
        margin="normal"
        fullWidth
      /> <br></br>
      <TextField
        required
        id="standard-required"
        label="State"
        value={stateValue}
        onChange={(e) => setStateValue(e.target.value)}
        margin="normal"
        fullWidth
      /> <br></br>
      <TextField
        id="standard-uncontrolled"
        label="Url"
        value={urlValue}
        onChange={(e) => setUrlValue(e.target.value)}
        margin="normal"
        fullWidth
      /> <br></br>
      <TextField
        id="standard-uncontrolled"
        label="Created at"
        value={createdValue}
        onChange={(e) => setCreatedValue(e.target.value)}
        margin="normal"
        fullWidth
      /> <br></br>
      <TextField
        id="standard-uncontrolled"
        label="Updated at"
        value={updatedValue}
        onChange={(e) => setUpdatedValue(e.target.value)}
        margin="normal"
        fullWidth
      />
        </DialogContent>
        <DialogActions>
          <Button onClick={save} color="primary">
            Save 
          </Button>
          <Button onClick={props.handleClose} color="primary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}