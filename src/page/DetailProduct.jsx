import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

const DetailProduct = () => {

  const { id } = useParams();

  const [products, setProducts] = useState({});

  const fetchData = async () => {
    const res = await axios.get('https://fakestoreapi.com/products/' + id)
    setProducts(res.data);
  }

  useEffect(() => {
    fetchData()
  }, []);


  return (
    <>
      <div className='col-md-6 d-flex align-items-center gap-5'>
  <img src={products?.image} style={{ height: 400, width: 400}} alt="Product Image" />
      <div className='ml-2'>
    <h4 className='text-uppercase text-black-50 mb-5'>
      {products?.category}
    </h4>
    <h1 className='display-5 mt-0'>
      {products?.title}
    </h1>
    <p class ='lead'>
      Rating {products?.rating?.rate} ({products?.rating?.count})
    </p>
    <h3 class ='display-5 fw-bold my-4 text-success'>
     $ {products?.price}
    </h3>
    <p class = 'lead'>{products?.description}</p>
    <button class ='btn btn-outline-dark px-4 py-2'>
      Keranjang
    </button>
  </div>
</div>

    </>






    // <div>
    //   ini detail product dari id: {id}
    //   <h3>{products?.title}</h3>
    //   <h5>{products?.category}</h5>
    //   <div>{products?.price}</div>
    //   <div>{products?.description}</div>
    //   <div>
    //     <img src={products?.image} style={{ width: 100 }} />
    //   </div>
    //   <div>{products?.rating?.rate} ({products?.rating?.count})</div>
    // </div>
  )
}

export default DetailProduct