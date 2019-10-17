const db=require('../data');
module.exports.product=(rq,rs)=>{
	var page=parseInt(rq.query.page) ||1;
	var perPage=8;
	var start=(page-1)*perPage;
	var end =page*perPage;

	rs.render('product',{product:db.get('product').value().slice(start,end)});	
	
};

