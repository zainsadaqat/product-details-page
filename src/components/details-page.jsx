const DetailsPage = () => {
  return (
    <section>
      {/* Left Side */}
      <div>
        <img src="" alt="Product Image" className="product-image" />
      </div>
      {/* Right Side */}
      <div>
        <h1 className="text-2xl bg-slate">Martin - Easy Chair</h1>
        <div>
          <h3>Description</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            aspernatur necessitatibus, magnam quos ullam minima cum quidem
            asperiores dolorem corporis id omnis aperiam recusandae eveniet
            veritatis, quaerat consequatur enim corrupti?
          </p>
        </div>

        <div>
          <h3>Product Details</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            aspernatur necessitatibus, magnam quos ullam minima cum quidem
            asperiores dolorem corporis id omnis aperiam recusandae eveniet
            veritatis, quaerat consequatur enim corrupti?
          </p>
        </div>

        <div>
          <h3>Shipping & Returns</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            aspernatur necessitatibus, magnam quos ullam minima cum quidem
            asperiores dolorem corporis id omnis aperiam recusandae eveniet
            veritatis, quaerat consequatur enim corrupti?
          </p>
        </div>

        <div>
          <label>Color</label>
          <select>
            <option>Red</option>
            <option>Blue</option>
            <option>Green</option>
          </select>
        </div>

        <div>
          <label>Quantity</label>
          <select>
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select>
        </div>

        <div>
          <h3>Price</h3>
          <p>$499.99</p>
        </div>

        <button type="button">Add to cart</button>
      </div>
    </section>
  );
};

export default DetailsPage;
