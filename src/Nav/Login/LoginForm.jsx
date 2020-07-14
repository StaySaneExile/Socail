import React from 'react';
import styles from './../../Common/FormsControls/FormsControls.module.css'
import {Field, reduxForm} from "redux-form";
import {InputLogin} from "../../Common/FormsControls/FormsControls";
import {maxLengthCreator, requiredField} from "../../utils/validators/validators";

const maxLength15 = maxLengthCreator(30)

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field validate={[requiredField, maxLength15]} placeholder={'email'} name={'email'} component={InputLogin}/>
            </div>
            <div>
                <Field validate={[requiredField, maxLength15]} type={'password'} placeholder={'password'} name={'password'} component={InputLogin}/>
            </div>
            <div>
                <Field type={'checkbox'} name={'rememberMe'} component={InputLogin}/>remember me
            </div>
            { props.error && <div className={styles.formSummaryError}>
                {props.error}
            </div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}
const ReduxLoginForm = reduxForm ({
    form: 'login'
})(LoginForm)

export default ReduxLoginForm;