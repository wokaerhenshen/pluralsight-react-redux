import delay from './delay';

const StudentCourses = [
    {
        id:'1',
        student:'test',
        course:'fake'
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