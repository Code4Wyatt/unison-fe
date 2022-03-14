import React, { useEffect, useState } from "react";
import NewPost from "../components/NewPost";
import Post from "../components/Post";
import { useSelector } from "react-redux";
const Feed = (props) => {
  const [posts, setPosts] = useState([]);
  const [profile, setProfile] = useState([]);
  
  const fetchPosts = async () => {
    try {
      let response = await fetch(`http://localhost:5000/timeline/`);

      if (response.ok) {
        let data = await response.json();
        setPosts(data);
        console.log(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const reversePosts = posts.slice(0).reverse().map(post => {
    return post;
  })

  console.log("reversed", reversePosts)
  
  const fetchProfile = async () => {
     // Getting token to use when fetching profile data
  let token = JSON.parse(localStorage.getItem("auth"));
  const jwttoken = token.user.accessToken;
  // console.log(token);
  console.log(jwttoken);
    try {
      let response = await fetch(`http://localhost:5000/users/currentUser/`, {
        headers: {
          Authorization: `Bearer ${jwttoken}`,
        },
      });

      if (response.ok) {
        let data = await response.json();
        setProfile(data);
        console.log(data.currentUser.firstname);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPosts();
    fetchProfile();
  }, []);



  return (
    <>
    <div className="feed__container">
      <NewPost />
      {/* <Post
        profilePic="data:image/jpeg;base64,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"
        message="New bass covers coming soon! Subscribe to my YouTube channel @ https://www.youtube.com/channel/UCW8tq_mhu8pVDH2UIGRwuSg"
        timestamp="2h"
        username="Dr. Funk"
        image="https://drfunkbass.com/wp-content/uploads/2021/02/video2.jpg"
      /> */}
      {reversePosts.map((post) => {
        return <Post posts={post} />
      })}
      </div>
      </>
  );
};

export default Feed;
