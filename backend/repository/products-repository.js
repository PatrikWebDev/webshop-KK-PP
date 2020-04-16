module.exports = class ProductsRepository {
  constructor(dbAdapter) {
    this.dbAdapter = dbAdapter;
  }
  async findAllProducts() {
    const findAllProducts = 'SELECT id, name, shortSpecs, image, qty, price FROM products'
    try {
      const products = await this.dbAdapter.all(findAllProducts);
      return products;
    } catch (error) {
      console.error(error);
    }
  }


}