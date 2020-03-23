import React, { useEffect, Fragment } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getMyProfile } from '../../../actions/profile'
import { deprecate } from '../../../actions/auth'
import Preloader from '../../dumb/Preloader'
import DashboardActions from './DashboardActions'
import Experience from './Experience'
import Education from './Education'

const Dashboard = ({ deprecate, getMyProfile, profile: {loading, profile}, auth: { user }}) => {

  useEffect(() => {
    getMyProfile();
    // eslint-disable-next-line
  },[])

  while(loading)
  {
    return <Preloader />
  }

  return (
  <div className='center'>
    <h4>Welcome <span className="red-text"><strong>
    { user && user.name }
    </strong></span></h4>
    { !profile ? <Fragment>
      <p className="flow-text center">You should create your profile</p>
    <Link to='/create-profile' className='pulse btn blue waves-effect waves-light'>Create Profile</Link>
    </Fragment> : 
    <Fragment>
    <Experience experience={profile.experience}/> 
    <Education education={profile.education}/>
    <br/>
    <DashboardActions /> 
    </Fragment>
    }


    <a href="#1" className="fixed-action-btn red-text left" onClick={e => deprecate()}>
      <strong>Delete Account</strong>
      </a>

  </div>
  )
}

Dashboard.propTypes = {
  getMyProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  deprecate: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  profile: state.ProfileState,
  auth: state.AuthState
})

export default connect(mapStateToProps, { getMyProfile, deprecate })(Dashboard)
