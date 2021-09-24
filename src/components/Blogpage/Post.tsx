import {useHistory} from "react-router-dom";
import ReactMarkdown from 'react-markdown';

interface IPostProps {
  Title: string;
  Image: any;
  Description: any;
  Date: string;
}

const Post = (props: IPostProps) => {
  let history = useHistory();
  let date = new Date(props.Date).toLocaleDateString();
  let bitmap : number[]= props.Image.data.data;
  //@ts-ignore
  let objImg: string = new Buffer.from(bitmap).toString("base64");

  const handleClick = () => {
    let location = {
      pathname: `/Post/${props.Title}`,
      state: { 
        Title: props.Title,
        Image: props.Image,
        Description: props.Description,
        Date: props.Date
      }
    }
    
    history.push(location);
  };

  return (
    <div className="flex w-9/12 mb-5 overflow-y-hidden bg-white rounded-lg shadow-lg h-1/3">
      <div className="flex w-1/4 rounded-l-lg">
        <img src={`data:image/png;base64,${objImg}`} alt={props.Title} className="flex w-full h-full bg-center rounded-l-lg"></img>
      </div>
      <div className="flex flex-col items-start w-9/12 h-full p-1">
        <h1 className="flex text-lg text-black md:text-2xl"><b>{props.Title}</b></h1>
        <p className="flex text-black text-md">{date}</p>
        <div className="flex flex-col w-full overflow-hidden text-lg text-transparent h-1/3 h-3/5 bg-clip-text bg-gradient-to-br from-black to-white">
          <ReactMarkdown children={props.Description}/>
        </div> 
        <button onClick={handleClick} className="text-sm text-purple-500 underline md:text-base">Read More</button>
      </div>
    </div>
  );
}

export default Post;
