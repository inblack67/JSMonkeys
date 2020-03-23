import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getProfiles } from '../../../actions/profile'
import PropTypes from 'prop-types'
import ProfileItem from './ProfileItem'
import Preloader from '../../dumb/Preloader'

const Profiles = ({getProfiles, profile: { profiles, loading }}) => {

  useEffect(() => {
    getProfiles()
    // eslint-disable-next-line
  },[])

  while(loading)
  {
    return <Preloader />
  }

  return (
    // profiles.length === 0 && !loading ? <h4>No Profiles So Far</h4> :
    <div className="container">
      <blockquote><p className="flow-text">Meet The Devs</p></blockquote>

      {  profiles.map(p => (
        <ProfileItem profile={p} key={p._id}/>
    ))}
      </div>
  )
}

Profiles.propTypes = {
  getProfiles: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  profile: state.ProfileState
})

export default connect(mapStateToProps, { getProfiles })(Profiles)
