module.exports = class ProductsRepository {
  constructor(dbAdapter) {
    this.dbAdapter = dbAdapter;
  }

  async findAllProducts() {
    // const findAllProducts = 'SELECT id, name, shortSpecs, image, qty, price FROM products'
    const findAllProducts = `SELECT 
                              products.id,
                              products.name, 
                              products.shortSpecs, 
                              products.image, 
                              products.qty, 
                              products.price, 
                              specs.szelesseg, 
                              specs.hosszusag, 
                              specs.vastagsag, 
                              specs.megapixel, 
                              specs.rom, 
                              specs.processzor  
                            FROM 
                              products
                            INNER JOIN
                              specs ON products.id = specs.product_id`
    try {
      const products = await this.dbAdapter.all(findAllProducts);
      return products;
    } catch (error) {
      console.error(error);
    }
  }

  async findAllProductsById(id) {
    // const findProductById = 'SELECT id, name, shortSpecs, image, qty, price FROM products WHERE id = ?'
    const findProductById = `SELECT 
                              products.id,
                              products.name, 
                              products.shortSpecs, 
                              products.image, 
                              products.qty, 
                              products.price, 
                              specs.szelesseg, 
                              specs.hosszusag, 
                              specs.vastagsag, 
                              specs.megapixel, 
                              specs.rom, 
                              specs.processzor  
                            FROM 
                              products
                            INNER JOIN
                              specs ON products.id = specs.product_id
                            WHERE
                              products.id = ?`
    try {
      const product = await this.dbAdapter.get(findProductById, [id]);
      return product;
    } catch (error) {
      console.error(error);
    }
  }


}