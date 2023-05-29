const Product = require('../models/product')

const getAllProductsStatic = async (req, res, next) => {
   const products = await Product.find({ featured: true })
   res.status(200).json({ nbHits: products.length, products })
   // const error = new Error(' you are damn it')
   // return next(error)
   // throw new Error('testing async errors')
   // res.status(200).json({ msg: 'products testing route' })

}

const getAllProducts = async (req, res) => {
   const { featured, company, name, sort } = req.query
   const queryObject = {}
   if (featured) {
      queryObject.featured = featured === 'true' ? true : false
   }
   if (company) {
      queryObject.company = company
   }
   if (name) {
      queryObject.name = { $regex: name, $options: 'i' }
   }
   console.log(queryObject);

   const products = await Product.find(queryObject);
   res.status(200).json({ nbHits: products.length, products })
}


module.exports = {
   getAllProducts,
   getAllProductsStatic
}