import React from 'react';

// classes
import classes from './DialogSelect.module.scss';

// material
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';


const DialogSelect = (props) => {
    const {onStartGame} = props;

    const [open, setOpen] = React.useState(false);
    const [err, setErr] = React.useState(false);
    const [num, setNum] = React.useState(2);
    const [name, setName] = React.useState('');

    const handleChangeNum = (event) => setNum(Number(event.target.value));
    const handleClickOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleChangeName = (event) => {
        const {target: {value}} = event;
        setName(value);
        setErr(value.trim() === '')
    }

    const handleOnStartGame = () => {
        setErr(name.trim() === '');
        if (!err && !(name.trim() === '')) {
            onStartGame(num, name);
            handleClose();
        }
    }

    return (
        <div>
            <Button variant="contained" color="primary" onClick={handleClickOpen}>Start Game</Button>

            <Dialog disableBackdropClick disableEscapeKeyDown open={open} onClose={handleClose}>
                <DialogTitle>Game Settings</DialogTitle>

                <DialogContent>
                    <form className={classes.container}>
                        <div className={classes.margin}>
                            <FormControl className={classes.container__formControl}>
                                <TextField
                                    error={err}
                                    id="standard-error-helper-text"
                                    label="Your Name *"
                                    value={name}
                                    helperText={err ? 'Name is Required' : null}
                                    onChange={handleChangeName}
                                />
                            </FormControl>
                        </div>

                        <div className={classes.margin}>
                            <FormControl className={classes.container__formControl}>
                                <InputLabel id="demo-dialog-select-label">Number of players</InputLabel>
                                <Select
                                    labelId="demo-dialog-select-label"
                                    id="demo-dialog-select"
                                    value={num}
                                    onChange={handleChangeNum}
                                    input={<Input />}
                                >
                                    <MenuItem value={2}>2</MenuItem>
                                    <MenuItem value={3}>3</MenuItem>
                                    <MenuItem value={4}>4</MenuItem>
                                    <MenuItem value={5}>5</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                    </form>
                </DialogContent>

                <DialogActions>
                    <Button onClick={handleClose} color="primary">Cancel</Button>
                    <Button onClick={handleOnStartGame} color="primary">Confirm</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}


export { DialogSelect }