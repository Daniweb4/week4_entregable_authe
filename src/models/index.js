const EmailCode = require("./EmailCode");
const User = require("./User");

//Traigo a emailCode el useId

EmailCode.belongsTo(User)
User.hasMany(EmailCode)