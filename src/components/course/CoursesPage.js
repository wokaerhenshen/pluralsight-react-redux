import React, {PropTypes} from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import {browserHistory} from 'react-router';
import * as courseActions from '../../actions/courseActions';
import CourseList from './CourseList';
import StudentList from '../student/StudentList';
import StudentCourse from '../studentCourse/StudentCourse';
//import 

class CoursesPage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this);
  }

  redirectToAddCoursePage() {
    browserHistory.push('/course');
  }

  render() {
    let styles = {
      width:'500px',
      float:'left',
      marginLeft:'100px'
    };

    let h1Style = {
      float:'left'
    };

    let btnStyle = {
      position:'relative',
      top :'25px',
      left:'15px'
    };

    return (
      <div>
        <StudentList />
        <div style={styles} >
        <h1 style={h1Style}>Courses</h1>
        <input type="submit"
               value="Add Course"
               className="btn btn-primary"
               style={btnStyle}
               onClick={this.redirectToAddCoursePage}/>

        <CourseList courses={this.props.courses}/>
        </div>
        <StudentCourse />
      </div>
    );
  }
}

CoursesPage.propTypes = {
  actions: PropTypes.object.isRequired,
  courses: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    courses: state.courses
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };
}

//export default CoursesPage;

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);