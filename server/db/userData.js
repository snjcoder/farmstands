const initialData = require("./user.json");
const { createUserModel } = require("./model/userModel");
const userData = async () => {
  for (let i = 0; i < initialData.length; i++) {
    const user = initialData[i];
    try {
      console.log(`creating user ${user.Username}`);
      const newUser = await createUserModel(user);
      console.log(`created user ${newUser.Username} with id ${newUser._id}`);
    } catch (err) {
      console.log(`error creating user ${user.Username}`);
      console.log(err.message);
    }
  }
  console.log("finished loading initial data");
};
userData();
