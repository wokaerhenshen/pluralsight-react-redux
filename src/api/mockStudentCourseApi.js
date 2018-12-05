import delay from './delay';

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

    }
}

export default StudentCourseApi;