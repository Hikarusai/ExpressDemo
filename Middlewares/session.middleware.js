const db=require('../data');
const shortid=require('shortid');

module.exports=(rq,rs,next)=>{
	var sessionId=shortid.generate();
	if(!rq.signedCookies.sessionId)
	{
		rs.cookie('sessionId',sessionId,{signed:true});
		db.get('sessionUser').push({
			id:sessionId

		}).write();
	}
	
	next();
};


