import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import {Link} from "react-router-dom";
import { useToasts } from "react-toast-notifications";
import { useAppContext } from "../../../context/AppContext";
import { useUserContext } from "../../../context/UserContext";
import { updateProfile } from "../../../helper/auth";
import { validateEmail } from "../../../utils";

const ProfileDetail = () => {

    const [cookies, setCookie] = useCookies();
    const { addToast } = useToasts();
    const {userInfo} = useUserContext();
    const {loading, setLoading, setMessage, setModal} = useAppContext();
    const [file, setFile] = useState<any>();
    const [isImageChanged, setIsImageChanged] = useState(false);
    const [imagePreview, setImagePreview] = useState<any>("");

    const [values, setValues] = useState({
        name: '',
        email: '',
        phone: '',
    });

    useEffect(() => {
        console.log(userInfo)
        if (userInfo) {
            setValues({
                name: userInfo ? userInfo.user.name : '',
                email: userInfo ? userInfo.user.email : '',
                phone: userInfo ? userInfo.user.phone : '',
            })
        }
    }, [userInfo])

    const [validations, setValidations] = useState({
        name: '',
        email: '',
    })
    

    const imageChange = (e: any) => {
        e.preventDefault();
        const reader = new FileReader();
        const f = e.target.files[0];
        if (reader !== undefined && f !== undefined) {
            reader.onloadend = () => {
                setFile(f)
                setImagePreview(reader.result)
            }
            reader.readAsDataURL(f);
        }

        setIsImageChanged(true);
    }

    const handleChange = (prop: any, value: any) => {
        setValidations(prevState => ({ ...prevState, [prop]: '' }));
        setValues({ ...values, [prop]: value });
    };
    console.log("ADMIN DATA", values);
    if (values.phone==null||values.phone=="null")values.phone="";
    const handleUpdateProfile = () => {
        if (!checkvalidations()) return;
    
        setLoading(true);

        const fd = new FormData();
        fd.append('name', values.name);
        fd.append('email', values.email);
        fd.append('phone', values.phone);
        fd.append('background', file);
       
        updateProfile(fd).then(res => {
            setLoading(false);

            if (res.success) {
                addToast('Profile updated', {appearance: 'success', autoDismiss: true});    
                setCookie('userInfo', res.data);
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
        if (values.name === '') {
            setValidations({ name: 'has-empty', email: ''});
            return false;
        } else if (values.email === '') {
            setValidations({ name: '', email: 'has-empty' });
            return false;
        } else if (!validateEmail(values.email)) {
            setValidations({ name: '', email: 'has-danger'});
            return false;
        } else {
            setValidations({ name: '', email: ''});
        }
    
        return true;
    };

    return (
        <React.Fragment>
            <div className="col-12 col-lg-6">
                <form action="#" className="sign__form sign__form--profile" style={{width:450, marginLeft:20}}>
                    <div className="row">
                        <div className="col-12">
                            <h4 className="sign__title">Profile details</h4>
                        </div>

                        {/* <div className="col-12 col-md-6 col-lg-12 col-xl-6">
                            <div className="sign__group">
                                <label className="sign__label" htmlFor="username">Login</label>
                                <input id="username" type="text" name="username" className="sign__input"
                                        placeholder="User123"/>
                            </div>
                        </div> */}

                        <div className="col-12 col-md-6 col-lg-12 col-xl-6">
                            <div className="sign__group">
                                <label className="sign__label" htmlFor="username">Name</label>
                                <input id="username" type="text" name="username" className="sign__input" placeholder="User123"
                                    value={values.name}
                                    onChange={e => handleChange('name', e.target.value)}
                                />
                                {validations.name == 'has-empty' ? (<span className='text-error'>Name Required*</span>) : ''}
                            </div>
                        </div>

                        <div className="col-12 col-md-6 col-lg-12 col-xl-6">
                            <div className="sign__group">
                                <label className="sign__label" htmlFor="email">Email</label>
                                <input id="email" type="text" name="email" className="sign__input" placeholder="email@email.com"
                                    value={values.email}
                                    onChange={e => handleChange('email', e.target.value)}
                                />

                                {validations.email == 'has-empty' ? (<span className='text-error'>Email Required*</span>) : ''}
                                {validations.email == 'has-danger' ? (<span className='text-error'>Input Correct Format*</span>) : ''}
                            </div>
                        </div>

                        {/* <div className="col-12 col-md-6 col-lg-12 col-xl-6">
                            <div className="sign__group">
                                <label className="sign__label" htmlFor="firstname">First name</label>
                                <input id="firstname" type="text" name="firstname"
                                        className="sign__input" placeholder="John"/>
                            </div>
                        </div>

                        <div className="col-12 col-md-6 col-lg-12 col-xl-6">
                            <div className="sign__group">
                                <label className="sign__label" htmlFor="lastname">Last name</label>
                                <input id="lastname" type="text" name="lastname" className="sign__input"
                                        placeholder="Doe"/>
                            </div>
                        </div> */}

                        <div className="col-12 col-md-6 col-lg-12 col-xl-6">
                            <div className="sign__group">
                                <label className="sign__label" htmlFor="Mobile">Mobile Number</label>
                                <input id="mobile" type="text" name="mobile" className="sign__input" placeholder=""
                                    value={values.phone}
                                    onChange={e => handleChange('phone', e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="col-12 col-md-6 col-lg-12 col-xl-6">
                        <span className="sign__label">Background</span>

                            <div className="sign__file">
                                {/* <label className="sign__label" htmlFor="Mobile">Background</label>
                                <input id="background" type="text" name="background" className="sign__input" placeholder=""
                                    value={values.background}
                                    onChange={e => handleChange('background', e.target.value)}
                                /> */}
                                <label id="file1" htmlFor="sign__file-upload">Click here to upload image</label>
                                <input data-name="#file1" id="sign__file-upload" name="file"
                                        className="sign__file-upload" type="file"
                                        accept=".png,.jpg,.jpeg" 
                                        onChange={imageChange} src={imagePreview}
                                />
                            </div>
                        </div>

                        <div className="col-12">
                            <button className="sign__btn" type="button" onClick={handleUpdateProfile}>Save</button>
                        </div>
                    </div>
                </form>
            </div>

        </React.Fragment>
    );
}

export default ProfileDetail