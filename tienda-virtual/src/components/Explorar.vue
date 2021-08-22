<template>
  <div class="explorar">
    <h1>Componente 1</h1>
    <div class="scape">
      <div class="card">
        <div class="prod-img">
          <img :src="image" alt="Product IMG" />
        </div>
        <div class="card-content">
          <h2>Product Name</h2>
          <p>Description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, fugit. Natus rerum sit ratione animi!</p>
          <span>$0,00</span>
        </div>
        <button type="button">Add to Cart</button>
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
        <button type="button">Add to Cart</button>
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
        <button type="button">Add to Cart</button>
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
        <button type="button">Add to Cart</button>
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
        <button type="button">Add to Cart</button>
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
        <button type="button">Add to Cart</button>
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
        <button type="button">Add to Cart</button>
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
        <button type="button">Add to Cart</button>
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
        <button type="button">Add to Cart</button>
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
        <button type="button">Add to Cart</button>
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
        <button type="button">Add to Cart</button>
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
        <button type="button">Add to Cart</button>
      </div>
    </div>
  </div>
</template>

<script>
import image from '../assets/logo.png'
export default {
  name: 'Explorar',
  props: {
    msg: String
  },
  data: function () {
        return {
            image: image
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.explorar {
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  padding: 5%;
  background-color: grey;
}
  .scape {
    display: flex;
    flex-flow: row wrap;
    margin: auto;
    background-color: rgb(185, 185, 185);
    justify-content: center;
  }

  .card {
    width: 20%;
    margin: 3%;
    background-color: rgb(134, 91, 91);
  }

  .card-content h2 {
    margin: .2rem;
  }

  .card .prod-img {
    width: 100%;
    background-color: rgb(77, 47, 47);
  }

 .card-content {
    padding: 1rem;
  }

  .card button {
    height: 50px;
    margin-bottom: 15px;
  }
</style>