import delay from './delay';

const students = [
    {
        id:"1",
        name : "karl"        
    },
    {
        id:"2",
        name : "carolyn"        
    },
    {
        id:"3",
        name : "xu"        
    }
];

class StudentAPI {
    static getAllStudents(){
        return new Promise((resolve,reject)=>{
            setTimeout(() => {
                resolve(Object.assign([], students));
              }, delay);
        });
    }
}

export default StudentAPI;