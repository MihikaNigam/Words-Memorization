import React from "react";
import { connect } from 'react-redux';
import { deleteWord } from '../../redux/actions';



class WordDelete extends React.Component {
    render() {
        return (
            <div>
                <h3>delete a Word</h3>
            </div>
        );
    }
}
mapStateToProps=(state)=>{
return {data:state};
}

export default connect(
    mapStateToProps,
    { deleteWord }
)(WordDelete);