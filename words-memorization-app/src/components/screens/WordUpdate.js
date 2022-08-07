import React from "react";
import { connect } from 'react-redux';
import { editWord } from '../../redux/actions';



class WordUpdate extends React.Component {
    render() {
        return (
            <div>
                <h3>update a Word</h3>
            </div>
        );
    }
}

export default connect(
    null,
    { editWord }
)(WordUpdate);