import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addComment } from '../../../../actions/post'

const CommentForm = ({ addComment, id }) => {

  const [text, setText] = useState('')

  const onChange = e => {
    setText(e.target.value)
  }

  const onSubmit = e => {
    e.preventDefault()
    addComment({ text }, id)
    setText('')
  }

  return (
    <div className="container">
      <form onSubmit={onSubmit}>
        <div className="input-field">
        <textarea className='materialize-textarea validate' value={text} onChange={onChange} required>
        Post
      </textarea>
      <label>Add Comment</label>
      <span className="helper-text" data-error='You must add some text'></span>
      </div>
      <div className="input-field">
      <input type="submit" className='btn red' value="Post"/>
      </div>
      </form>
      <br/><hr/><br/>
    </div>
  )
}

CommentForm.propTypes = {
  addComment: PropTypes.func.isRequired,
}

export default connect(null, {addComment})(CommentForm)
