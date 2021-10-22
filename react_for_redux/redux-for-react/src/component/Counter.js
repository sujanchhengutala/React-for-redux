import { useSelector } from "react-redux"


const Counter = ()=>{
    const counter = useSelector( state => state.counter)
    return(
    <>
    <div> {counter} </div>
    </>
    )
}
export default Counter;