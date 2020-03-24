import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteComment } from '../../../../actions/post'
import Moment from 'react-moment'
import Preloader from '../../../dumb/Preloader'


const CommentItem = ({deleteComment, postId, comment: { _id, text, name, user, createdAt }, auth }) => {

  const onRemove = e => {
    deleteComment(postId, _id)
  }

  while(auth.loading)
  {
    return <Preloader />
  }

  return (
    <div className="card black">
      <div className="card-title red-text">
        {name}
      </div>
      <div className="card-body">
        {text}
        <br/>
        <br/>
        <span className='red-text'>
          { <Moment format='YYYY-MM-DD'>
            <strong>{ createdAt }</strong>
          </Moment> }
        </span>
        <br/>
        <br/>
        { !auth.loading && auth.user._id === user && <span>
          <a href='#!' onClick={onRemove} className='red-text'>Delete</a>
        </span> }
        <br/>
        <hr/>
      </div>
    </div>
  )
}

CommentItem.propTypes = {

}

const mapStateToProps = state => ({
  auth: state.AuthState
})

export default connect(mapStateToProps, { deleteComment })(CommentItem)
