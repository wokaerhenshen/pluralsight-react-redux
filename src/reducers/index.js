import { combineReducers } from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';
import students from './studentReducer';
import studentCourse from './studentCourseReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
   courses,
   authors,
   students,
   studentCourse,
   ajaxCallsInProgress
});

export default rootReducer;