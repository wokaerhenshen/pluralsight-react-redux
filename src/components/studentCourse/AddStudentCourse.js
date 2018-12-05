import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as studentCourseAction from '../../actions/studentCourseAction';
import SelectInput from '../common/SelectInput';
//import CourseForm from './CourseForm';
//import {authorsFormattedForDropdown} from '../../selectors/selectors';
import toastr from 'toastr';

export class AddStudentCourse extends React.Component{
    render(){
      return (
        <div>
          <h1>Create New Student Courses</h1>
          {/* <SelectInput
            name="student"
            label="Student"
            value={course.authorId}
            defaultOption="Select Author"
            options={allAuthors}
            onChange={onChange} error={errors.authorId}/>           */}
        </div>

        
      );
    }
}

function mapStateToProps(state, ownProps){
    let studentCourse = { student: '',course:'' };
    console.log(state);
    return {
      studentCourse:studentCourse,
      students: state.students,
      courses:state.courses
    }
}

function mapDispatchToProps(dispatch) {
    return {
      actions: bindActionCreators(studentCourseAction, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddStudentCourse);