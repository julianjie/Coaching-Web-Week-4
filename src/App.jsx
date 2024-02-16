// import './index.css'
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'
import Home from './page/Home'
import ListProduct from './page/ListProduct';
import DetailProduct from './page/DetailProduct';
import Carousel from './page/Carousel';
import Footer from './page/Footer';


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<ListProduct />} />
          <Route path='/products/:id' element={<DetailProduct />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

function Layout() {
  return (
    <div >
      <header class = 'bg-secondary'>
        <nav class="navbar navbar-expand-lg bg-color">
          <div class="container-fluid">
          <img src="../src/assets/Logo Shopee.png" alt="Logo" width="50" height="50" class="d-inline-block align-text-top me-4"></img>
            <a class="navbar-brand text-warning fs-2" href="/">Shopee</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link active fs-5 me-3" aria-current="page" href="/products">Product</a>
                </li>
              </ul>
              <form class="d-flex input-group" role="search">
                 <input class="form-control me-3" type="search" placeholder="Search" aria-label="Sizing example input" ></input>
                 <button class="btn btn-outline-warning me-2 rounded-3" type="button">Masuk</button>
                 <button class="btn btn-sm btn-outline-light rounded-3" type="button">Daftar</button>
              </form>
            </div>
          </div>
        </nav>
      </header>
      <main>
        <Carousel />
        <ListProduct />
        <Outlet />
      </main>
      < Footer/>s
    </div>
  )
}