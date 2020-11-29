import React, {useState, useRef} from "react";
import CryptoJS from 'crypto-js'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import InputBox from "./InputBox";
import {LOGIN} from "../store";
import {PREFIX} from "./Root";

const fields = {
    email: {
        type: "email",
        title: "Email",
        validationRules: { required: false, regexp: 'email'},
        errMessages: {regexp: "Ошибка: Неверный E-Mail"},
        valid: true,
    },
    pwd:  {
        type: "password",
        title: "Password",
        minlength: 6,
        validationRules: { required: false, minlength: 6,},
        errMessages: {minlength: "Ошибка: В пароле должно быть не менее 6 символов"},
        valid: true,
    },
    repeatpwd:  {
        type: "password",
        title: "Password",
        minlength: 6,
        validationRules: { required: false, minlength: 6, equalfield: 'pwd'},
        errMessages: {
            minlength: "Ошибка: В пароле должно быть не менее 6 символов",
            equalfield: "Пароли должны совпадать"
        },
        valid: true,
    },
}

export const MODE_FORM_AUTH = 'auth'
export const MODE_FORM_REG = 'reg'
const handlerSubmit = (ev, form, changeNeedSubmitErrorView, restProps) => {
    const {mode} = restProps || MODE_FORM_REG
    ev.preventDefault()
    if (mode === MODE_FORM_AUTH) {
        if (checkUnoUser({
            user: form.email.value,
            password: form.pwd.value
        })) {
            restProps.login({email: form.email.value})
            restProps.history.push(PREFIX + '/profile')
        } else {
            changeNeedSubmitErrorView(true)
        }
    }
}

const checkUnoUser = ({user, password}) => {
    return CryptoJS.MD5(user).toString() === '9591e7a4fc90a027f7b7594b38a29a41' &&
        CryptoJS.MD5(password).toString() === 'd9d1b168eac8f197e0576b56cfc23ece'
}

function AuthRegForm(props) {
    const [stateValidForm, changeValidForm] = useState(true)
    const [needSubmitErrorView, changeNeedSubmitErrorView] = useState(false)
    const currentRef = useRef()

    const entriesFields = Array.from(Object.entries(fields))
    if (props.mode === MODE_FORM_AUTH) { /*if name =='repeatpwd'*/ entriesFields.pop() }

    const inputBoxes = entriesFields.map( ([name,item]) => {
        return <InputBox { ...item }
                         key={ `fieldBox-${name}` }
                         name={ name }
                         currentForm={ currentRef.current }
                         checkFields={ entriesFields.filter( ([name, item]) => 'validationRules' in item).map( args => args[0]) }
                         stateValidForm ={ stateValidForm }
                         changeValidForm={ changeValidForm }
                         handlerChange = {() => { changeNeedSubmitErrorView(false) }} />
    })

    return <form ref={currentRef}>
        <div className="subtitle">Форма {props.mode === MODE_FORM_AUTH ? 'авторизации' : 'регистрации'}</div>

        { inputBoxes }

        <div className="block text-right">
            <button className="button is-link" onClick={ (ev) => {
                ev.preventDefault()
                if (stateValidForm) {
                    handlerSubmit(ev, currentRef.current, changeNeedSubmitErrorView, {...props})
                }

                if (props.handlerSubmit) {
                    props.handlerSubmit()
                }
            }}>{props.mode === MODE_FORM_REG ? 'Ok' : 'Войти'}</button>
        </div>

        <div className={`help is-danger ${needSubmitErrorView && props.mode === MODE_FORM_AUTH ? '': 'is-hidden'}`}>
            Имя пользователя или пароль введены не верно
        </div>
    </form>
}

const login = (user) => ({ type: LOGIN, payload: user })
const mapDispatchToProps = dispatch => {
    return {
        login: user => dispatch(login({user}))
    }
}

const ConnectedForm = connect(null, mapDispatchToProps)(AuthRegForm)

export default withRouter(ConnectedForm)
