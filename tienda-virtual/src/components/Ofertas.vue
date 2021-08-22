<template>
  <div class="ofertas">
    <div class="main-offer">
      <img :src="image" alt="">
      <div class="main-offer_content">
        <h2>Oferta Principal</h2>
        <p>Description: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium beatae recusandae ratione voluptatem quam libero iure consequuntur at aperiam. Rem porro nam quibusdam, quaerat, maxime laudantium doloremque, magnam voluptatum doloribus optio quis officia? Numquam dolor natus odit fuga omnis veniam voluptatem culpa sequi, rem, architecto provident quia explicabo at nostrum.</p>
        <span>$0,00</span>
        <button type="button" class="main-offer-btn">Add to Cart</button>
      </div>
    </div>

    <div class="sec-offers">
      <div class="card">
        <div class="prod-img">
          <img :src="image" alt="Product IMG" />
        </div>
        <div class="card-content">
          <h2>Product Name</h2>
          <p>Description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, fugit. Natus rerum sit ratione animi!</p>
          <span>$0,00</span>
        </div>
        <button type="button" class="sec-offer-btn">Add to Cart</button>
      </div>
      <div class="card">
        <div class="prod-img">
          <img :src="image" alt="Product IMG" />
        </div>
        <div class="card-content">
          <h2>Product Name</h2>
          <p>Description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, fugit. Natus rerum sit ratione animi!</p>
          <span>$0,00</span>
        </div>
        <button type="button" class="sec-offer-btn">Add to Cart</button>
      </div>
      <div class="card">
        <div class="prod-img">
          <img :src="image" alt="Product IMG" />
        </div>
        <div class="card-content">
          <h2>Product Name</h2>
          <p>Description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, fugit. Natus rerum sit ratione animi!</p>
          <span>$0,00</span>
        </div>
        <button type="button" class="sec-offer-btn">Add to Cart</button>
      </div>
      <div class="card">
        <div class="prod-img">
          <img :src="image" alt="Product IMG" />
        </div>
        <div class="card-content">
          <h2>Product Name</h2>
          <p>Description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, fugit. Natus rerum sit ratione animi!</p>
          <span>$0,00</span>
        </div>
        <button type="button" class="sec-offer-btn">Add to Cart</button>
      </div>
      <div class="card">
        <div class="prod-img">
          <img :src="image" alt="Product IMG" />
        </div>
        <div class="card-content">
          <h2>Product Name</h2>
          <p>Description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, fugit. Natus rerum sit ratione animi!</p>
          <span>$0,00</span>
        </div>
        <button type="button" class="sec-offer-btn">Add to Cart</button>
      </div>
      <div class="card">
        <div class="prod-img">
          <img :src="image" alt="Product IMG" />
        </div>
        <div class="card-content">
          <h2>Product Name</h2>
          <p>Description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, fugit. Natus rerum sit ratione animi!</p>
          <span>$0,00</span>
        </div>
        <button type="button" class="sec-offer-btn">Add to Cart</button>
      </div>
      <div class="card">
        <div class="prod-img">
          <img :src="image" alt="Product IMG" />
        </div>
        <div class="card-content">
          <h2>Product Name</h2>
          <p>Description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, fugit. Natus rerum sit ratione animi!</p>
          <span>$0,00</span>
        </div>
        <button type="button" class="sec-offer-btn">Add to Cart</button>
      </div>
      <div class="card">
        <div class="prod-img">
          <img :src="image" alt="Product IMG" />
        </div>
        <div class="card-content">
          <h2>Product Name</h2>
          <p>Description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, fugit. Natus rerum sit ratione animi!</p>
          <span>$0,00</span>
        </div>
        <button type="button" class="sec-offer-btn">Add to Cart</button>
      </div>
      <div class="card">
        <div class="prod-img">
          <img :src="image" alt="Product IMG" />
        </div>
        <div class="card-content">
          <h2>Product Name</h2>
          <p>Description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, fugit. Natus rerum sit ratione animi!</p>
          <span>$0,00</span>
        </div>
        <button type="button" class="sec-offer-btn">Add to Cart</button>
      </div>
    </div>
  </div>
</template>

<script>
import image from '../assets/logo.png'
export default {
  name: 'Ofertas',
  props: {
    msg: String
  },
  data: function() {
    return {
      image: image
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .ofertas {
    display: flex;
    flex-flow: column nowrap;
    margin-top: 70px;
  }
  .main-offer {
    display: flex;
    flex-flow: row nowrap;
    background-color: rgb(211, 163, 163);
    margin: 8%;
    height: 45vh;
  }

  .main-offer img {
    height: 300px;
  }

  .main-offer_content {
    display: flex; 
    flex-flow: column;
    justify-content: space-between;
    align-items: center;
  }

  .main-offer-btn {
    width: 100px;
    background-color: rgb(137, 163, 240);
    margin-bottom: 15px;
  }

  .sec-offers {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
  }
  .card {
    width: 20%;
    margin: 3%;
    background-color: rgb(134, 91, 91);
  }

  .card .prod-img {
    width: 100%;
    background-color: rgb(77, 47, 47);
  }

 .card-content {
    padding: 1rem;
  }

  .sec-offer-btn {
    height: 50px;
    margin-bottom: 15px;
  }
    .card-content h2 {
    margin: .2rem;
  }
</style>