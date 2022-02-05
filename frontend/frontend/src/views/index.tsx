import React, {useState, useEffect} from 'react';
import routes from '../routes';
import Footer from './layout/footer';
import Header from './layout/header';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { MessageDialog } from '../components/Dialogs';
import Loader from '../components/Loader';
import { useAppContext } from '../context/AppContext';
import { useUserContext } from '../context/UserContext';
import { useCookies } from 'react-cookie';
import CustomModalComponent from '../components/custom_modals';

const View = () => {

    const [ cookies ] = useCookies();
    const { loading, message, setMessage, modal, setModal } = useAppContext();
    const {setUserInfo} = useUserContext();

    useEffect(() => {
        console.log('cookieChange');
        if (Boolean(cookies.userInfo)) {
          setUserInfo(cookies.userInfo);
        } else {
          setUserInfo(false);
        }
    }, [cookies, setUserInfo]);

    const getRoutes = () => {
        return routes.map((prop, key) => {
     
            return <Route
                        key={key}
                        {...prop}
                    />
          
        });
    }

    return (
        <>
            <BrowserRouter>
            <Header />  
            <Routes>
                {getRoutes()}
            </Routes>
            <Footer />
            </BrowserRouter>
            <MessageDialog
                open={message.open}
                title={message.title}
                description={message.description}
                onClose={(event: any, reason: any) => reason !== 'clickaway' && setMessage({ ...message, open: false })}
            />
            <CustomModalComponent 
                open={modal.open}
                children={modal.children}
                onClose={(event: any, reason: any) => setModal({...modal, open: false})}
            />
            <Loader open={loading} />
        </>
        
    )
}

export default View;