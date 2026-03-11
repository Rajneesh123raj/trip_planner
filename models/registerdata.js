// core modules
const fs = require("fs").promises;
const path = require("path");

module.exports = class RegisterData {
  constructor(name, email, password) {
    this.name = name;
    this.email = email;
    this.password = password;
  }

  // Save new user
  async save() {
    const filePath = path.join(__dirname, "../data/regdata.json");

    try {
      // read existing users utf-8 encoding is important to get string data instead of buffer
      const fileContent = await fs.readFile(filePath, "utf-8");
      const users = JSON.parse(fileContent);

      users.push(this);

      // write updated data
      await fs.writeFile(filePath, JSON.stringify(users, null, 2));
    } catch (err) {
      // if file does not exist
      await fs.writeFile(filePath, JSON.stringify([this], null, 2));
    }
  }

  // Fetch all users
  static async fetchAll() {
    const filePath = path.join(__dirname, "../data/regdata.json");

    try {
      const fileContent = await fs.readFile(filePath, "utf-8");
      return JSON.parse(fileContent);
    } catch (err) {
      return [];
    }
  }
};