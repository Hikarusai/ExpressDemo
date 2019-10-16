const db=require('../data');

module.exports.user=(rq,rs)=>{
	rs.render('user',{users:db.get('users').value()});
};

module.exports.userSearch=(rq,rs)=>{
	var q=rq.query.q;
	var searchUser=db.get('users').value().filter(function(user){
		return user.name.toLowerCase().indexOf(q.toLowerCase()) !==-1;
	});
	rs.render('user',{users:searchUser});
};

module.exports.userView=(rq,rs)=>{
	var id=rq.params.id;
	var userN=db.get('users').find({id:id}).value();
	rs.render('view',{ds:userN});
};