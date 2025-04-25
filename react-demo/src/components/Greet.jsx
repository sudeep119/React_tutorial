let Greet=(param)=>{
    const arr=["sudee","bomb","Kassss"]
    return (<div>
        <p>Helloo {param.name} and {param.age}</p>
        <h2>Greetings</h2>
        <ul>
            {arr.map((ele,ind)=>{
               return <li key={ind}>{ele}</li>
            }
            )}
        </ul>
    </div>);
}

export default Greet;