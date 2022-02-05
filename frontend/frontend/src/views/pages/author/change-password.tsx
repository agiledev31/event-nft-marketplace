import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import {Link} from "react-router-dom";
import { useToasts } from "react-toast-notifications";
import { useAppContext } from "../../../context/AppContext";
import { useUserContext } from "../../../context/UserContext";
import { changePassword } from "../../../helper/user";
import { validateEmail } from "../../../utils";

const ChangePassword = () => {

    const [cookies, setCookie] = useCookies();
    const { addToast } = useToasts();
    const {userInfo} = useUserContext();
    const {loading, setLoading, setMessage, setModal} = useAppContext();

    const [values, setValues] = useState({
        old_password: '',
        new_password: '',
        confirm_password: '',
    });

    const [validations, setValidations] = useState({
        old_password: '',
        new_password: '',
        confirm_password: ''
    })

    const handleChange = (prop: any, value: any) => {
        setValidations(prevState => ({ ...prevState, [prop]: '' }));
        setValues({ ...values, [prop]: value });
    };

    const handleChangePassword = () => {
        if (!checkvalidations()) return;
    
        setLoading(true);

        changePassword(values).then(res => {
            setLoading(false);

            if (res.success) {
                addToast('Password changed', {appearance: 'success', autoDismiss: true});    
            } else {
                const message = res.message ? res.message: 'failed'
                addToast(message, {appearance: 'error', autoDismiss: true});    
            }
        }).catch(error => {
            setLoading(false);
            addToast('failed', {appearance: 'error', autoDismiss: true});
        })
    }

    const checkvalidations = () => {
        if (values.old_password === '') {
            setValidations({ old_password: 'has-empty', new_password: '', confirm_password: ''});
            return false;
        } else if (values.new_password === '') {
            setValidations({ old_password: '', new_password: 'has-empty', confirm_password: ''});
            return false;
        } else if (values.new_password !== values.confirm_password) {
            setValidations({ old_password: '', new_password: '', confirm_password: 'not_matched'});
            return false;
        } else {
            setValidations({ old_password: '', new_password: '', confirm_password: ''});
        }
    
        return true;
    };

    return (
        <React.Fragment>
            <div className="col-12 col-lg-6">
                <form action="#" className="sign__form sign__form--profile" style={{width:450}}>
                    <div className="row">
                        <div className="col-12">
                            <h4 className="sign__title">Change password</h4>
                        </div>

                        <div className="col-12 col-md-6 col-lg-12 col-xl-6">
                            <div className="sign__group">
                                <label className="sign__label" htmlFor="oldpass">Old password</label>
                                <input id="oldpass" type="password" name="oldpass" className="sign__input"
                                    value={values.old_password}
                                    onChange={e => handleChange('old_password', e.target.value)}
                                />
                                {validations.old_password == 'has-empty' ? (<span className='text-error'>Old password Required*</span>) : ''}
                            </div>
                        </div>

                        <div className="col-12 col-md-6 col-lg-12 col-xl-6">
                            <div className="sign__group">
                                <label className="sign__label" htmlFor="newpass">New password</label>
                                <input id="newpass" type="password" name="newpass"
                                    className="sign__input"
                                    value={values.new_password}
                                    onChange={e => handleChange('new_password', e.target.value)}
                                />

                                {validations.new_password == 'has-empty' ? (<span className='text-error'>New password Required*</span>) : ''}
                            </div>
                        </div>

                        <div className="col-12 col-md-6 col-lg-12 col-xl-6">
                            <div className="sign__group">
                                <label className="sign__label" htmlFor="confirmpass">Confirm new
                                    password</label>
                                <input id="confirmpass" type="password" name="confirmpass" className="sign__input"
                                    onChange={e => handleChange('confirm_password', e.target.value)}
                                />
                                
                                {validations.confirm_password == 'not_matched' ? (<span className='text-error'>Password must be matched</span>) : ''}
                            </div>
                        </div>

                        <div className="col-12 col-md-6 col-lg-12 col-xl-6">
                            {/* <div className="sign__group">
                                <label className="sign__label" htmlFor="select">Select</label>
                                <select name="select" id="select" className="sign__select">
                                    <option value="0">Option</option>
                                    <option value="1">Option 2</option>
                                    <option value="2">Option 3</option>
                                    <option value="3">Option 4</option>
                                </select>
                            </div> */}
                        </div>

                        <div className="col-12">
                            <button className="sign__btn" type="button" onClick={handleChangePassword}>Change</button>
                        </div>
                    </div>
                </form>
            </div>
        </React.Fragment>
    );
}

export default ChangePassword;