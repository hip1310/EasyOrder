import { PlainLink } from "@/styles/SharedStyle";
import emotionStyled from "@emotion/styled";
import { StarHalfRounded, StarRounded } from "@mui/icons-material";
import { Button, Card } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const Product = (element: any) => {
  // Destructure properties from the 'element' object

  return (
    // <div>
    //   <Link href={`/product-detail`}>
    //     <Image
    //       src={"/images/coca-cola.webp"}
    //       alt={"Coca-Cola"}
    //       style={{ border: "1px solid " }}
    //       height={224}
    //       width={224}
    //       className="object-cover hover:scale-105 transition duration-500 mx-auto"
    //     />
    //   </Link>
    //   {/* Display the product name */}
    //   <p className="text-center mb-0" style={{ textAlign: "center" }}>
    //     {"Coca-Cola"}
    //   </p>
    // </div>
    <PlainLink href={`/product-detail`}>
      <CustomProductCard>
        <div>
          <Image
            alt="product"
            width="175"
            height="225"
            src="/images/coca-cola.webp"
          />

          <div className="product-name">
            <b className="text-center">Coca Cola</b>
          </div>
          <div className="text-left">
            <p>Refreshing and chilled coca cola drink quest your thurst </p>
            <div className="flex">
              <div className="rating-container">
                <StarRounded />
                <StarRounded />
                <StarRounded />
                <StarRounded />

                <StarHalfRounded />
              </div>
            </div>
          </div>
        </div>
        <Button
          className="add-cart-btn"
          // onClick={() => {
          //   router.push("/product");
          // }}
        >
          Add to cart
        </Button>
      </CustomProductCard>
    </PlainLink>
  );
};

export default Product;

const CustomProductCard = emotionStyled(Card)`
 && { 
  margin-top:16px;
  width:250px;
  padding: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 16px;
  gap:12px;
  color: black;
  :hover{
    box-shadow: 0px 4px 6px -1px rgba(0, 0, 0, 0.2);
    img{scale:1.1;}
  }
  img{
    width:100%;
    
    transition: all 0.5s linear;
  }
  .product-name{
    text-align:center;
    margin: 16px 0;
  }
  .add-cart-btn{
    background:rgb(221, 208, 200);
    border-radius: 15px;
    width: 100%;
    color: black;
    font-weight: bold;
    :hover{
      box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2);
    }
  }
  .rating-container{
    margin: auto;
  }
  
}
 
`;
