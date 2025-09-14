import userIcon from '../user_icon.png';
const Navigation = ()=>{
    return  <nav>
      <div className="logo">
        <img src={userIcon} alt="" srcset="" />
      </div>

      <ul>
        <li href="#">Menu</li>
        <li href="#">Location</li>
        <li href="#">About</li>s
        <li href="#">Contact</li>

      </ul>

      <button>Login</button>
    
    </nav>
}
export default Navigation;