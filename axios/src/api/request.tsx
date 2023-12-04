import axios from "axios"

const FIRST_API_URL = "https://jsonplaceholder.typicode.com"
const SECOND_API_URL = "https://api.github.com"

// export const getPosts = axios({
//   url: `${FIRST_API_URL}/posts/101`,
//   method: `get`,
//   params: { offset: 0, limit: 10 },
// })

export const getPosts = async () => {
  try {
    const res = await axios.get(`${FIRST_API_URL}/posts`, {
      params: { offset: 0, limit: 10 },
      //   headers: {
      //     Authorization: `Bearer ${localStorage.getItem("token")}`,
      //   },
      //   withCredentials: true,
      //   onDownloadProgress: function (progressEvent) {
      //     console.log(progressEvent, "first")
      //   },
    })
    console.log(res.data)
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log(error, "err")

      console.log(error.response?.data.errText, `error`)
    } else if (error instanceof Error) {
      console.log(error.message)
    }
  }
}

export const createPost = async () => {
  const res = await axios.post(`${FIRST_API_URL}/posts`, {
    body: "test",
    title: "test2",
  })
}
