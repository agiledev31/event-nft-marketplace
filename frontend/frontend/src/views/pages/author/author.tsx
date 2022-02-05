import React, {useState} from "react";
import {Link} from "react-router-dom";

// import { BsUpload } from 'react-icons/bs';
import * as S from "./uploadcss";
import {render} from "react-dom";
import { changeAvatar } from "../../../helper/user";
import { useCookies } from "react-cookie";
import { useToasts } from "react-toast-notifications";
import { useUserContext } from "../../../context/UserContext";
import config from "../../../helper/config";
import { useAppContext } from "../../../context/AppContext";

const Author = () =>  {

    const [file, setFile] = useState<any>();
    const [imagePreview, setImagePreview] = useState<any>("");
    const [name, setName] = useState<string>();
    const [size, setSize] = useState<string>();
    const [isAvatarChanged, setIsAvatarChanged] = useState(false);
    const [cookies, setCookie] = useCookies();
    const { addToast } = useToasts();
    const {userInfo} = useUserContext();
    const {loading, setLoading, setMessage, setModal} = useAppContext();

    const avatarChange = (e: any) => {
        e.preventDefault();
        const reader = new FileReader();
        const f = e.target.files[0];
        if (reader !== undefined && f !== undefined) {
            reader.onloadend = () => {
                setFile(f)
                setSize(f.size);
                setName(f.name)
                setImagePreview(reader.result)
            }
            reader.readAsDataURL(f);
        }

        setIsAvatarChanged(true);
    }

    const saveAvatar = () => {
        const fd = new FormData();
        fd.append('avatar', file);

        setLoading(true);

        changeAvatar(fd).then(res => {
            setLoading(false);
            if (res.success) {
                const userInfo = cookies.userInfo;
                setCookie('userInfo', {accessToken: userInfo.accessToken, user: res.user});
                setIsAvatarChanged(false);
            } else {
                addToast('failed', {appearance: 'error', autoDismiss: true});
            }
            
        }).catch(error => {
            setLoading(false);
            addToast('failed', {appearance: 'error', autoDismiss: true});
        })
    }



    return (
        <div className="col-12 col-xl-3">
            <div className="author author--page">
                <div className="author__meta">
                    <div className="author__avatar author__avatar--verified">
                        <S.Perfil top={0}
                                  width={150}
                                  height={150} >
                            {imagePreview === "" ?
                                <React.Fragment>
                                    { userInfo && userInfo.user && userInfo.user.avatar ? 
                                        <img src={`${config.API_BASE_URL}/api/upload/get_file?path=${userInfo.user.avatar}`} alt=""/>
                                        : 
                                        <img src="img/avatars/avatar5.jpg" alt=""/>
                                    }
                                </React.Fragment>
                                :
                                <img src={imagePreview} alt="" />
                            }
                            <input type="file" name="avatar" id="file" accept=".jpef, .png, .jpg" onChange={avatarChange} src={imagePreview} />
                        </S.Perfil>

                    </div>

                    {
                        isAvatarChanged ? 
                            <div className="row" style={{width: '100%'}}>
                                <div className="col-12 col-xl-8">
                                    <button className="sign__btn mt-0 btn-sm" type="button" onClick={saveAvatar}>Save</button>
                                </div>
                            </div>
                            : ''
                    }
                    
                    

                    <h1 className="author__name">
                        <Link to="/author">
                        { userInfo ?
                            <>{userInfo.user.name}</>
                            : ''
                        }
                        </Link>
                    </h1>
                    {/* <h2 className="author__nickname"><Link to="/author">@l1rose</Link></h2> */}
                    <p className="author__text">Please insert below your Binannce Smart Chain wallet address</p>
                    <div className="author__code">
                        <input type="text" value="XAVUW3sw3ZunitokcLtemEfX3tGuX2plateWdh" id="author-code"/>
                        <button type="button">
                            <span>Copied</span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path d="M18,19H6a3,3,0,0,1-3-3V8A1,1,0,0,0,1,8v8a5,5,0,0,0,5,5H18a1,1,0,0,0,0-2Zm5-9.06a1.31,1.31,0,0,0-.06-.27l0-.09a1.07,1.07,0,0,0-.19-.28h0l-6-6h0a1.07,1.07,0,0,0-.28-.19l-.09,0L16.06,3H8A3,3,0,0,0,5,6v8a3,3,0,0,0,3,3H20a3,3,0,0,0,3-3V10S23,10,23,9.94ZM17,6.41,19.59,9H18a1,1,0,0,1-1-1ZM21,14a1,1,0,0,1-1,1H8a1,1,0,0,1-1-1V6A1,1,0,0,1,8,5h7V8a3,3,0,0,0,3,3h3Z"/>
                            </svg>
                        </button>
                    </div>
                    <div className="author__code">
                                <input type="text" defaultValue=" https://bksbackstage.io" id="author-code" />
                                    <button type="button">
                                        <span>Copied</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                            <path d="M18,19H6a3,3,0,0,1-3-3V8A1,1,0,0,0,1,8v8a5,5,0,0,0,5,5H18a1,1,0,0,0,0-2Zm5-9.06a1.31,1.31,0,0,0-.06-.27l0-.09a1.07,1.07,0,0,0-.19-.28h0l-6-6h0a1.07,1.07,0,0,0-.28-.19l-.09,0L16.06,3H8A3,3,0,0,0,5,6v8a3,3,0,0,0,3,3H20a3,3,0,0,0,3-3V10S23,10,23,9.94ZM17,6.41,19.59,9H18a1,1,0,0,1-1-1ZM21,14a1,1,0,0,1-1,1H8a1,1,0,0,1-1-1V6A1,1,0,0,1,8,5h7V8a3,3,0,0,0,3,3h3Z"/>
                                        </svg>
                                    </button>
                            </div>
                    <div className="author__social">
                        <a href="#" target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path
                                    d="M20.07,6.35H15V7.76h5.09ZM19,16.05a2.23,2.23,0,0,1-1.3.37A2.23,2.23,0,0,1,16,15.88a2.49,2.49,0,0,1-.62-1.76H22a6.47,6.47,0,0,0-.17-2,5.08,5.08,0,0,0-.8-1.73,4.17,4.17,0,0,0-1.42-1.21,4.37,4.37,0,0,0-2-.45,4.88,4.88,0,0,0-1.9.37,4.51,4.51,0,0,0-1.47,1,4.4,4.4,0,0,0-.95,1.52,5.4,5.4,0,0,0-.33,1.91,5.52,5.52,0,0,0,.32,1.94A4.46,4.46,0,0,0,14.16,17a4,4,0,0,0,1.46,1,5.2,5.2,0,0,0,1.94.34,4.77,4.77,0,0,0,2.64-.7,4.21,4.21,0,0,0,1.63-2.35H19.62A1.54,1.54,0,0,1,19,16.05Zm-3.43-4.12a1.87,1.87,0,0,1,1-1.14,2.28,2.28,0,0,1,1-.2,1.73,1.73,0,0,1,1.36.49,2.91,2.91,0,0,1,.63,1.45H15.41A3,3,0,0,1,15.52,11.93Zm-5.29-.48a3.06,3.06,0,0,0,1.28-1,2.72,2.72,0,0,0,.43-1.58,3.28,3.28,0,0,0-.29-1.48,2.4,2.4,0,0,0-.82-1,3.24,3.24,0,0,0-1.27-.52,7.54,7.54,0,0,0-1.64-.16H2V18.29H8.1a6.55,6.55,0,0,0,1.65-.21,4.55,4.55,0,0,0,1.43-.65,3.13,3.13,0,0,0,1-1.14,3.41,3.41,0,0,0,.37-1.65,3.47,3.47,0,0,0-.57-2A3,3,0,0,0,10.23,11.45ZM4.77,7.86H7.36a4.17,4.17,0,0,1,.71.06,1.64,1.64,0,0,1,.61.22,1.05,1.05,0,0,1,.42.44,1.42,1.42,0,0,1,.16.72,1.36,1.36,0,0,1-.47,1.15,2,2,0,0,1-1.22.35H4.77ZM9.61,15.3a1.28,1.28,0,0,1-.45.5,2,2,0,0,1-.65.26,3.33,3.33,0,0,1-.78.08h-3V12.69h3a2.4,2.4,0,0,1,1.45.41,1.65,1.65,0,0,1,.54,1.39A1.77,1.77,0,0,1,9.61,15.3Z"/>
                            </svg>
                        </a>

                        <a href="#" target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path
                                    d="M17.34,5.46h0a1.2,1.2,0,1,0,1.2,1.2A1.2,1.2,0,0,0,17.34,5.46Zm4.6,2.42a7.59,7.59,0,0,0-.46-2.43,4.94,4.94,0,0,0-1.16-1.77,4.7,4.7,0,0,0-1.77-1.15,7.3,7.3,0,0,0-2.43-.47C15.06,2,14.72,2,12,2s-3.06,0-4.12.06a7.3,7.3,0,0,0-2.43.47A4.78,4.78,0,0,0,3.68,3.68,4.7,4.7,0,0,0,2.53,5.45a7.3,7.3,0,0,0-.47,2.43C2,8.94,2,9.28,2,12s0,3.06.06,4.12a7.3,7.3,0,0,0,.47,2.43,4.7,4.7,0,0,0,1.15,1.77,4.78,4.78,0,0,0,1.77,1.15,7.3,7.3,0,0,0,2.43.47C8.94,22,9.28,22,12,22s3.06,0,4.12-.06a7.3,7.3,0,0,0,2.43-.47,4.7,4.7,0,0,0,1.77-1.15,4.85,4.85,0,0,0,1.16-1.77,7.59,7.59,0,0,0,.46-2.43c0-1.06.06-1.4.06-4.12S22,8.94,21.94,7.88ZM20.14,16a5.61,5.61,0,0,1-.34,1.86,3.06,3.06,0,0,1-.75,1.15,3.19,3.19,0,0,1-1.15.75,5.61,5.61,0,0,1-1.86.34c-1,.05-1.37.06-4,.06s-3,0-4-.06A5.73,5.73,0,0,1,6.1,19.8,3.27,3.27,0,0,1,5,19.05a3,3,0,0,1-.74-1.15A5.54,5.54,0,0,1,3.86,16c0-1-.06-1.37-.06-4s0-3,.06-4A5.54,5.54,0,0,1,4.21,6.1,3,3,0,0,1,5,5,3.14,3.14,0,0,1,6.1,4.2,5.73,5.73,0,0,1,8,3.86c1,0,1.37-.06,4-.06s3,0,4,.06a5.61,5.61,0,0,1,1.86.34A3.06,3.06,0,0,1,19.05,5,3.06,3.06,0,0,1,19.8,6.1,5.61,5.61,0,0,1,20.14,8c.05,1,.06,1.37.06,4S20.19,15,20.14,16ZM12,6.87A5.13,5.13,0,1,0,17.14,12,5.12,5.12,0,0,0,12,6.87Zm0,8.46A3.33,3.33,0,1,1,15.33,12,3.33,3.33,0,0,1,12,15.33Z"/>
                            </svg>
                        </a>

                        <a href="#" target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path
                                    d="M22,5.8a8.49,8.49,0,0,1-2.36.64,4.13,4.13,0,0,0,1.81-2.27,8.21,8.21,0,0,1-2.61,1,4.1,4.1,0,0,0-7,3.74A11.64,11.64,0,0,1,3.39,4.62a4.16,4.16,0,0,0-.55,2.07A4.09,4.09,0,0,0,4.66,10.1,4.05,4.05,0,0,1,2.8,9.59v.05a4.1,4.1,0,0,0,3.3,4A3.93,3.93,0,0,1,5,13.81a4.9,4.9,0,0,1-.77-.07,4.11,4.11,0,0,0,3.83,2.84A8.22,8.22,0,0,1,3,18.34a7.93,7.93,0,0,1-1-.06,11.57,11.57,0,0,0,6.29,1.85A11.59,11.59,0,0,0,20,8.45c0-.17,0-.35,0-.53A8.43,8.43,0,0,0,22,5.8Z"/>
                            </svg>
                        </a>

                        <a href="#" target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path
                                    d="M21.20905,6.41669H22V4.08331H14.51978l-2.48584,9.16663h-.068L9.50269,4.08331H2V6.41663h.76837A.89578.89578,0,0,1,3.5,7.11139v9.83032a.84093.84093,0,0,1-.73163.6416H2v2.33338H8V17.58331H6.5V7.25h.08752L10.0451,19.91669h2.712L16.25989,7.25h.07355V17.58331H14.83337v2.33338H22V17.58331h-.79095a.83931.83931,0,0,1-.70905-.6416V7.11145A.8976.8976,0,0,1,21.20905,6.41669Z"/>
                            </svg>
                        </a>
                    </div>
                    <div className="author__wrap">
                        <div className="author__followers">
                            <p>0</p>
                            <span>Followers</span>
                        </div>
                        <button className="author__follow" type="button">Follow</button>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default Author;
