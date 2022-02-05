import React from 'react';

import { Link } from 'react-router-dom';
import { useUserContext } from '../../../context/UserContext';

const Nftevents = () => {
    const {userInfo} = useUserContext();
    return (
        <div className="home">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="home__content">
                            <h1 className="home__title">The events NFT marketplace</h1>
                            <p className="home__text">Financial Instruments-Payment System <br/>Licenses,
                                permits &amp; Authorizations</p>
                            <div className="home__btns">
                                <Link to="/explorer" className="home__btn home__btn--clr">Explore</Link>
                                { !userInfo ? 
                                    <React.Fragment><Link to="/Signin" className="home__btn">Sign in</Link></React.Fragment>
                                     : ''}
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Nftevents;