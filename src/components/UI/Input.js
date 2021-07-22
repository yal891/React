import React from 'react';
import classes from './Input.css';

const input = (props) =>{
    let inputElement;
    const inputClasses = [classes.InputElement];

    switch(props.elementType){
        case ('input'):
            inputElement = <div>
                <label>{props.elementConfig.type}</label>
                <input  className={inputClasses.join(' ')}
                        {...props.elementConfig}
                        value={props.value}
                        onChange={props.changed}/>
            </div>
            break;
        default:
            inputElement = <input
                className={inputClasses.join(' ')}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />;

    }

    return (
        <div className={classes.Input}>
            <label className={classes.label}>{props.label}</label>
            {inputElement}
        </div>
    );
}
export default input;