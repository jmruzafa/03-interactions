import React, {useState} from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";

import classes from './AddUser.module.css';

const AddUser = (props) => {
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');

    const addUserHanlder = (event) => {
        //preventing default action of submitting the form
        event.preventDefault();

        //validations 1st iteration
        if(enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
            return;
        }
        //adding this "+" in JS we are sure it will be treated as a number
        if (+enteredAge < 1){
            return;
        }
        console.log(enteredUsername, enteredAge);
        setEnteredUsername('');
        setEnteredAge('');
    };

        
    const usernameChangeHandler = (event) =>{
        setEnteredUsername(event.target.value);
    };

    const ageChangeHandler = (event) =>{
        setEnteredAge(event.target.value);
    };

    return (
        <Card className={classes.input}>
        <form onSubmit={addUserHanlder}>
            <label htmlFor="username">Username</label>
            <input id="username" type="text" value={enteredUsername} onChange={usernameChangeHandler} />
            <label htmlFor="age">Age (Years)</label>
            <input id="age" type="number" value={enteredAge} onChange={ageChangeHandler} />
            <Button type="submit">Add User</Button>
        </form>
        </Card>
    )
}

export default AddUser;