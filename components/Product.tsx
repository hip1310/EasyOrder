import Link from "next/link";


const Product = ( element: any) => {
  // Destructure properties from the 'element' object

  return (
    <div>
      <Link href={`/product-detail`}>
        <img
          src={"images/coca-cola.webp"}
          alt={"Coca-Cola"}
          style={{    height: "14rem"}}
          className="w-full h-56 object-cover hover:scale-105 transition duration-500 mx-auto w-52 h-28"
        />
      </Link>
      {/* Display the product name */}
      <p className="text-center mb-0" style={{textAlign:"center"}}>{"Coca-Cola"}</p>
    </div>
  );
};

export default Product;
