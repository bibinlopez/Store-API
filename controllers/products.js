

const getAllProductsStatic = async (req, res, next) => {
   // const error = new Error(' you are damn it')
   // return next(error)
   throw new Error('testing async errors')
   res.status(200).json({ msg: 'products testing route' })
}

const getAllProducts = async (req, res) => {
   res.status(200).json({ msg: 'products route' })
}


module.exports = {
   getAllProducts,
   getAllProductsStatic
}