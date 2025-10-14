/*
 *   Axios client
 */
import axios from "axios"

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:4120',
  withCredentials: true, // This sends cookies automatically
})

// Set content type for requests
api.interceptors.request.use((config) => {
  config.headers['Content-Type'] = 'application/json'
  return config
})

// Handle 401 errors (redirect to login)
api.interceptors.response.use(
  (response) => response, 
  (error) => {
    if (error.response?.status === 401) {
      // Clear any auth state and redirect to login
      window.location.href = '/login'
    }
    return Promise.reject(error)
  }
)

export default api