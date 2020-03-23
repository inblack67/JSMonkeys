import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import Moment from 'react-moment'

const PostItem = ({ auth, post: { name, text, date, _id, user, likes, comments } }) => {
  return (
    <div>
      <p className="flow-text">
        { text }
<blockquote>{name}  
{'  '}
<span className="helper-text">
  { <Moment format='YYYY/MM/DD'>{date}</Moment> }
</span>

<span className="secondary-content">
<button className='blue-text'>
<i className="fa fa-thumbs-up"></i><span className="helper-text">
{likes.length}   
</span>
</button>
{'  '}
<button className='red-text'>
<i className="fa fa-thumbs-down"></i>
</button>
{'  '}
{ !auth.loading && auth.user._id === user &&  <button className='grey-text'>
<i className='material-icons'>delete</i>
</button>}
</span>
</blockquote>
      </p>
    </div>
  )
}

PostItem.propTypes = {

}

const mapStateToProps = state => ({
  auth: state.AuthState
})

export default connect(mapStateToProps, {  })(PostItem)
