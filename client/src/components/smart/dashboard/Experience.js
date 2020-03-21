import React from 'react'
import PropTypes from 'prop-types'
import Moment from 'react-moment'
import { connect } from 'react-redux'
import { deleteExperience } from '../../../actions/profile'

const Experience = ({ experience, deleteExperience }) => {

  const experiences  = experience.map(ex => (
    <tr key={ex._id}>
      <td>{ex.company}</td>
      <td>{ex.title}</td>
      <td>
        <Moment format='YYYY/MM/DD'>{ ex.from }</Moment>
        {' - '}
        { ex.to === null ? ('Now') : (<Moment format='YYYY/MM/DD'>{ ex.to }</Moment>)}
        </td>
        <td><a href="#1" className="btn red" onClick={e => deleteExperience(ex._id)}>Delete</a></td>
    </tr>
  ))


  return (
    <div className="container">
      <p className="flow-text">Experience</p>
      <table className='highlight responsive-table'>
        <thead>
          <tr>
              <th>Company</th>
              <th>Title</th>
              <th>Years</th>
              <th>Action</th>
          </tr>
        </thead>
      <tbody>{experiences}</tbody>
      </table>
    </div>
  )
}

Experience.propTypes = {
  experience: PropTypes.array.isRequired,
  deleteExperience: PropTypes.func.isRequired,
}

export default connect(null, {deleteExperience})(Experience)
