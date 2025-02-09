export default  async function ProductDetails({ 
    params,} : { params: Promise < { productId: string }>; } 
) {

   const  productId = (await params).productId;

    return (
        <div >
            <h1> details about the Products {productId}</h1>
        </div>
    );
    }