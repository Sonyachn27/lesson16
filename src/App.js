import './App.css';
import { useState } from 'react';
import {ReactComponent as ReactLogo} from './done.svg';
import {ReactComponent as CommentsLogo} from './comment.svg';
import {ReactComponent as SharedLogo} from './exchange.svg';
import {ReactComponent as FollowLogo} from './heart.svg';
import {ReactComponent as DownloadLogo} from './download.svg';
 const ANAKYN_IMG = "https://i.pinimg.com/736x/eb/c3/48/ebc348d81886de5912ac88c4c8dd6725.jpg"
 const RAY_IMAGE = "https://images.squarespace-cdn.com/content/v1/51b3dc8ee4b051b96ceb10de/f443c983-8ee2-436c-9dca-2cb5bab286c9/daisy-ridley-will-reprise-her-role-as-rey-skywalker-in-new-star-wars-movie.jpg";
  const author = {
  name: "Anakin Skywalker",
  photo: ANAKYN_IMG,
  nickname: "@dart_vader"
}
const content ="WTF? Who is Ray? Why she is Skywalker? Luke...?";
const data = '26 лют.'
function  Info(){
  return (
    <div className='autor_wrap'>
    <h2>{author.name} </h2>
    <a className='link'
    href='#'> 
    {author.nickname}
    </a>
    <ReactLogo />
    <span> {data}</span>
    </div>
  );
}

function Comments() {
  const [count, setCount] = useState(475);
  function handleClick() {
    setCount(count + 1);
  }
  return (
    <button className='btn comments' onClick={handleClick}>
    <CommentsLogo /> 
    {count}
    </button>
  );
}
function Shared() {
  const [count, setCount] = useState(146);
  function handleClick() {
    setCount(count + 1);
  }
  return (
    <button className='btn shared' onClick={handleClick}>
    <SharedLogo /> 
    {count}
    </button>
  );
}
function Follow () {
  
  const [count, setCount] = useState(887);
  function handleClick() {
    setCount(count + 1);
   }
   return (
    <button className='btn follow'
     onClick={handleClick}>
<FollowLogo />
    {count}
    </button>
  );
}
function Download() {
  return (
    <button className='btn download'>
    <DownloadLogo />
    </button>
  );
}
export function Post(){
  return (
    <div className='Main'> 
    <div className='User-img'> 
    <img src={ANAKYN_IMG} alt={author.name}></img>
    </div>
    <div className='user_info'> 
    <div className='user_info__wrap'>
    <Info />
    </div>
    <span className='span_content'> {content} </span>
    <div className='rey_photo'> 
    <img src={RAY_IMAGE}></img>
    </div>
    <div className='btn_wrap'> 
    <Comments />
    <Shared />
    <Follow />
    <Download />
    </div>
    </div>
    
   
    
    </div>
    
  )
}

export default Post;

