
let path = process.env.PUBLIC_URL;
let image = "/images/UcYBL5V0xWQ-unsplash.jpg"
const Content = () =>{
  return (
<div className="content">
  <h1>Full Stack Developer</h1>

  <img src={path+image} alt="image1"></img>


<section>
<h1>Hard skills</h1>
<i class="fas fa-database fa-10x"></i>
<i class="fab fa-js-square fa-10x"></i>
<i class="fab fa-react fa-10x"></i>
<i class="fab fa-node fa-10x"></i>

<i class="fab fa-java fa-10x"></i>
<i class="fab fa-git-alt fa-10x"></i>
</section>

<section>
<h1>Soft skills</h1>
<p>Fast Learning</p>
<p>Problem solving</p>
<p>Patiente</p>
<p>Communication</p>

</section>
<section>
<h1>Projects</h1>

</section>
<section>
<h1>Carrossel</h1>

</section>
<section>
<h1>Portifolio</h1>

</section>


</div>
    )
}
export default Content;
