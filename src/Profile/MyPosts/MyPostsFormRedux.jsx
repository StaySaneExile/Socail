import React from "react";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, requiredField} from "../../utils/validators/validators";
import TextArea from "../../Common/FormsControls/FormsControls";

const maxLength = maxLengthCreator(10);

let MyPostsFormRedux = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <div>
                    <Field name={'postText'}
                           component={TextArea}
                           validate={[requiredField, maxLength]}/>
                </div>
                <div>
                    <button>Add post</button>
                </div>
                <button>Remove</button>
            </div>
        </form>
    );
}

const PostFormRedux = reduxForm({form: 'addPostForm'})(MyPostsFormRedux)
export default PostFormRedux;