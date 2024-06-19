import { useSelector } from "react-redux"

const Counter = () => {
    const count = useSelector((state) => state.count)
    // console.log(count);
  return (
    <div>
        <h2>{count}</h2>
    </div>
  )
}

export default Counter