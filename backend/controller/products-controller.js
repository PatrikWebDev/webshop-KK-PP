const fs = require('fs');
const path = require('path')

module.exports = class ProductsController {
  constructor(productsRepository) {
    this.productsRepository = productsRepository;
  }

  async findProducts(req, res) {
    try {
      let products = await this.productsRepository.findAllProducts()
      products.forEach(product =>{ 
        const files = createImageUrlsForProduct(product.image)
        product.image = files;
      })
      res.json(products)
    } catch (error) {
      res.json(err)
    }

  }

  async findProductsById(req, res) {
    const { id } = req.params;
    if (id) {
      try {
        const product = await this.productsRepository.findAllProductsById(id)
        const files = createImageUrlsForProduct(product.image)
        product.image = files
        res.json(product)
      } catch (error) {
        res.json(err)
      }
    }
  }

}




function createImageUrlsForProduct(image) {
  const productImagesFolder = path.join(__dirname, `../public${image}/`)

  const files = []
  fs.readdirSync(productImagesFolder).forEach(fileName => {
    files.push(createUrls(image, fileName))
  });
  return files
  }

function createUrls(productImage, filename) {
  return `${productImage}/${filename}`
}