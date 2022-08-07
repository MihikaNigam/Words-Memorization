import React from "react";
import { connect } from 'react-redux';
import { fetchWord } from '../../redux/actions';



class WordShow extends React.Component {
    render() {
        return (
            <div>
                <h3>fetch a Word</h3>
            </div>
        );
    }
}

export default connect(
    null,
    { fetchWord }
)(WordShow);