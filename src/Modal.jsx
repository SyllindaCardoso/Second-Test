import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
// import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import './App.css';


export default function FormDialog(props) {

    // distructure isAddButton = making a shortcut for keys in an object
    // so you don't have to type props.isAddButton

    const { id, title, state, url, created, updated } = props.formData;


    const[titleValue, setTitleValue] = React.useState(title); 
    const[stateValue, setStateValue] = React.useState(state);
    const[urlValue, setUrlValue] = React.useState(url);
    const[createdValue, setCreatedValue] = React.useState(created);
    const[updatedValue, setUpdatedValue] = React.useState(updated);

    const save = () => {}
    // 1. validation 
    console.log({
        title: titleValue,
        state: stateValue,
        url: urlValue
    })
    // 2. save data to redux

  return (
    <div>
      <Dialog open={true} onClose={props.handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Issue id: </DialogTitle>
        <DialogContent className='Edit-text' >
        <TextField
        id="standard-id"
        label="id"
        className='id'
        // value=''
        // onChange={handleChange('name')}
        margin="normal"
        fullWidth
      /> <br></br>
      <TextField
        autoFocus
        required
        id="standard-required"
        label="Title"
        // defaultValue="title"
        // className={classes.textField}
        value={titleValue}
        onChange={(e) => setTitleValue(e.target.value)}
        margin="normal"
        fullWidth
      /> <br></br>
      <TextField
        required
        id="standard-required"
        label="State"
        // defaultValue="Hello World"
        // className={classes.textField}
        value={stateValue}
        onChange={(e) => setStateValue(e.target.value)}
        margin="normal"
        fullWidth
      /> <br></br>
      <TextField
        id="standard-uncontrolled"
        label="Url"
        // defaultValue="foo"
        // className={classes.textField}
        value={urlValue}
        onChange={(e) => setUrlValue(e.target.value)}
        margin="normal"
        fullWidth
      /> <br></br>
      <TextField
        id="standard-uncontrolled"
        label="Created at"
        // defaultValue="foo"
        // className={classes.textField}
        value={createdValue}
        onChange={(e) => setCreatedValue(e.target.value)}
        margin="normal"
        fullWidth
      /> <br></br>
      <TextField
        id="standard-uncontrolled"
        label="Updated at"
        // defaultValue="foo"
        // className={classes.textField}
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