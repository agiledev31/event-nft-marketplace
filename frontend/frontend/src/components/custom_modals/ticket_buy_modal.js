import { useState } from "react";
import { useAppContext } from "../../context/AppContext";
import { useUserContext } from "../../context/UserContext";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { buyTicket } from "../../helper/event";
import { useToasts } from "react-toast-notifications";
import { useNavigate } from "react-router-dom";

const TicketBuyModal = ({eventCard, handleEnd}) => {
    const {setLoading, setModal} = useAppContext();
    const {userInfo} = useUserContext();
    const [wallet, setWallet] = useState(userInfo.user.wallet_address);
    const [walletChanged, setWalletChanged] = useState(true);
    const { addToast } = useToasts();
    const [validation, setValidation] = useState('');

    const handleWalletChange = (value) => {
        setValidation('');
        setWallet(value);
        setWalletChanged(true);
    }

    const confirmWalletAddress = () => {
        console.log('confirm wallet address');
        if (!checkValidation()) {
            return;
        }        
        setWalletChanged(false);
    }

    const checkValidation = () => {
        console.log(wallet.indexOf('0x'), wallet.length);
        if (wallet.indexOf('0x') != 0 || wallet.length != 42) {
            setValidation('has-danger');
            return false;
        }
        setValidation('');
        return true
    }

    const createOrder = (data, actions) => {
        console.log('data: ', data);
        console.log('actions: ', actions);

        return actions.order.create({
            purchase_units: [
                {
                    amount: {
                        value: eventCard.price,
                        currency_code: 'EUR'
                    },
                }
            ]
        });
    }

    const onApprove = (data, actions) => {
        const orderid = data.orderID
        handleBuyTicket(orderid);
    }

    const handleBuyTicket = (orderid) => {
        setLoading(true);
        const param = {
            wallet_address: wallet,
            eventcard: eventCard.id,
            price: eventCard.price,
            pay_order_id: orderid
        }
        buyTicket(param).then(res => {
            setLoading(false);
            if (res.success) {
                addToast('You bought the ticket', {appearance: 'success', autoDismiss: true});
                setModal({open: false});
                handleEnd();
            } else {
                addToast('failed', {appearance: 'error', autoDismiss: true});   
                setModal({open: false});
            }
        }).catch(error=> {
            addToast('failed', {appearance: 'error', autoDismiss: true});   
            setModal({open: false});
        })
    }
    return (
        <div style={style.container}>
            <h4 className="sign__title">Please enter your BSC address</h4>
            <span style={style.btn_close} onClick={() => setModal({open: false})}>
                <svg style={{ marginTop: '-4px'}} focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path fill='#ffffff' d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
                </svg>
            </span>

            <div className="sign__group sign__group--row">
                {/* <label className="sign__label" htmlFor="placebid"></label> */}
                <input id="placebid" type="text" name="placebid" className="sign__input" 
                    value={wallet}
                    onChange={e => handleWalletChange(e.target.value)}
                />
                {validation == 'has-danger' ? (<span className='text-error'>invalid wallet address*</span>) : ''}
                <span className="sign__text sign__text--small" style={{marginTop: '5px'}}>You can change this wallet address.</span>
            </div>

            <div style={{marginTop: '35px'}}>
                {walletChanged ? 
                    <button className="sign__btn" type="button"
                        onClick={confirmWalletAddress}
                    >Confirm Wallet Address</button> :
                    <PayPalScriptProvider 
                        options={{ 
                            "client-id": "AffFVjpeVWCzGzYRB3hs1btcwdt1R0adzgVROBak5Fn0hClbBVFea-DznT-WXjcH1h1qjrkqKvPQ6ia-",
                            currency: "EUR"
                         }}>
                        <PayPalButtons style={{ layout: "horizontal", tagline: false, label: 'pay' }} 
                            createOrder={createOrder}
                            onApprove={onApprove}
                        />
                    </PayPalScriptProvider>
                }
            </div>
        </div>
    )
}

const style = {
    container: {
        maxWidth: '80%',
        width: '700px',
        backgroundColor: '#14142f',
        color: 'white',
        padding: '40px 40px 25px',
        borderRadius: '10px',
        border: '1px solid #534f77',
        margin: 'auto',
        position: 'relative'
    },
    btn_close: {
        position: 'absolute', 
        top: '37px',
        right: '35px',
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

export default TicketBuyModal;