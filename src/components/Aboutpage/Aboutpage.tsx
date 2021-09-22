import Cards from './Cards';
import Skills from './Skills';
import Bio from './Bio';
import {useEffect} from 'react';
import useToken from '../Common/useToken';
import api from '../../api/api';

const Aboutpage = () => {
  const {token, setToken} = useToken();

  useEffect(() => {
    const getToken = async () => {
      await api.get('/api/auth/token').then(response => {
        setToken(response.data.token);
        api.defaults.headers.common['x-auth-token'] = token;
      }).catch(error => {
        console.log(error);
      });
    }

    if (!token) {
      getToken();
    }
    // eslint-disable-next-line
  }, [])
  return (
    <div className="flex flex-col h-screen">
      <div className="flex flex-col bg-cover bg-gradient-to-b from-black to-purple-500">
        <Bio/>
        <Cards/>
        <Skills/>
      </div>
    </div>
  );
}

export default Aboutpage;
