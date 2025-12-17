import MessageCard from "./MessageCard";

function App(){
  return(
    <div className="container">
      <MessageCard
      title="Card 1"
      message="This is Card 1"
      />
      <MessageCard
      title="Card 2"
      message="This is Card 2"
      />
      <MessageCard
      title="Card 3"
      message="This is Card 3"
      />
      <MessageCard
      title="Card 4"
      message="This is Card 4"
      />
    </div>
  )
}
export default App