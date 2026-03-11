const RegisterData = require('../models/registerdata');

exports.getuser = (req, res, next) => {
    res.render("login");
};

exports.postuser = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        
        // 1️⃣ JSON file se sabhi users padho
        const users = await RegisterData.fetchAll();
        
        // 2️⃣ Email se user dhundo
        const user = users.find(u => u.email === email);
        
        // 3️⃣ User not found
        if (!user) {
            return res.send('User not found! Please signup first.');
        }
        
        // 4️⃣ Password check karo
        if (user.password !== password) {
            return res.send('Incorrect password!');
        }
        
        // 5️⃣ ✅ SUCCESS - Session create karo
        req.session.userName = user.name;
        req.session.userEmail = user.email;
        
        // 6️⃣ Dashboard pe redirect
        res.redirect('/dashboard');
        
    } catch (err) {
        console.log('Login error:', err);
        res.send('Something went wrong!');
    }
};
// GET - Logout
exports.logoutuser = (req, res, next) => {
    req.session.destroy((err) => {
        if (err) {
            console.log('Logout error:', err);
        }
        res.redirect('/');
    });
};