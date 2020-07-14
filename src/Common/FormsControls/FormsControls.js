import React from "react";
import styles from './FormsControls.module.css'



const FormControl = ({input, meta,child, ...props}) => {
    const error = meta.touched && meta.error;
    return(
        <div className={styles.formControl + ' ' + (error ? styles.error: "")}>
            <div>
                {props.children}
            </div>
            {error && <span>{meta.error}</span> }
        </div>
    )
}



const TextArea = (props) => {
    const {input, meta,child, ...resTprops} = props
    return(
        <FormControl {...props}><textarea {...input} {...resTprops} /></FormControl>
    )
}


export const InputLogin = (props) => {
    const {input, meta,child, ...resTprops} = props
    return(
        <FormControl {...props}><input {...input} {...resTprops} /></FormControl>
    )
}

export default TextArea;