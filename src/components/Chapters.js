import {connect} from 'react-redux';
import {Link} from "react-router-dom";
import {PREFIX} from "./Root";

const Chapters = function(props) {
    const links = (props.data && props.data.length)
        ? props.data.filter(item => item.page).map(item => <li key={item.id}>
            <Link to={`${PREFIX}/news/${item.page}`} >{item.title}</Link>
            &nbsp;(страница {item.page})
        </li>)
        : 'Not Found'

    return <div>
        <ul>
        { links }
        </ul>
    </div>
}

export default connect(state => ({...state.data}))(Chapters)
