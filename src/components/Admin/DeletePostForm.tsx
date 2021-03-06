import api from '../../api/api';
import { useState } from 'react';
import LoadingWheel from '../Common/LoadingWheel';

interface IDeletePostProps {
    id: string;
    title: string;
}

const DeletePostForm = (props: IDeletePostProps) => {
    const [res, setRemoveResponse] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async () => {
        setLoading(true);
        await api.post("/api/blog/removepost", {"id": props.id})
            .then((response) => {
                setRemoveResponse(response.data.message)
                setLoading(false);
            })
            .catch(error => {
                console.log(error.message)
                setLoading(false);
            });
    }

    return (
        <div >
            { loading ? <LoadingWheel/> :
              res && res !== "" ? <p>{res}</p> :
            <div className="flex flex-col">
                <p>{props.title}</p>
                <p>Are you sure you want to delete this blog?</p>
                <button 
                    className="px-6 py-3 m-5 mb-1 mr-1 text-sm font-bold text-white uppercase bg-red-500 rounded shadow outline-none active:bg-blue-200 hover:shadow-lg focus:outline-none ease-linear transition-all duration-150" 
                    type="submit" 
                    onClick={handleSubmit}
                >
                    Delete
                </button>
            </div>}
        </div>
    );
}

export default DeletePostForm;
