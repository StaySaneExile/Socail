import React from "react";
import {Field, reduxForm} from "redux-form";
import TextArea from "../../Common/FormsControls/FormsControls";
import {maxLengthCreator, requiredField} from "../../utils/validators/validators";

const maxLength50 = maxLengthCreator(50)
const MessageForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={TextArea}
                       validate={[requiredField, maxLength50]}
                       name={'newMessageBody'}
                       placeholder='Enter your message' />
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

const MessageFormRedux = reduxForm({form: 'addMessageForm'})(MessageForm)

export default MessageFormRedux;