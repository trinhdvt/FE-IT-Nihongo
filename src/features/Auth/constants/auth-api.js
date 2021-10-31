const baseUrl = '/api/auth'
export const authApi = {
  LOGIN: `${baseUrl}/login`,
  LOGOUT: `${baseUrl}/logout`,
  SIGNUP: `${baseUrl}/signup`,
  CHECK_CODE(code) {
    return `${baseUrl}/code/${code}`
  } 
}