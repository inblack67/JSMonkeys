import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addPost } from '../../../actions/post'

const PostForm = ({addPost}) => {

  const [text, setText] = useState('')

  const onChange = e => {
    setText(e.target.value)
  }

  const onSubmit = e => {
    e.preventDefault()
    addPost({text})
    setText('')
  }

  return (
    <div className="container">
      <form onSubmit={onSubmit}>
        <div className="input-field">
        <i className="material-icons prefix">mode_edit</i>
          <textarea className="materialize-textarea validate" required onChange={onChange} value={text}></textarea>
          <label>Start Typing...</label>
          <span className="helper-text" data-error='You must add some text'>Post</span>

      <input type="submit" value="Post" className='btn red btn-small center'/>
        </div>
      </form>
      <hr/>
      <br/>
    </div>
  )
}

PostForm.propTypes = {

}

export default connect(null, {addPost})(PostForm)
