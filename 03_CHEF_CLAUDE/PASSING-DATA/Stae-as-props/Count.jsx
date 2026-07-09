export default function Count(props) {
    console.log("Count rende");
    
    return (
        <h2 className="count">{props.number}</h2>
    )
}