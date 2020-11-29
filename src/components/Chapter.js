import React from "react";
import {connect} from 'react-redux';
import { useParams } from 'react-router-dom'

function Chapter(props) {
    let { id } = useParams();
    const data = props.data && props.data[+id]
        ? props.data[+id -1].content
        : 'Not Found'

    return <div>
        <div className="subtitle">{id}.</div>
        <div className="contentChapter" dangerouslySetInnerHTML={{__html:  data }}/>
    </div>
}

export default connect(state => ({...state.data}))(Chapter)
