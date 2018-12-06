import delay from './delay';
import CourseApi from './mockCourseApi';
import StudentAPI from './mockStudentApi';


const StudentCourses = [
    {
        id:'1',
        studentId:"1",
        courseId :"react-flux-building-applications",
        student:'karl',
        course:'Building Applications in React and Flux'
    }
];

class StudentCourseApi {
    static getAllStudentCourses(){
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                resolve(Object.assign([],StudentCourses));
            },delay);
        });
    }

    static saveStudentCourse(studentCourse){
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                //get student name from studentId               
                //get courseName from courseId
                //create new StudentCourse
                let StudentCourse = {
                    id :"testId",
                    studentId : studentCourse.studentId,
                    courseId: studentCourse.courseId,
                    student : studentCourse.studentId,
                    course : studentCourse.courseId
                };
                StudentCourses.push(StudentCourse);
                resolve(StudentCourse);
            },delay);
        });
    }
}

export default StudentCourseApi;