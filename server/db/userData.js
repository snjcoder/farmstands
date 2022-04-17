const initialData = require("./user.json");
const { createUser } = require("./model/userModel");
const loadInitialData = async () => {
  for (let i = 0; i < initialData.length; i++) {
    const user = initialData[i];
    try {
      console.log(`creating user ${user.name}`);
      const newUser = await createUser(user);
      console.log(`created user ${newUser.name} with id ${newUser._id}`);
    } catch (err) {
      console.log(`error creating user ${user.name}`);
      console.log(err.message);
    }
  }
  console.log("finished loading initial data");
};
loadInitialData();
