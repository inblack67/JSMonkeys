import React from 'react'
import PropTypes from 'prop-types'
import Moment from 'react-moment'
import { connect } from 'react-redux'
import { deleteEducation } from '../../../actions/profile'

const Education = ({ education, deleteEducation }) => {

  if(!education)
  {
    return (
      <p className="flow-text">
        Add Some Education
      </p>
    )
  }

  const educations  = education.map(ex => (
    <tr key={ex._id}>
      <td>{ex.school}</td>
      <td>{ex.degree}</td>
      <td>
        <Moment format='YYYY/MM/DD'>{ ex.from }</Moment>
        {' - '}
        { ex.to === null ? ('Now') : (<Moment format='YYYY/MM/DD'>{ ex.to }</Moment>)}
        </td>
        <td><a href="#1" className="btn red" onClick={e => deleteEducation(ex._id)}>Delete</a></td>
    </tr>
  ))

  if(educations.length === 0)
  {
    return ''
  }

  return (
    <div className="container">
      <p className="flow-text left"><span className="red-text">Education</span></p>
      <table className='highlight responsive-table'>
        <thead>
          <tr>
              <th>School</th>
              <th>Degree</th>
              <th>Years</th>
              <th>Action</th>
          </tr>
        </thead>
      <tbody>{educations}</tbody>
      </table>
    </div>
  )
}

Education.propTypes = {
  education: PropTypes.array.isRequired,
  deleteEducation: PropTypes.func.isRequired,
}

export default connect(null, {deleteEducation})(Education)
