module.exports = (req, res, next, permitted) => {
    
    let roles;

    if( ! req.session.currentUser)
    res.status(403).json({error: {message: "Not authenticated"}});

    else
    roles = req.session.currentUser.roles.filter(user_role => permitted.includes(user_role.roleid));

    if( ! roles.length)
    res.status(403).json({error: {message: "Not allowed"}});
    else
    next();
}
