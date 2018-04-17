const isAdmin = function(req, res, next) {
  try {
    const admin =
      req.headers.cookie
        .split(';')
        .find((c) => c.trim().startsWith('userRole='))
        .split('=')[1] === 'admin'
    admin ? next() : res.redirect('/login')
  } catch (e) {
    res.redirect('/login')
  }
}

module.exports = {
  isAdmin
}
