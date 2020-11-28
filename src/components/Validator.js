import React from "react";

export default function withValidation(WrappedComponent) {

    return class extends React.Component {
        constructor(props) {
            super(props);
            this.handlerChangeInput = this.handlerChangeInput.bind(this);
            this.state = {
                valid: props.valid,
                errMessages: []
            };
        }

        handlerChangeInput(target) {
            const {value} = target
            const rules = this.props.validationRules
            let valid = true
            const errMessages = []
            if (rules) {
                for (let key in rules) {
                    const details = rules[key]
                    const checkResult = this.validate(value, key, details)
                    if (typeof checkResult === 'boolean') {
                        valid = valid && checkResult && errMessages.length === 0
                    } else {
                        valid = false
                        let msg = checkResult
                        if (this.props.errMessages && key in this.props.errMessages) {
                            msg = this.props.errMessages[key]
                        }
                        errMessages.push(msg)
                    }
                }
            }

//            target.dataset.valid = valid
            this.setState({
                valid,
                errMessages
            });

            if (!valid && this.props.stateValidForm) {
                this.props.changeValidForm(false)
            } else {
                if (this.props.currentForm) {
                    let validForm = true
                    this.props.checkFields.forEach(elementName => {
                        const field = this.props.currentForm[elementName]
                        validForm = validForm && field && field.dataset.valid
                    })
                    this.props.changeValidForm(validForm)
                }
            }

            if (this.props.handlerChange) {
                this.props.handlerChange()
            }
        }

        validate(value, rule, details) {
            switch (rule) {
                case 'required':
                    if (details) {
                        return this.required(value) || 'Обязательное поле'
                    }
                    ;
                    break;
                case 'minlength':
                    return this.minlength(value, details) || `Должно быть не менее ${details} символов`;
                    break;
                case 'equalfield':
                    if (this.props.currentForm) {
                        const field = this.props.currentForm[details]
                        if (field && 'value' in field) {
                            return this.equal(value, field.value) || 'Ошибка'
                        }
                    }
                    break;
                case 'regexp':
                    return this.regexp(value, details) || 'Ошибка'; break
            }
            return true
        }

        render() {
            return <WrappedComponent  {...this.props}
                                      onChange={ this.handlerChangeInput }
                                      valid={ this.state.valid }
                                      message={ this.state.errMessages.length ? this.state.errMessages[0] : null }
            />;
        }

        required(value) {
            return value.trim().length > 0
        }

        minlength(value, details) {
            return value.length >= details
        }

        equal(value, etValue) {
            return value === etValue
        }

        regexp(value, details) {
            const setRegexp = {
                'email': /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/
            }
            const exp = setRegexp[details] || new RegExp(details)
            // пустое значение считаем валидным
            return value.length === 0 || exp.test(value)
        }
    };
}
