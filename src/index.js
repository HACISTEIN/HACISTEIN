import React from "react";
import ReactDOM from "react-dom";
import SingleComment from "./SingleComment";
import profile1 from "./image/brucewillis.jpg";
import profile2 from "./image/bonjovi.jpg";
import profile3 from "./image/melgibson.jpg";
import Header from "./Header";
import UserCard from "./UserCard";

const App = () => {
  return (
    <div>
      <Header />
      <div className="ui comments">
        <UserCard>
          {" "}
          <SingleComment
            name="Ali Kaya"
            date="CEO & Software Developer Manager"
            text="Yazılım bizim işimiz!"
            picture={profile1}
          />
        </UserCard>
        <UserCard>
          <SingleComment
            name="Yasin Güven Uğur"
            date="CEO & HQ Manager"
            text="Memleket Firma Görsün hey yawrum hey"
            picture={profile2}
          />
        </UserCard>
        <UserCard>
          <SingleComment
            name="Baran Erdoğan"
            date="CEO & Software Developer Manager"
            text="Yazıyorum öyleyse varım!"
            picture={profile3}
          />
        </UserCard>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
