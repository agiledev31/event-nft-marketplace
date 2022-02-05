import { useAppContext } from "../../context/AppContext";

const SignupSuccessMoal = () => {
    const {setModal} = useAppContext();
    return (
        <div style={style.container}>
            <span>Signup Success! Please Verify your email.</span>
            <span style={style.btn_close} onClick={() => setModal({open: false})}>
                <svg style={{ marginTop: '-4px'}} focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path fill='#ffffff' d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
                </svg>
            </span>
        </div>
    )
}

const style = {
    container: {
        maxWidth: '80%',
        width: '700px',
        textAlign: 'center',
        backgroundColor: '#14142f',
        color: 'white',
        padding: '50px 0px',
        borderRadius: '10px',
        border: '1px solid #534f77',
        margin: 'auto'
    },
    btn_close: {
        width: '20px',
        height: '25px',
        display: 'inline-block',
        border: '1px solid #534f77',
        paddingBottom: '2px',
        borderRadius: '3px',
        marginLeft: '10px',
        verticalAlign: 'top',
        cursor: 'pointer'
    }
}

export default SignupSuccessMoal;