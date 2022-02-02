import video from "../data/video.js";
import Demo from "./Demo.js";

function App() {
  return (
    <div className="App">
      
      <Demo title={video.title} uri={video.embedUrl} views={video.views} upvotes={video.upvotes} downvotes={video.downvotes} comments={video.comments} createdAt={video.createdAt} />
    </div>
  );
}

export default App;
