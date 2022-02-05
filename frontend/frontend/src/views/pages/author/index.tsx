import React, { useEffect, useState } from 'react';
import { useUserContext } from '../../../context/UserContext';
import config from '../../../helper/config';
import Author from "./author";
import Profile from "./profile";

const PageAuthor = () => {

    const {userInfo} = useUserContext();
    const [background, setBackground] = useState<any>()
    useEffect(() => {
        if (userInfo && userInfo.user.background) {
            const backgroundUrl = `${config.API_BASE_URL}/api/upload/get_file?path=${userInfo.user.background}`
            setBackground(backgroundUrl);
            console.log(backgroundUrl);
        } else {
            
        }
    }, [userInfo])

    return (
        <main className="main">
        <div className="main__author" 
            style={ background ? {backgroundImage: `url(${background})`} : {}}
            />
            <div className="container">
                <div className="row row--grid">
                    <Author/>
                    <Profile />
                </div>
            </div>
        </main>
    );
}

export default PageAuthor;
