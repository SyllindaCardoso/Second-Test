import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import AddIcon from '@material-ui/icons/Add';
import CreateIcon from '@material-ui/icons/Create';
import DeleteIcon from '@material-ui/icons/Delete';

// rows is not a default export so when you import it 
// it has to come between curly braces
// import { rows } from './formDataContents';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing(3),
        overflowX: 'auto',
        },
    table: {
        minWidth: 650,
        },
}));

// props and states are objects 
// you can pass an object props or you can destructure and pass each element
// if you pass it as props you need to use 'props.rows' and if you 
// destructure it you write less code 'rows' 
function SimpleTable({ openModal, setIsAddButton, setFormDataId, rows, deleteFormData }) {
    const classes = useStyles();

    return (
    <Paper className={classes.root}>
    <Table className={classes.table}>
        <TableHead>
            <TableRow>
                <TableCell>Id</TableCell>
                <TableCell align="right">Title</TableCell>
                <TableCell align="right">State</TableCell>
                <TableCell align="right">Url</TableCell>
                <TableCell align="right">Created at</TableCell>
                <TableCell align="right">Updated at</TableCell>
                <TableCell align="right"><AddIcon color='primary' onClick={() => {
                    openModal();
                    setIsAddButton(true); }} /></TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            {rows.map(row => (
            <TableRow key={row.id}>
                <TableCell component="th" scope="row">{row.id}</TableCell>
                <TableCell align="right">{row.title}</TableCell>
                <TableCell align="right">{row.state}</TableCell>
                <TableCell align="right">{row.url}</TableCell>
                <TableCell align="right">{row.create}</TableCell>
                <TableCell align="right">{row.update}</TableCell>
                <TableCell align="right">
                    {/* this is the edit button */}
                    <CreateIcon color="secondary" onClick={() => {
                        openModal();
                        setIsAddButton(false);
                        setFormDataId(row.id); 
                        }} />
                    <DeleteIcon color="secondary" onClick={() => {
                        deleteFormData(row.id); 
                    }} />
                    </TableCell>
            </TableRow>
            ))}
        </TableBody>
    </Table>
    </Paper>
    );
}

export default SimpleTable; 