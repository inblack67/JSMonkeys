import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { likePost, dislikePost, deletePost } from '../../../actions/post'
import Moment from 'react-moment'

const PostItem = ({ showActions, likePost, dislikePost, deletePost, auth, post: { name, text, date, _id, user, likes, comments } }) => {

  const onLike = e => {
    likePost(_id)
  }

  const onDislike = e => {
    dislikePost(_id)
  }

  const onDelete = e => {
    deletePost(_id)
  }

  return (
    <div>
      <span className="flow-text">
        { text }
<blockquote>{name}  
{'  '}

{ showActions && <Fragment>
  <span className="helper-text">
  { <Moment format='YYYY/MM/DD'>{date}</Moment> }

  { !auth.loading && auth.user._id === user &&  <a href='#!' onClick={onDelete}>
  <span className="badge red-text"><strong>Delete</strong></span>
  </a>}

  <Link to={`/posts/${_id}`}><span className="red-text badge"><strong>  Discussions: {comments.length}</strong></span></Link> 

</span>

<span className="secondary-content black">

</span>

{'  '}
<a href='#!' onClick={onDislike}>
<span className="badge red-text">Dislike</span>
</a>

{'  '}

  <a href="#!" onClick={onLike}>
  <span className="badge red-text">Likes: {likes.length}</span>
</a>
</Fragment> }


</blockquote>
      </span>
      <br/>
      <hr/>
      <br/>
    </div>
  )
}

PostItem.defaultProps = {
  showActions: true
}

PostItem.propTypes = {
  auth: PropTypes.object.isRequired,
  likePost: PropTypes.func.isRequired,
  dislikePost: PropTypes.func.isRequired,
  deletePost: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  auth: state.AuthState
})

export default connect(mapStateToProps, { likePost, dislikePost, deletePost })(PostItem)
