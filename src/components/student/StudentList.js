import React, {PropTypes} from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import {browserHistory} from 'react-router';
import * as studentActions from '../../actions/studentActions';

class StudentList extends React.Component{

    constructor(props){
        super(props);
        this.state = {};
    }

    render(){
        const styles = {
            width:'200px',
            float:'left'
        };
        return (
            <div style={styles}>
                <h1>Students</h1>
                <table className="table">
                <thead>
                <tr>
                    <th>Name</th>
                </tr>
                </thead>
                <tbody>
                {(this.props.students).map((student,index) =>
                    <tr key={index}><td>{student.name}</td></tr>
                )} 
                </tbody>
                </table>
            </div>
        );
    }
}

StudentList.propTypes = {
    students: PropTypes.array.isRequired
};

function mapStateToProps(state) {
    //console.log(state);
    return {
      students: state.students
    };
}
  
function mapDispatchToProps(dispatch) {
    return {
      actions: bindActionCreators(studentActions, dispatch)
    };
}



export default connect(mapStateToProps, mapDispatchToProps)(StudentList);