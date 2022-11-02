import React, { useState, useEffect } from 'react';
import success from "../../assets/images/icon/success.png"


const SpinnerScreen = ({resetStepDefault}) =>{
    const [loading, setLoading] = useState(false);
    useEffect(() => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    }, []);

const login = () =>{
 resetStepDefault()
} 
return (
    <>
      {loading ? (
        <div className="loader-con">
            <div class="spinner"></div>
            <div className='loader-txt'>
                <span className="loader-item">Validating your details...</span>
                <span className="loader-item">Creating your account..</span>
                <span className="loader-item">Finishing up...</span>
               
            </div>
        </div>
        
      ) : (
        <div className="show">
           <h1 className="header-title" style={{ 
                        marginBottom: "0%"
                     }}>Wow! Your <span className="header-title-yellow" style={{ marginRight: "10px" }}>UPS</span>account has </h1>
            <h1 className="header-title">been successfully created!</h1>
            <h2 style={{ 
                fontWeight: 500,
                fontSize: "16px",
                margin: "2% 0% 5% 0%"
             }}>Thanks for that, now you’re all set.</h2>
            <div className="success-screen">
               <img src={success} alt="" srcset="" className='img-success'/>
               <button className="btn-black" onClick={login}>Proceed to account login</button>
            </div>
            
        </div>
      )}
    </>
  );
};

export default SpinnerScreen;