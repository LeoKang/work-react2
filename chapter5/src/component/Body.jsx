function Body() {
    const numA = 1;
    const numB = 2;
    const strA = "안녕";
    const strB = "리액트";
    const boolA = true;
    const boolB = false;
    const objA = {
        a: 1,
        b: 2,
    }
    return (
        <div>
            <h1>body</h1>
            <h2>{numA + numB}</h2>
            <h2>{strA + strB}</h2>
            <h2>{String(boolA || boolB)}</h2>
            <h2>{objA.a}</h2>
            <h2>{objA.b}</h2>
        </div>
    )
}
export default Body;