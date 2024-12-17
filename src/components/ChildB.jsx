import ChildC from "./ChildC"


const ChildB = () => {
    console.log("hello world")
  return (
    <div>
         <ChildC/>
    </div>
  )
}

export default ChildB