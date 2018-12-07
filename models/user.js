module.exports = (dodo, type) => {
  let User = dodo.define('user', {
    email: { type: type.STRING, unique: true },
    password: type.STRING 
  });
  return User;
}
