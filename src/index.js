/* eslint-disable no-console */
//console.log('hi');
import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import {Router, browserHistory} from 'react-router';
import routes from './routes';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import {loadCourses} from './actions/courseActions';
import {loadAuthors} from './actions/authorActions';
import {loadStudents} from './actions/studentActions';
import {loadStudentCourses} from './actions/studentCourseAction'
import './styles/styles.css'; //Webpack can import CSS files too!
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/toastr/build/toastr.min.css';


const store = configureStore();
// window.store = store;
// console.log(window.store);
store.dispatch(loadCourses());
store.dispatch(loadAuthors());
store.dispatch(loadStudents());
store.dispatch(loadStudentCourses());
// console.log(window.store);
render(
     <Provider store={store}>
      <Router history={browserHistory} routes={routes}/>
     </Provider>
    ,
    document.getElementById('app')
);