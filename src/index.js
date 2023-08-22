import React from "react";
import ReactDOM from "react-dom";
import "./index.css";


const Post = ({name, logo, subtitle,reference, time, thumb, content,title, text}) => (
      <div className="f-card">
      <div className="header">
        <div className="options"><i className="fa fa-chevron-down"></i></div>
        <img className="co-logo" src={logo} alt=""></img>
        <div className="co-name"><a href="https://react-app-a89bc.web.app/">{name}</a></div>
        <div className="time"><a href="https://react-app-a89bc.web.app/">{time}</a> · <i className="fa fa-globe"></i></div>
      </div>
      <div className="content">
        <p>{content}
          <a href="https://react-app-a89bc.web.app/"> {text} </a> See More</p>
      </div>

      <div className="reference">
        <img className="reference-thumb" src={thumb} alt="" />
        <div className="reference-content">
          <div className="reference-title">{title}</div>
          <div className="reference-subtitle">{subtitle}</div>
          <div className="reference-font">{reference}</div>
        </div>
      </div>
      <div className="social">
        <div className="social-content"></div>
        <div className="social-buttons">
          <span><i className="fa fa-thumbs-up"></i>Like</span>
          <span><i className="fa fa-comment"></i>Comment</span>
          <span><i className="fa fa-share"></i>Share</span></div>
      </div>
    </div>
   
  );

ReactDOM.render(
  <div>
    <Post
      title={"My first Firebase Hosting Assignment.| REACT APP"}
      post={"https://assets.thehansindia.com/h-upload/2022/06/10/1297107-robbo.webp"}
      logo={"https://uploads-ssl.webflow.com/646218c67da47160c64a84d5/64634bf6bf1d95ef8010e208_86.png"}
      name={"Salman Javeed"}
      time={"2h"}
      content={"a well-organized and reputed organization where I can utilize all my efforts"}
      thumb={"https://assets.thehansindia.com/h-upload/2022/06/10/1297107-robbo.webp"}
      text={"Google Firebase Console"}
      subtitle={"Azure ChatGPT: Private and secure ChatGPT for internal enterprise use"}
      reference={"ABC Refrence"}
    />

    <Post
      title={"My first Firebase Hosting Assignment.| REACT APP"}
      post={"https://www.elegantthemes.com/blog/wp-content/uploads/2023/06/What-is-AI-1.jpg"}
      logo={"https://uploads-ssl.webflow.com/646218c67da47160c64a84d5/64634a2e52ad093eec7cec96_83.png"}
      name={"Kashif Amin"}
      time={"3h"}
      content={"a well-organized and reputed organization where I can utilize all my efforts"}
      thumb={"https://www.elegantthemes.com/blog/wp-content/uploads/2023/06/What-is-AI-1.jpg"}
      text={"Google Firebase Console"}
      subtitle={"ChatGPT clone made with MERN and uses OpenAI API"}
      reference={"ABC Refrence"}
    />

    <Post
      title={"My first Firebase Hosting Assignment.| REACT APP"}
      post={"https://assets.thehansindia.com/h-upload/2022/06/10/1297107-robbo.webp"}
      logo={"https://cdn.pixabay.com/photo/2022/12/11/04/11/thumbs-up-7648171_640.png"}
      name={"Jameel Kalam"}
      time={"5h"}
      content={"a well-organized and reputed organization where I can utilize all my efforts"}
      thumb={"https://news.uchicago.edu/sites/default/files/styles/full_width/public/images/2023-07/Human%20aware%20AI%20hero.png?itok=BL5ceKsp"}
      text={"Google Firebase Console"}
      subtitle={"ChatGPT Next Web: One-Click to deploy your own ChatGPT web UI"}
      reference={"ABC Refrence"}
    />

    <Post
      title={"9 Tips to Write Irresistible Blog Post Titles (With Examples!).| REACT APP"}
      post={"https://assets.thehansindia.com/h-upload/2022/06/10/1297107-robbo.webp"}
      logo={"https://i.kym-cdn.com/photos/images/newsfeed/002/355/520/773.png"}
      name={"Subhan Ali"}
      time={"4h"}
      content={"a well-organized and reputed organization where I can utilize all my efforts"}
      thumb={"https://www.chitkara.edu.in/blogs/wp-content/uploads/2022/05/artificial-intellegence.jpg"}
      text={"Google Firebase Console"}
      subtitle={"This facebook card is designed with React and hosted with Firebase Google"}
      reference={"ChatGPT Next Web One-Click to deploy UI"}
    />

    <Post
      title={"15 Types Of Blog Post Titles That Get Clicked: A Beginner’s Guide.| REACT APP"}
      post={"https://assets.thehansindia.com/h-upload/2022/06/10/1297107-robbo.webp"}
      logo={"https://uploads-ssl.webflow.com/646218c67da47160c64a84d5/64634bf3888b02605c3c69d3_86.png"}
      name={"Nadir Aziz"}
      time={"2h"}
      content={"a well-organized and reputed organization where I can utilize all my efforts"}
      thumb={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9NgGSYi_SWi-Rir-_AQplxYFTkkU8ylrhPg&usqp=CAU"}
      text={"Google Firebase Console"}
      subtitle={"This facebook card is designed with React and hosted with Firebase Google"}
      reference={"ABC Refrence"}
    />

  </div>, document.querySelector("#root"));