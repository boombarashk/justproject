import {connect} from 'react-redux'

const Profile = (props) => {
    return <>
        <div className="title">Profile</div>
        <p><b>Email:</b> {props.user && props.user.email}</p>
    </>
}

export default connect(state => ({...state.user}))(Profile)
