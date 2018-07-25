var getUser = (id, callback) => {
    var user = {
        id: id,
        name: 'Vanitus'
    };
    setTimeout(()=>{
        callback(user)
    },3000);
    
};

getUser(17, (userObject) => {
    console.log(userObject);
});
