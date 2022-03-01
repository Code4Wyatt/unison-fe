import axios from 'axios'

const API = process.env.API_URL

// Create new connection
const createConnection = async (connectData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.post(API + `/:id/follow`, connectData, config)

  return response.data
}

// Get user goals
const getConnections = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.get(API, config)

  return response.data
}

// // Delete user goal
// const deleteGoal = async (goalId, token) => {
//   const config = {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   }

//   const response = await axios.delete(API + goalId, config)

//   return response.data
// }

const connectService = {
  createConnection
}

export default connectService