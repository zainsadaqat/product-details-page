


const DetailsPage = () => {
  return (
    <section className= "ml-5" >
      {/* Left Side */}
      <div>
 
      
      </div>
      {/* Right Side */}
      <div className>
      <h1 className="text-3xl font-bold uppercase">Hello world!</h1>
      <img  src={'/src/assets/chair-image.webp'} />
      
        
        
        

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

        <div >
          <label>Quantity</label>
          <select >
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select>
        </div>

        <div>
          <h3>Price</h3>
          <p>$499.99</p>
        </div>

        <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 text-sm p-5 rounded " >Add to cart</button>
      </div>
    </section>
  );
};

export default DetailsPage;
