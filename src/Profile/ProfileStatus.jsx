import React from "react";
import s from "./ProfileInfo.module.css";

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    }

    changeStatus = (e) => {
        this.setState({status: e.currentTarget.value})
    }

    editModeON = () => {
        this.setState({editMode: true})
    }

    editModeOFF = () => {
        this.setState({editMode: false})
        this.props.updateStatus(this.state.status)
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.status !== this.props.status){
        this.setState({
            status: this.props.status
        })}
    }

    render() {
        return (
            <>
                {this.state.editMode
                    ?
                    <div>
                        <input autoFocus={true}
                               onBlur={this.editModeOFF}
                               onChange={this.changeStatus}
                               value={this.state.status}/>
                    </div>
                    :
                    <div className={s.profileStatus}>
                        <span onClick={this.editModeON}>{this.props.status || 'your status'}</span>
                    </div>
                }
            </>
        )
    }
}

export default ProfileStatus;