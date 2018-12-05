import React, {PropTypes} from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import * as studentCourseAction from '../../actions/studentCourseAction';
import {browserHistory} from 'react-router';
import studentCourse from '../../reducers/studentCourseReducer';

class StudentCourse extends React.Component{

    redirectToAddStudentCoursePage(){
        browserHistory.push('/studentCourse');       
    }

    render(){
        return (
            <div>
            <h1>Student Course  &nbsp; &nbsp;
            <input type="submit"
               value="Add Student Course"
               className="btn btn-primary"
               onClick={this.redirectToAddStudentCoursePage}
               />
            </h1>
            <table className="table">
                <thead>
                <tr>
                    <th>Student Name</th>
                    <th>Course</th>
                </tr>
                </thead>
                <tbody>
                {(this.props.studentCourse).map((studentCourse,index) =>
                    <tr><td key={studentCourse.id}>{studentCourse.student}</td>
                        <td key={index}>{studentCourse.course}</td>
                    </tr>
                )}
                </tbody>
                </table>
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