import React from 'react'

const UserMedia = (props) => {
    console.log("Media props: ", props);
    const userId = props.profile._id
    const userMedia = async (req, res, next) => {
        try {
            const userById = await fetch(`http://localhost:5000/users/${userId}`)
        } catch (error) {
            console.log(error.message)
        }
    }
  return (
    <div className="user__media__section">UserMediassssssssssssssssssssssssssssssssssssssssss</div>
  )
}

export default UserMedia