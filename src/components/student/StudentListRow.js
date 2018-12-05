import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const StudentListRow = ({student}) => {
  console.log('hi');
  console.log(student);
  return (
    <tr>
      <td>{student}</td>
    </tr>
  );
};

StudentListRow.propTypes = {
  student: PropTypes.object.isRequired
};

export default StudentListRow;