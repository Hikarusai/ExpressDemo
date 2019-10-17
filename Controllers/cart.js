const db=require('../data');

module.exports.addToCart=(rq,rs)=>{
	var productId=rq.params.productId;
	var sessionId=rq.signedCookies.sessionId;
	if(!sessionId)
	{
		rs.redirect('/product');
		return;
	}
	var count=
	db.get('sessionUser')
	  .find({id:sessionId})
	  .get('cart.' +productId,0 )
	  .value();

	db.get('sessionUser')
	  .find({id:sessionId})
	  .set('cart.' +productId,count+1 )
	  .write();

	rs.redirect('/product');
};
