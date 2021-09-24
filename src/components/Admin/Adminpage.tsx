import {useEffect, useState, useContext} from "react";
import CreatePostForm from "./CreatePostForm";
import Modal from "./Modal";
import DeletePostForm from './DeletePostForm';
import EditPostForm from "./EditPostForm";
import RegisterForm from "./RegisterForm";
import api from '../../api/api';
import userContext from "../../context/userContext";
import {useHistory} from "react-router-dom";
import LoadingWheel from "../Common/LoadingWheel";

interface IPosts {
    _id: string;
    Title: string;
    Date: Date;
    Description: string;
    Image: any;
    MarkDown: boolean;
}
 
const Adminpage = () => {
    
    const [posts, setPosts] = useState<IPosts[]>([]);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [count, incrementCount] = useState(0);
    //@ts-ignore
    const { userData } = useContext(userContext);
    const history = useHistory();
    
    const updateOnModalClose = () => {
        return incrementCount(count + 1);
    }

    useEffect(()=> {
        console.log(process.env.REACT_APP_LOGIN_STATUS)
        if (((!userData) || (!userData.user) ||
            (userData && userData.user && userData.user !== process.env.REACT_APP_LOGIN_STATUS)) &&
            (sessionStorage.getItem('status') !== process.env.REACT_APP_LOGIN_STATUS))
        {
            history.push('/Login')
        }
        else {
            const getPosts = async () => {
                try {
                    api.defaults.headers.common['x-auth-token'] = sessionStorage.getItem('auth-token');
                    let response = await api.get('/api/blog/posts');
                    let data = response.data;
                    if( data.items && data.items.length > 0 ){
                        let newPosts: IPosts[] = data.items.map((e: IPosts) => e);
                        setPosts(newPosts);
                        setLoading(false);
                    }
                } catch( error: Error | any ) {
                    setError(error.message);
                    setLoading(false);
                }
            }
            setLoading(true);
            getPosts();
        }
    //eslint-disable-next-line
    }, [count]);

    const buttons = (post: IPosts) => {
        return (
            <div>
                <Modal Title="Delete Post" ButtonTitle="Delete" HandleClose={updateOnModalClose} ChildComponent={
                        <DeletePostForm title={post.Title} id={post._id} />       
                }/>
                <Modal Title="Edit Post" ButtonTitle="Edit" HandleClose={updateOnModalClose} ChildComponent={
                        <EditPostForm Post={post}/> 
                }/>
            </div>
        );    
    }

    const getRows = () => {
        let rows = posts.map((post: IPosts, key: number) => {            
            let date = new Date(post.Date).toLocaleDateString();
            let bitmap : number[]= post.Image.data.data;
            //@ts-ignore
            let objImg: string = new Buffer.from(bitmap).toString("base64");
            return (
                <tr key={key}>
                    <td className="px-8 py-4 text-left border border-gray-100">{post.Title}</td>
                    <td className="px-8 py-4 text-left border border-gray-100">{date}</td>
                    <td className="border border-gray-100"><img className="w-full align-middle max-h-52" src={`data:image/png;base64,${objImg}`} alt={post.Title}></img></td>
                    <td className="px-8 py-4 text-left border border-gray-100">{buttons(post)}</td>
                </tr>);
            })
        return rows;
    }

    return (
        <div className="flex flex-col items-center bg-white bg-cover">
            <div className="flex flex-col items-center">
                <h1 className="justify-center text-5xl">Admin Page</h1>
                <div>
                    <h3 className="flex justify-center m-5 text-3xl">Blog Posts</h3>
                    { loading ? <LoadingWheel/> :
                    error && error !== "" ? <p className="justify-center text-5xl text-red-500">{error}</p> : 
                    <table className="shadow-lg">
                        <tbody>
                            <tr>
                                <th className="px-8 py-4 text-left bg-blue-100 border-none rounded-tl-2xl">Title</th>
                                <th className="px-8 py-4 text-left bg-blue-100 border-none">Date</th>
                                <th className="px-8 py-4 text-left bg-blue-100 border-none">Image</th>
                                <th className="px-8 py-4 text-left bg-blue-100 border-none rounded-tr-2xl">Actions</th>
                            </tr>
                            {posts && posts.length > 0 && getRows()}
                        </tbody>
                    </table> }
                </div>
                <div>
                    <Modal Title="Register Admin" ButtonTitle="Register Admin" HandleClose={updateOnModalClose} ChildComponent={<RegisterForm />} />
                    <Modal Title="Create Blog Post" ButtonTitle="Create Post" HandleClose={ updateOnModalClose } ChildComponent={<CreatePostForm />}  />
                </div>
            </div>            
        </div>
    );
}

export default Adminpage;
