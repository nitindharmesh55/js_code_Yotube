const Name = "Nitin";
const CurrentTime = new Date();
const Greet = ()=>{
    return <div>
        <h1>NitinDharmeh is king</h1>
        <h1>{Name}</h1>
        <p>{CurrentTime.toDateString()}</p>
    </div>
}

export default Greet;