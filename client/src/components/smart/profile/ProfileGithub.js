import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getRepos } from '../../../actions/profile'
import Preloader from '../../dumb/Preloader'

const ProfileGithub = ({ username, getRepos, profile: { repos, loading }  }) => {

  useEffect(() => {
    getRepos(username)
    // eslint-disable-next-line
  },[])

  while(loading)
  {
    return <Preloader />
  }

  if(!repos)
  {
    return <Preloader />
  }

  return (
    <div className="collection">
             { repos && repos.map(r => (
          <a href={r.html_url} target='_blank' rel='noopener noreferrer' className="collection-item red-text black" key={r.id}>
            { r.name} 
             <span className="secondary-content badge blue-text">{r.forks} Forks</span>

          </a>
        )) }
  </div>
  )
}

ProfileGithub.propTypes = {
  getRepos: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired,
}

const mapStateToProps = state => ({
  profile: state.ProfileState
})

export default connect(mapStateToProps, { getRepos })(ProfileGithub)
