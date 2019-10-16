const db=require('../data');


module.exports.login=(rq,rs)=>{
	rs.render('login');
};
module.exports.postLogin=(rq,rs)=>{
	var email=rq.body.email;
	var passwork=rq.body.passwork;
	var user=db.get('users').find({email:email}).value();
	if(!user)
	{
		rs.render('login',{errors:['Email is not exist !'],values:rq.body});
		return;
	}
	if(user.passwork !== passwork)
	{
		rs.render('login',{errors:['Wrong passwork !'],values:rq.body});
		return;
	}
	rs.cookie('userId',user.id,{signed:true});
	rs.redirect('/user');
};