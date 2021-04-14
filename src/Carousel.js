var img1="img1.jpg"
var img2="img2.jpg"
var img3="img3.jpg"

var carouselStyle = {
  height:"300px"
}

function Crarousal(){
    return(
      <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img style={carouselStyle} class="d-block w-100" src={img1} alt="First slide" />
    </div>
    <div class="carousel-item">
      <img style={carouselStyle} class="d-block w-100" src={img2} alt="Second slide" />
    </div>
    <div class="carousel-item">
      <img style={carouselStyle} class="d-block w-100" src={img3} alt="Third slide"/>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>        
    )
}

export default Crarousal