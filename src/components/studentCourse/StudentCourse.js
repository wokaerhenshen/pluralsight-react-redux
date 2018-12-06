import React, {PropTypes} from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import * as studentCourseAction from '../../actions/studentCourseAction';
import {browserHistory} from 'react-router';
import studentCourse from '../../reducers/studentCourseReducer';

class StudentCourse extends React.Component{

    redirectToAddStudentCoursePage(){
        browserHistory.push('/addStudentCourse');       
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
                    <tr key={index}>
                        <td>{studentCourse.studentName}</td>
                        <td>{studentCourse.courseName}</td>
                    </tr>
                )}
                </tbody>
            </table>
            </div>
        );
    }
}

StudentCourse.propTypes = {
    studentCourse : PropTypes.array.isRequired
};


function mapStateToProps(state) {
    //console.log(state);
    const result = [];
    const map = new Map();
    for (const item of state.studentCourse){
        if(!map.has(item.studentId)){
            map.set(item.studentId , true);    // set any value to Map
            result.push({
                studentId : item.studentId,
                studentName: item.student,
                courseName: item.course,
                count : 1
            });
        }else{
          //console.log(item);
          var oneItem = result.find((e)=> e.studentId == item.studentId);
          //console.log(oneItem);
          oneItem.courseName += "   |   " + item.course;
          oneItem.count ++; 
        }
    }
    return {
        studentCourse: result
    };
}
export default connect(mapStateToProps)(StudentCourse);