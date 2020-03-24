import React from 'react'
import Moment from 'react-moment'

const EducationItem = ({ education: { school, degree, fieldofstudy, description, from, to, current } }) => {
  return (
    <ul className="collection">
      <p className="flow-text"><span>{ degree }</span></p>
      <br/>
      <li className="collection-item black">
        <span>School - { school }</span>
        <br/>
        <span>From - { <Moment format='YYYY/MM/DD'>{from}</Moment> }</span>
        <br/>
  { current ? <span>Current</span> : <span>To - { <Moment format='YYYY/MM/DD'>{to}</Moment> }</span> }
  <br/>
<span>{description}</span>
      </li>

      <br/><hr/><br/>
    </ul>
  )
}

export default EducationItem
