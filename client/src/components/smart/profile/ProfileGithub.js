import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getRepos } from '../../../actions/profile'
import Preloader from '../../dumb/Preloader'

const ProfileGithub = ({ username, getRepos, profile: { repos, loading }  }) => {

  useEffect(() => {
    getRepos(username)
  },[])

  if(loading || !repos)
  {
    return <Preloader />
  }

  return (
    <div className="container">
      <ul className="collection">
        { repos && repos.map(r => (
          <li className="collection-item" key={r.id}>
            { r.name}
          </li>
        )) }
      </ul>
    </div>
  )
}

ProfileGithub.propTypes = {
  getRepos: PropTypes.func.isRequired,
  repos: PropTypes.array.isRequired,
  username: PropTypes.string.isRequired,
}

const mapStateToProps = state => ({
  profile: state.ProfileState
})

export default connect(mapStateToProps, { getRepos })(ProfileGithub)
