import React from 'react';
import Style from './Style';
import Tradient from '../../assets/traident.svg';
import Filled_Tradient from '../../assets/Filled_Tradient.svg';
const Index = () => {
  return (
   <Style>
    <div className='heading'>
        {
             Array(10).fill("").map((v)=>(
                <img src={Tradient} alt="Tradient" className='tradient'/>
             ))
        }
    </div>
    <div className='data'>
       <div className='data-row'>
         <div style={{color:'white'}}>&gt;</div>
         <h5>Bring the house in order (Community Managers, Devs, Artists, Environment Designers, Game Engineers….)</h5>
       </div>
       <div className='data-row'>
         <div style={{color:'white'}}>&gt;</div>
         <h5>Community Setup </h5>
       </div>
       <div className='data-row'>
         <div style={{color:'white'}}>&gt;</div>
         <h5>Social Media Presence</h5>
       </div>
       <div className='data-row'>
         <div style={{color:'white'}}>&gt;</div>
         <h5>Start creative team to work on concept website</h5>
       </div>
       <div className='data-row'>
         <div style={{color:'white'}}>&gt;</div>
         <h5>Onboard Creative Writers</h5>
       </div>
    </div>
   </Style>
  )
}

export default Index