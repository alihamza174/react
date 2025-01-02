const user = {
  name: 'ali hamza',
  age: '30'
}

export default function Profile(){
  return (
    <>
      <h1>{user.name}</h1>
      <p>{user.age}</p>
    </>
  )
}