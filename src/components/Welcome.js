// write code for Welcome component here

export default Welcome;

function Welcome(props) {
    return (
        <div>
            <h1>Hey {props.name}!</h1>
            <h2>Welcome to Newton School.</h2>
        </div>
    );
}
