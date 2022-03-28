import React, { useEffect, useState } from "react";
import NewPost from "../components/NewPost";
import Post from "../components/Post";
import { useSelector } from "react-redux";

const UserFeed = (props) => {
  const [posts, setPosts] = useState([]);

  console.log(props);
  const fetchPosts = async () => {
    try {
      let response = await fetch(`http://localhost:5000/timeline/`);

      if (response.ok) {
        let data = await response.json();
        setPosts(data);
        // console.log(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const reversePosts = props.posts.slice(0).reverse().map(post => {
    return post;
  })

  // console.log("reversed", reversePosts)
  
  // const fetchProfile = async () => {
  //    // Getting token to use when fetching profile data
  // let token = JSON.parse(localStorage.getItem("auth"));
  // const jwttoken = token.user.accessToken;
  // // console.log(token);
  // console.log(jwttoken);
  //   try {
  //     let response = await fetch(`http://localhost:5000/users/currentUser/`, {
  //       headers: {
  //         Authorization: `Bearer ${jwttoken}`,
  //       },
  //     });

  //     if (response.ok) {
  //       let data = await response.json();
  //       setProfile(data);
  //       console.log(data.currentUser.firstname);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

//   useEffect(() => {
//     fetchPosts();
  
//   }, []);



  return (
    <>
    <div className="feed__container">
      <NewPost />
      {reversePosts.map((post, index) => {
        return <Post key={index} posts={post} />
      })}
      </div>
      </>
  );
};

export default UserFeed;