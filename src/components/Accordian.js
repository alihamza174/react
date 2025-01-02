import { useState } from "react"

export default function Accordian(){
  const [isActive, setisActive] = useState(false)
  return (
    <>
      <h2>Almaty, Kazakhstan</h2>
      <Panel title="Ali" isActive={true}> O asl dlas d</Panel>
      <Panel title="Hamza">this is sakdsannd kasscikckans ikas scklja slkcj askljjkz alkss ljjsa cljsd xcljjasaksnzn</Panel>
    </>
  )
}

function Panel({title, children, isActive}){
 return (
  <>
     <section className="panel">
      <h3>{title}</h3>
      {isActive ? (<p>{children}</p>) : (<button>show</button>)}
    </section>
  </>
 )
}