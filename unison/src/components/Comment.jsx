import React, { useEffect, useState } from "react";

const Comment = ({ comment }) => {
  const [author, setAuthor] = useState([]);

  console.log(comment.user);

  const fetchCommentAuthor = async (req, res, next) => {
    try {
      const author = await fetch(`http://localhost:5000/users/${comment.user}`);
      const authorData = await author.json();
      setAuthor(authorData);
      console.log(authorData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCommentAuthor();
  }, []);

  return (
    <div className="comment__main">
      <div className="post__comment__section">
        <div className="post__comment__user d-flex">
          <img
            src={author.profileImage}
            alt="Author Profile Image"
            className="author__image"
          />
          <div>
            {author.firstname} {author.surname}
          </div>
        </div>
        <div className="post__comment">{comment.comment}</div>
      </div>
      <div className="like__reply d-flex"><button>Like</button><button className="reply__button">Reply</button></div>
    </div>
  );
};

export default Comment;
