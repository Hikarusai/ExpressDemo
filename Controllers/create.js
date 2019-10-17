const shortid=require('shortid');
const db=require('../data');

module.exports.create=(rq,rs)=>{
    rs.render('create');
};

module.exports.postCreate=(rq,rs)=>{
	
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
	rq.body.id=shortid.generate();
	rq.body.avatar=rq.file.path.split('\\').slice(1).join('/');
	db.get('users').push(rq.body).write();
	rs.redirect('/user');
};
