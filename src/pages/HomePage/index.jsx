import './style.css';

import smartHomeData from '../../smartHomeData';

import { Header } from '../../components/Header';
import { Dashboard } from '../../components/Dashboard';

export const HomePage = () => {
  return (
    <>
      <div className='container'>
        <Header />    
        <Dashboard data={smartHomeData}/>    

        
      </div>
    </>
  );
};
