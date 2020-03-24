import React, { useEffect, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {getPost} from '../../../../actions/post'
import PostItem from '../PostItem'
import Preloader from '../../../dumb/Preloader'
import {Link} from 'react-router-dom'
import CommentForm from './CommentForm'
import CommentItem from './CommentItem'


const Post = ({getPost, match, post: { post, loading }}) => {

  useEffect(() => {
    getPost(match.params.id)
  }, [getPost])

  if(loading || !post)
  {
    return <Preloader />
  }

  return (
    <Fragment>
    <div className='container center' style={{'marginTop': '11rem'}}>
      <PostItem post={post} showActions={false}/>
      <CommentForm id={post._id}/>
      { post.comments && post.comments.map(c => (
        <CommentItem comment={c} postId={post._id} commentId={c._id} key={c._id}/>
      )) }
      <Link to='/posts' className="btn grey darken-4 pulse">Back To Posts</Link>
    </div>
    </Fragment>
  )
}

Post.propTypes = {
  getPost: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  post: state.PostState
})

export default connect(mapStateToProps, { getPost })(Post)
