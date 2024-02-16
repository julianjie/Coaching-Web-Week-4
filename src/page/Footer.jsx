import React from 'react';

const Footer = () => {
  return (
    <footer class="footer bg-light mt-5">
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <h5 class ='fw-bold text-warning'>Shopee</h5>
            <ul class="list-unstyled">
              <li><a href="#">Beranda</a></li>
              <li><a href="#">Kategori</a></li>
              <li><a href="#">Produk</a></li>
            </ul>
          </div>
          <div class="col-md-4">
            <h5>Kontak</h5>
            <p>Alamat: Jl. Dempo, No.01</p>
            <p>Email: CustomerService@Shopee.com</p>
            <p>Telepon: +62813-1234-5678</p>
          </div>
          <div class="col-md-4">
            <h5>Ikuti Kami</h5>
            <ul class="list-inline">
              <li class="list-inline-item"><a href="https://www.facebook.com/ShopeeID/"><i class="bi bi-facebook"></i></a></li>
              <li class="list-inline-item"><a href="https://twitter.com/ShopeeID"><i class="bi bi-twitter"></i></a></li>
              <li class="list-inline-item"><a href="https://www.instagram.com/shopee_id/"><i class="bi bi-instagram"></i></a></li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-md-12 text-center">
            <p>&copy; 2024 Shopee. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
