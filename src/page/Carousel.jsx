import { Carousel } from "bootstrap";

const CustomCarousel = () => {
    return (
        <div>
          <div id="carouselExample" class="carousel slide my-4" data-bs-ride="carousel" data-bs-interval="4000">
              <div class="carousel-inner">
                  <div class="carousel-item active">
                      <img src="../src/assets/iklan_1.jpg.png" class="d-block w-100 mx-auto rounded" alt="..."></img>
                  </div>
                  <div className="carousel-item">
                      <img src="../src/assets/iklan_2.jpg.png" class="d-block w-100 mx-auto rounded" alt="..."></img>
                  </div>
                  <div className="carousel-item">
                      <img src="../src/assets/iklan_3.jpg.png" class="d-block w-100 mx-auto rounded" alt="..."></img>
                  </div>
              </div>
              <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Previous</span>
              </button>
              <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Next</span>
              </button>
          </div>
        </div>
    );
}

export default CustomCarousel;
