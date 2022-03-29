import React from 'react'

const Comment = ({ comment }) => {
  return (
    <div className="post__comment">
            <div className="post__comment__user">{comment.user}</div>
            {comment.comment}
          </div>
  )
}

export default Comment