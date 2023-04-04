let baseUrl = ''
if (process.env.NODE_ENV === 'development') {
	baseUrl = '/api'
}
if (process.env.NODE_ENV === 'production') {
	baseUrl = '/online'
}
const serverConfig = {
  baseURL: baseUrl,
  useTokenAuthorization: true, // 是否开启 token 认证
};
export default serverConfig;