import React from 'react'
import Moment from 'react-moment'

const ExperienceItem = ({ experience: { title, company, from, to, current } }) => {
  return (
    <ul className="collection">
      <p className="flow-text"><span>{ title }</span></p>
      <br/>
      <li className="collection-item" className='black'>
        <span>Company - { company }</span>
        <br/>
        <span>From - { <Moment format='YYYY/MM/DD'>{from}</Moment> }</span>
        <br/>
  { current ? <span>Current</span> : <span>To - { <Moment format='YYYY/MM/DD'>{to}</Moment> }</span> }
      </li>

      <br/><hr/><br/>
    </ul>
  )
}

export default ExperienceItem
