const getUser = (id, callback) => {
  const user = {
    id,
    name: 'Vanitus',
  };
  setTimeout(() => {
    callback(user);
  }, 3000);
};

getUser(17, (userObject) => {
  console.log(userObject);
});
