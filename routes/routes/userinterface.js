var express = require('express');
var router = express.Router();
var pool=require('./pool')
var upload=require('./multer');

router.get('/display_all_category',function(req, res, next) {
    pool.query("select * from category",function(error,result){
     if(error)
     { console.log(error)
      return res.status(500).json({data:[]}) 
     }
     else
     { console.log("RESULT:",result)
       return res.status(200).json({data:result}) 
     }
    })
})

router.get('/display_all_banners',function(req, res, next) {
  pool.query("select * from banners",function(error,result){
   if(error)
   { console.log(error)
    return res.status(500).json({data:[]}) 
   }
   else
   { console.log("RESULT:",result)
     return res.status(200).json({data:result[0]}) 
   }
  })
})




router.post('/display_all_subcategory',function(req, res, next) {
  pool.query("select * from subcategory where categoryid=?",[req.body.categoryid],function(error,result){
   if(error)
   { console.log(error)
    return res.status(500).json({data:[]}) 
   }
   else
   { console.log("RESULT:",result)
     return res.status(200).json({data:result}) 
   }
  })
})

router.post('/display_all_products_salestatus', function (req, res, next) {
  pool.query("select P.*,(select C.categoryname from category C where C.categoryid=P.categoryid) as categoryname,(select S.subcategoryname from subcategory S where S.subcategoryid=P.subcategoryid) as subcategoryname from products P where P.salestatus=?",[req.body.salestatus], function (error, result) {
      if (error) {
          console.log(error)
          return res.status(500).json({ data: [] })
      }
      else {
          return res.status(200).json({ data: result })
      }

  })
});

router.post('/display_all_products_trending', function (req, res, next) {
  pool.query("select P.*,(select C.categoryname from category C where C.categoryid=P.categoryid) as categoryname,(select S.subcategoryname from subcategory S where S.subcategoryid=P.subcategoryid) as subcategoryname from products P where P.salestatus=?",[req.body.salestatus], function (error, result) {
      if (error) {
          console.log(error)
          return res.status(500).json({ data: [] })
      }
      else {
          return res.status(200).json({ data: result })
      }

  })
});


router.post('/display_all_products_popular', function (req, res, next) {
  pool.query("select P.*,(select C.categoryname from category C where C.categoryid=P.categoryid) as categoryname,(select S.subcategoryname from subcategory S where S.subcategoryid=P.subcategoryid) as subcategoryname from products P where P.salestatus=?",[req.body.salestatus], function (error, result) {
      if (error) {
          console.log(error)
          return res.status(500).json({ data: [] })
      }
      else {
          return res.status(200).json({ data: result })
      }

  })
});

router.post('/display_all_subcategory_by_priority',function(req, res, next) {
  pool.query("select * from subcategory where bannerpriority=?",[req.body.priority],function(error,result){
   if(error)
   { console.log(error)
    return res.status(500).json({data:[]}) 
   }
   else
   { console.log("RESULT:",result)
     return res.status(200).json({data:result}) 
   }
  })
})

router.post('/fetch_all_products_by_subcategory', function (req, res, next) {
  pool.query("select P.*,(select C.categoryname from category C where C.categoryid=P.categoryid) as categoryname,(select S.subcategoryname from subcategory S where S.subcategoryid=P.subcategoryid) as subcategoryname from products P where P.subcategoryid=?",[req.body.subcategoryid], function (error, result) {
      if (error) {
          console.log(error)
          return res.status(500).json({ data: [] })
      }
      else {
          return res.status(200).json({ data: result })
      }

  })
});


router.post('/display_all_subcategory_by_priority3',function(req, res, next) {
  pool.query("select * from subcategory where bannerpriority=?",[req.body.priority],function(error,result){
   if(error)
   { console.log(error)
    return res.status(500).json({data:[]}) 
   }
   else
   { console.log("RESULT:",result)
     return res.status(200).json({data:result}) 
   }
  })
})

router.post('/display_all_subcategory_by_priority4',function(req, res, next) {
  pool.query("select * from subcategory where bannerpriority=?",[req.body.priority],function(error,result){
   if(error)
   { console.log(error)
    return res.status(500).json({data:[]}) 
   }
   else
   { console.log("RESULT:",result)
     return res.status(200).json({data:result}) 
   }
  })
})


module.exports=router