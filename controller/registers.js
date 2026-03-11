const data = require("../models/registerdata");

exports.getregister = (req, res, next) => {
  res.render("register");
};

exports.postregister = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    const newUser = new data(name, email, password);

    // wait until user is saved
    await newUser.save();
     const content = await data.fetchAll(); // This line is not necessary for saving, but you can use it to verify that the user was saved correctly. 
    console.log(content); // This will log all users, including the newly registered one.
    // agar sab users dekhna ho to:
    // const users = await data.fetchAll();
    // console.log(users);

    res.render("login");

  } catch (err) {
    console.log("Error while registering user:", err);
  }
};