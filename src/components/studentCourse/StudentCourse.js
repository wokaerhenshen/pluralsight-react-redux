import React, {PropTypes} from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import * as studentCourseAction from '../../actions/studentCourseAction';
import studentCourse from '../../reducers/studentCourseReducer';

class StudentCourse extends React.Component{
    render(){
        return (
            <div>
            <h1>karl!</h1>
            </div>
        );
    }
}

function mapStateToProps(state) {
    //console.log(state);
    return {
        studentCourse: state.studentCourse
    };
}
  
  function mapDispatchToProps(dispatch) {
    return {
      actions: bindActionCreators(studentCourseAction, dispatch)
    };
  }



export default connect(mapStateToProps, mapDispatchToProps)(StudentCourse);