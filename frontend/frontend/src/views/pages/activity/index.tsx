import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import config from '../../../helper/config';
import { userTickets } from '../../../helper/event';
import ReactTimeAgo from 'react-time-ago'
import { useUserContext } from "../../../context/UserContext";

import { useWeb3React } from "@web3-react/core"
import { ethers } from 'ethers'
import { injected } from "../../../helper/web3service"

const myNFTABI = require('../../../utils/NFTContractAbi.json');
const myNFTAddress = "0x76af6b3dc8afddce24effe1bf903680bae9a7c65"

const PageActivity = () => {
    const { active, account, library, connector, activate, deactivate } = useWeb3React();
    const { userInfo, setUserInfo } = useUserContext();

    const [filters, setFilters] = useState([]);
    const [tickets, setTickets] = useState([]);

    async function wallet_connect() {
        try {
            await activate(injected);
        } catch (ex) {
            console.log("connection failed", ex)
        }
    }

    async function wallet_disconnect() {
        try {
            deactivate()
        } catch (ex) {
            console.log(ex)
        }
    }

    async function mintNFT(data: any){
        
        if(!active){
            await wallet_connect();
        }
        console.log(account, "data", data);
        const provider = new ethers.providers.Web3Provider((window as any).ethereum)
        const contract = new ethers.Contract(myNFTAddress, myNFTABI, provider.getSigner())
        let tokenId: any = await contract.mintNFT(account, data);
    }

    useEffect(() => {}, [userInfo]);

    useEffect(() => {
        userTickets().then(res => {
            if (res.success) {
                setTickets(res.tickets);
            }
        })
    }, [])

    const onclearAll = (e: React.MouseEvent<HTMLButtonElement>): void => {
        // @ts-ignore
        document.getElementById("type8").setAttribute("checked" ,"true");
        // @ts-ignore
        document.getElementById("type7").setAttribute("defaultChecked" ,"true");
    }
    const onChecked = (e: React.MouseEvent<HTMLElement>): void => {
        alert(e.currentTarget);
        // this.state.filters.push(e.currentTarget.id);
    }

    const ticketBuyTime = (time: any) => {
        const now = new Date();
        // const diff = moment.utc(moment(now.toUTCString(),"DD/MM/YYYY HH:mm:ss").diff(moment(time,"DD/MM/YYYY HH:mm:ss"))).format("HH:mm:ss")
        // console.log(diff);
        // const createTime = new Date(time);
        return '';
    }

    const cardView = (ticket: any) => {
        return(
                <div className="activity">
                    <Link to ="/item" className="activity__cover">
                        <img src={`${config.API_BASE_URL}/api/upload/get_file?path=${ticket.eventcard.picture_small}`} alt=""/>
                    </Link>
                    <div className="activity__content">
                        <div className='nft-mint'>
                            <h3 className="activity__title"><Link to ="/item">{ticket.eventcard.name}</Link></h3>
                            {userInfo.user.name == ticket.buyer.name ? <button onClick={() => {mintNFT(ticket);}} className="btn mint-btn">MINT</button> : "" }
                        </div>
                        <p className="activity__text">Created by <Link to="/author">@{ticket.eventcard.creator.name}</Link>
                            {/* <br/>for <b>{coin}</b> */}
                        </p>
                        <span className="activity__time">Purchased <ReactTimeAgo date={ticket.createdAt} locale="en-US"/></span>
                    </div>
                </div>
        )
    }
    return (
        <div className="container" style={{marginBottom: 70, marginTop:70}}>
            <div className="row row--grid">
                <div className="col-12">
                    <ul className="breadcrumb">
                        <li className="breadcrumb__item"><a href="/">Home</a></li>
                        <li className="breadcrumb__item breadcrumb__item--active">Activity</li>
                    </ul>
                </div>
                <div className="col-12">
                    <div className="main__title main__title--page">
                        <h1>Activity</h1>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-12 col-xl-3 order-xl-2">
                    <div className="filter-wrap">
                        <button className="filter-wrap__btn" type="button" data-toggle="collapse"
                                data-target="#collapseFilter" aria-expanded="false"
                                aria-controls="collapseFilter">Open
                            filter
                        </button>

                        <div className="collapse filter-wrap__content" id="collapseFilter">
                            <div className="filter filter--sticky">
                                <h4 className="filter__title">Filters 
                                    {/* <button type="button" onClick={onclearAll}>Clear all</button> */}
                                </h4>

                                <div className="filter__group">
                                    <ul className="filter__checkboxes">
                                        <li>
                                            <input id="type5" type="checkbox" name="type5" onClick={onChecked} />
                                            <label htmlFor="type5">Listings</label>
                                        </li>
                                        <li>
                                            <input id="type6" type="checkbox" name="type6" onClick={onChecked} />
                                            <label htmlFor="type6">Purchases</label>
                                        </li>
                                        <li>
                                            <input id="type7" type="checkbox" name="type7" onClick={onChecked} />
                                            <label htmlFor="type7">Sales</label>
                                        </li>
                                        <li>
                                            <input id="type8" type="checkbox" name="type8" onClick={onChecked} />
                                            <label htmlFor="type8">Transfers</label>
                                        </li>
                                        <li>
                                            <input id="type9" type="checkbox" name="type9" onClick={onChecked} />
                                            <label htmlFor="type9">Bids</label>
                                        </li>
                                        <li>
                                            <input id="type10" type="checkbox" name="type10" onClick={onChecked}/>
                                            <label htmlFor="type10">Likes</label>
                                        </li>
                                        <li>
                                            <input id="type11" type="checkbox" name="type11" onClick={onChecked} />
                                            <label htmlFor="type11">Followings</label>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-xl-9 order-xl-1">
                    <div className="row row--grid">
                        {
                            tickets.map((ticket, index) =>{
                                return(
                                    <div className="col-12 col-lg-6" key={index}>
                                        {cardView(ticket)}
                                    </div>
                                );
                            })
                        }
                    </div>

                    {/* <div className="row row--grid">
                        <div className="col-12">
                            <button className="main__load" type="button" data-toggle="collapse"
                                    data-target="#collapsemore" aria-expanded="false"
                                    aria-controls="collapsemore">Load
                                more
                            </button>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    );
}

export default PageActivity;
