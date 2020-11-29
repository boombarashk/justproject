import React, {useState} from "react";
import AuthRegForm from './AuthReg.js'
import {MODE_FORM_AUTH, MODE_FORM_REG} from "./AuthReg";

export default function Auth () {
    const [stateShowRegForm, setStateShowRegForm] = useState(false)
    return <>
        <AuthRegForm mode={MODE_FORM_AUTH}/>

        <a onClick={ ()=>{setStateShowRegForm(true)} }>Регистрация</a>

        <div className={`modal ${stateShowRegForm ? 'is-active' : ''}`}>
            <div className="modal-background"></div>
            <div className="modal-content">
                <div className="box">
                    <AuthRegForm mode={MODE_FORM_REG}
                        handlerSubmit={()=>{setStateShowRegForm(false)}}/>
                </div>
            </div>
            <button className="modal-close is-large"onClick={() => {setStateShowRegForm(false)}}></button>
        </div>
    </>
}

