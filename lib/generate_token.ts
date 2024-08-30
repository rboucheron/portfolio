const generateToken = () => {
    var chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
    var token = ''
    for (var i = 0; i < 500; i++) {
      token += chars[Math.floor(Math.random() * chars.length)]
    }
    return token
  }
  
  export default generateToken
