// Passport middleware
module.exports = {
    ensureGuest: (req, res, next) => {
        if (req.isAuthenticated()) {
            return res.redirect('/survey')
        }
        next()
    },
    ensureAuth: (req, res, next) => {
        if (!req.isAuthenticated()) {
            return res.redirect('/login') 
        }
        next()
    },

}