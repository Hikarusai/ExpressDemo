const db=require('../data');

module.exports.requireAuth=(rq,rs,next)=>{
	if(!rq.signedCookies.userId)
	{
		rs.redirect('/login');
		return;
	}
	var user=db.get('users').find({id:rq.signedCookies.userId}).value();
	if(!user)
	{
		rs.redirect('/login');
		return;
	}
	rs.locals.user=user;
	next();

};