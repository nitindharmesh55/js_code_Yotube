// const App = ()=>{
//   return <section>Hello</section>
// }
// export default App;

// What are the Components: Components are independent and reusable bits of code;
// They work as javascipt function but work in isolation and return HTML


// Keep in mind: Name of the Component Should be UpperCase;
// and Return HTML
import Header from "./components/Header";
import Greet from "./components/greet";
import Love from "./components/Love";
// import footer from"./components/footer";
import Footer from "./components/footer";
import MainContent from "./components/MainContent";
import Welcome from "./components/welcome";
import Expression from "./components/Expression";


function App(){
  return <div>
    <Header />
    <Greet />
    <Love />
    <MainContent />
    <Welcome/>
    <Expression/>


    <Footer />
  </div>
}
export default App;

// Time:23:09 from huxen;


