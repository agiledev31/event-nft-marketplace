import React, { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useToasts } from 'react-toast-notifications';
import { useAppContext } from '../../../context/AppContext';
import { forgetPassword, resetPassword } from '../../../helper/auth';
import { validateEmail } from '../../../utils';

const PageResetPassword = () => {

    const {code} = useParams();
    const {loading, setLoading, setMessage, setModal} = useAppContext();
    const navigate = useNavigate();
    const [values, setValues] = useState({
        newPassword: '',
        confirmPassword: ''
    });
    const [validations, setValidations] = useState({
        newPassword: '',
        confirmPassword: ''
    })
    const { addToast } = useToasts();

    const handleChange = (prop: any, value: any) => {
        setValidations(prevState => ({ ...prevState, [prop]: '' }));
        setValues({ ...values, [prop]: value });
    };

    const handleReset = () => {
        if (!checkvalidations()) return;
    
        setLoading(true);

        resetPassword({password: values.newPassword, code: code}).then(res => {
            setLoading(false);
            if (res.success) {
                addToast('Password reseted. Please login', {appearance: 'success', autoDismiss: true});
                navigate('/signin');
            } else {
                addToast(res.message, {appearance: 'error', autoDismiss: true});    
            }
            
        }).catch(error => {
            setLoading(false);
            addToast('failed', {appearance: 'error', autoDismiss: true});
        })
    };

    const checkvalidations = () => {
        if (values.newPassword === '') {
            setValidations({ newPassword: 'has-empty', confirmPassword: ''});
            return false;
        } else if (!values.confirmPassword) {
            setValidations({ newPassword: '', confirmPassword: 'has-empty' });
            return false;
        } else if (values.newPassword != values.confirmPassword) {
            setValidations({ newPassword: '', confirmPassword: 'has-danger' });
            return false;
        } else {
            setValidations({ newPassword: '', confirmPassword: '' });
        }
    
        return true;
    };

    return (
        <div className="container" style={{marginBottom: 70, marginTop: 70}}>
            <div className="row row--grid">
                <div className="col-12">
                    <ul className="breadcrumb">
                        <li className="breadcrumb__item">
                            <Link to="/">Home</Link></li>
                        <li className="breadcrumb__item breadcrumb__item--active">Restore password</li>
                    </ul>
                </div>

                <div className="col-12">
                    <div className="sign">
                        <div className="sign__content">
                            <form action="#" className="sign__form">
                                <Link to="/" className="sign__logo">
                                    <img src="/img/logo.svg" alt=""/>
                                </Link>

                                <div className="sign__group">
                                    <input type="password" className="sign__input" placeholder="New Password" 
                                        value={values.newPassword}
                                        onChange={e => handleChange('newPassword', e.target.value)}
                                    />
                                    {validations.newPassword == 'has-empty' ? (<span className='text-error'>This field Required*</span>) : ''}
                                </div>

                                <div className="sign__group">
                                    <input type="password" className="sign__input" placeholder="Confirm Password" 
                                        value={values.confirmPassword}
                                        onChange={e => handleChange('confirmPassword', e.target.value)}
                                    />
                                    {validations.confirmPassword == 'has-empty' ? (<span className='text-error'>This field Required*</span>) : ''}
                                    {validations.confirmPassword == 'has-danger' ? (<span className='text-error'>Passwords should be matched.</span>) : ''}
                                </div>

                                <button className="sign__btn" type="button" onClick={handleReset}>Reset</button>

                                {/* <span className="sign__text">We will send a password to your Email</span> */}
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default PageResetPassword;
