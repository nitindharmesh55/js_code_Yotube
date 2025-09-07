const Copy = ()=>{
    const copyHandle = ()=>{
        alert("Don't steal it!!");
    }

    return <div>
        <p onCopy={copyHandle}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio porro alias repellat voluptate! Nesciunt labore assumenda nam excepturi expedita culpa sunt in qui dolore? Pariatur.</p>
    </div>
}

export default Copy;

// 1:47