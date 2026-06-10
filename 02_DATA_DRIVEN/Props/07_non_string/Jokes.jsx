export default function Joke(props) {
console.log(props);
console.log(props.upvotes+1);

console.log(!props.isPun);


    return (
        <>
            <p className="setup">{props.setup}</p>
            <p className="punchline">{props.punchline}</p>
            <hr />
        </>
    )
}
