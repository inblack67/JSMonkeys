import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import Preloader from '../../dumb/Preloader'
import { connect } from 'react-redux'
import { getPosts } from '../../../actions/post'
import PostItem from './PostItem'
import PostForm from './PostForm'

const Posts = ({ post: { posts, loading }, getPosts }) => {

  useEffect(() => {
    getPosts()
  },[getPosts])

  while(loading)
  {
    return <Preloader />
  }

  if(posts.length === 0 || !posts)
  {
    return <Preloader />
  }

  return (
    <div className="container">
      <h3 className='center'>Posts</h3>
      <PostForm />
      {posts.map(p => (
      <PostItem post={p} key={p._id}/>
    ))}
    </div>
  )
}

Posts.propTypes = {
  post: PropTypes.object.isRequired,
  getPosts: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  post: state.PostState
})

export default connect(mapStateToProps, {getPosts})(Posts)
