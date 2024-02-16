import axios from 'axios'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ListProduct = () => {
  const navigate = useNavigate()

  const [products, setProducts] = useState([])

  const fetchData = async () => {
    const res = await axios.get('https://fakestoreapi.com/products')
    setProducts(res.data)
  }

  useEffect(() => {
    fetchData()
  }, []);

  return (
    <div className='d-flex flex-wrap justify-content-center gap-4 my-5'>
      {products.map((item, index) => (
        <div key={index} onClick={() => navigate('/products/' + item.id)} role='button'>
          <div class="card h-100" style={{ width: '25rem' }}>
            <img src={item.image} class="card-img-top h-50 mx-auto p-2 " alt="..." style={{ width: '10rem' }} />
            <div class="card-body">
              <h5 class="card-title">{item.title}</h5>
              <h4 class="card-text fs-6 ">{item.description}</h4>
              <h4 class="card-text text-success">$ {item.price}</h4>
            </div>
          </div>
          
        </div>
      ))}
    </div>
  )
}

export default ListProduct