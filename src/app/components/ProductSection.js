import productStyles from "@/app/styles/products.module.css";
import styles from "@/app/styles/common.module.css";
import Image from "next/image";
import Link from "next/link";

const ProductSection = () => {
  return (
    <section className={productStyles.main_section} id="product">
      <div className={styles.container}>
        <div>
          <h1>Products</h1>
          <div className={productStyles.products_content}>
            <div>
            <div className={productStyles.products_image}>
                <Image src="/sdk.png" width={45} height={45} />
              </div>
              <p className={productStyles.bold}>
                Server SDK for fingerprint recognition
              </p>
              <div className={productStyles.products_content_heading}>
                <Link href="">
                  <h2>SDK</h2>
                </Link>
              </div>
              <div>
                <p>
                  Detection, template extraction and matching (1:1, 1:N,
                  M:N).Scans and photo images are supported.
                </p>
              </div>
            </div>
            <div>
              <div className={productStyles.products_image}>
                <Image src="/api.png" width={45} height={45} />
              </div>
              <p className={productStyles.bold}>
                Server SDK for fingerprint recognition
              </p>
              <div className={productStyles.products_content_heading}>
                    <Link href="">
                        <h2>API</h2>
                    </Link> 
                    </div>
              <div>
                <p>
                  Easy integration of biometric features, microservices
                  architecture for system scaling and load balancing
                </p>
              </div>
            </div>
            <div>
            <div className={productStyles.products_image}>
                <Image src="/smartphone.png" width={45} height={45} />
              </div>
              
              <p className={productStyles.bold}>
                Server SDK for fingerprint recognition
              </p>
              <div className={productStyles.products_content_heading}>
                <Link href="">
                  <h2>Mobile SDK</h2>
                </Link>
              </div>
              <div>
                <p>
                  Easy integration of biometric features, microservices
                  architecture for system scaling and load balancing
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
