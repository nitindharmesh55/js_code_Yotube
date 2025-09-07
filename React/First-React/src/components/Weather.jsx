const Below  = () => <h1>it' Cold Outside</h1>
const Between = () => <h1> It's Good OutSide</h1>
const Above = () => <h1>IT's Hot OutSide</h1>

const Weather = ({temp}) =>{
    if(temp < 15)
    {
      return <Below/>
    }
    else if(temp >= 15 &&  temp  < 25)
    {
        return <Between />
    }
    else
    {
        return <Above />
    }

}

const Temprature = ()=>{
    return (
        <div>
           <Weather temp={35} />   
        
        </div>
    );
}

export default Temprature;