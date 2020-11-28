import React from "react";
import withValidation from "./Validator";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock, faEnvelope } from '@fortawesome/free-solid-svg-icons'

const HelpIcon = (props) => {
    let faIcon = null

    switch (props.icon) {
        case 'email': faIcon = faEnvelope; break
        case 'password': faIcon = faLock; break
    }
    return faIcon && <span className="icon is-left">
        <FontAwesomeIcon icon={faIcon} />
    </span>
}

const HelpError = (props) => {
    return !props.valid && <p className="help is-danger">
        {props.message}
    </p>
}

const InputBox = (props) => {


    return <div className="field">
            <label className="label" htmlFor={props.id}>{props.title}</label>
            <div className="control has-icons-left">
                <input type={props.type}
                   id={props.id}
                   name={props.name}
                   className={`input ${props.valid ? '' : 'is-danger'}`}
                   defaultValue={props.value}
                   required={props.required}
                   data-valid={props.valid}
                   onChange={ ev => props.onChange(ev.target)}/>

                <HelpIcon icon={props.icon || props.type }/>
            </div>

        <HelpError message={props.message} valid={props.valid}/>

    </div>
}

export default withValidation(InputBox);
