import React, {PropTypes} from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import {browserHistory} from 'react-router';
import toastr from 'toastr';
import * as studentCourseAction from '../../actions/studentCourseAction';

class AddSC extends React.Component {

    constructor(props,context){
        super(props,context);
        this.state = {
            courseId : "",
            studentId : ""
        };
        this.changeStudent = this.changeStudent.bind(this);
        this.changeCourse = this.changeCourse.bind(this);
        this.saveStudentCourse = this.saveStudentCourse.bind(this);
    }

    redirect() {
        toastr.success(`Created Student Course Successfully!`);
        //console.log(this.context);
        this.context.router.push('/courses');
      }

    changeStudent(e){
        //console.log(e.target.value);
        this.setState({studentId:e.target.value});
    }

    changeCourse(e){
        //console.log(e.target.value);
        this.setState({courseId:e.target.value});
    }

    saveStudentCourse(){

        const studentCourse = {
            courseId : this.state.courseId,
            studentId : this.state.studentId            
        };

        //console.log(studentCourse);

        this.props.actions.saveStudentCourse(studentCourse)
            .then(()=>this.redirect())
            .catch(error=>{
                toastr.error(error);
            });
    }

    render() {
        return (
            <div>
                <h1>Add New Student Course</h1>

                <div className="form-group">
                <label htmlFor="StudentName">Students</label>
                <div className="field">
                    {/* Note, value is set here rather than on the option - docs: https://facebook.github.io/react/docs/forms.html */}
                    <select
                    onChange={this.changeStudent}
                    name="StudentName"
                    className="form-control">
                    <option value="">Select Student</option>
                    {this.props.students.map((option,index) => {
                        return <option key={index} value={option.id}>{option.name}</option>;
                    })
                    }
                </select>
                </div>
                </div>
                <br />
                <div className="form-group">
                <label htmlFor="CourseName">Courses</label>
                <div className="field">
                    {/* Note, value is set here rather than on the option - docs: https://facebook.github.io/react/docs/forms.html */}
                    <select
                    onChange={this.changeCourse}
                    name="CourseName"
                    className="form-control">
                    <option value="">Select Course</option>
                    {this.props.courses.map((option,index) => {
                        return <option key={index} value={option.id}>{option.title}</option>;
                    })
                    }
                </select>
                </div>
                </div>
                <input
                    type="submit"
                    value="Save"
                    className="btn btn-primary"
                    onClick={this.saveStudentCourse}/>


            </div>
        );
    }
}

AddSC.contextTypes = {
    router: PropTypes.object
};

AddSC.propTypes = {
    actions: PropTypes.object.isRequired,
    students:PropTypes.array.isRequired,
    courses :PropTypes.array.isRequired
};


function mapStateToProps(state) {
    //console.log('hello karl');
    return {
        studentCourse: state.studentCourse,
        students:state.students,
        courses:state.courses
    };
}

function mapDispatchToProps(dispatch) {
    return {
      actions: bindActionCreators(studentCourseAction, dispatch)
    };
}
  
export default connect(mapStateToProps,mapDispatchToProps)(AddSC);

//export default AddSC;