import userIcon from '../user_icon.png';
const Hero = ()=>{
    return <main className="hero">
       <div className="hero-content">
        <h1>Your Feet Deserve the Best</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo dolore, expedita necessitatibus consequuntur atque voluptatibus sint perspiciatis, minima ratione architecto, exercitationem quia vero. Beatae, cupiditate?</p>

        <div className="hero-btn">
            <button>Shop Now</button>
            <button className='second'>Category</button>
        </div>
       </div>

       <div className="hero-img">
        <img src={userIcon} alt="" />
       </div>
    </main>
}
export default Hero;