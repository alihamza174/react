function Item({name, isPackAble}){
  return (
    <li className="item">
      {isPackAble ? (<del>name ✅ </del>) : (name + ' testings')}
    </li>
  )
}

export default function PackageList(){
  return (
    <div className="container">
      <h1>this is list o fruits</h1>
      <Item name="fruit 1" isPackAble={true}/>
      <Item name="fruit 2" isPackAble={true}/>
      <Item name="fruit 3" isPackAble={false}/>
    </div>
  )
}