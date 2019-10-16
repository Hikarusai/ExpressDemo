const shortid=require('shortid');
const db=require('../data');

module.exports.create=(rq,rs)=>{
    rs.render('create');
};

module.exports.postCreate=(rq,rs)=>{
	rq.body.id=shortid.generate();
	var errors=[];
	if(!rq.body.name)
	{
		errors.push('Name is required');
	}
	if(!rq.body.phone)
	{
		errors.push('Phone is required');
	}
	if(errors.length)
	{
		 rs.render('create',{errors:errors,values:rq.body});
		 return;
	}
	
	db.get('users').push(rq.body).write();
	rs.redirect('/user');
};
