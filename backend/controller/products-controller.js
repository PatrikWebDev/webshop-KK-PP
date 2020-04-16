module.exports = class ProductsController {
  constructor(productsRepository) {
      this.productsRepository = productsRepository;
  }

  async findProducts(req, res) {
      const products = await this.productsRepository.findAllProducts()
      res.json(products)
  }


}