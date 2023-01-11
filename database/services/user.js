const User = require('../models/user')

const UserClass = {
  createUser: async (userDetails) => {
    if(!userDetails) return false
    const resp = await User.create(userDetails);
    return resp
  }
}

module.exports = UserClass