import SinglePost from "./SinglePost";

const ExistingPosts = ({ posts, fetchPosts, profile }) => {
  return (
    <div>
      {posts?.map((element) => (<SinglePost profile={profile} fetchPosts={fetchPosts} element={element} key={element._id} />))}
    </div>
  );
};

export default ExistingPosts;