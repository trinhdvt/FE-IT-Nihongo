const baseUrl = '/api/auth'
export const authApi = {
  DECODE: `${baseUrl}/code`,
  FETCH_LIST_CODE: `${baseUrl}/code`,
}


export const ManagementApi = {
  FETCH_LIST_HELP(id) {
    return `/api/hospital/${id}/help`
  },
  FETCH_LIST_USER(id) {
    return `/api/hospital/${id}/user`
  },
  FETCH_LIST_CHANNEL(id) {
    return `/api/hospital/${id}/channel`
  },
  FETCH_LIST_HOSPITAL: `/api/hospital`,
  FETCH_LIST_USER_MANAGER: `/api/user`,
  FETCH_LIST_HELP_MANAGER: `/api/help`,
  FETCH_LIST_CHANNEL_MANAGER: `/api/channel`,
}