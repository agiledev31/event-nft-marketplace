import React, { useEffect, useRef, useState } from 'react';
import {Link, useNavigate, useParams} from "react-router-dom";
import { useToasts } from 'react-toast-notifications';
import EventCountDown from '../../../components/event_countdown';
import config from '../../../helper/config';
import { getEventCardById, getLatestEventCards } from '../../../helper/event';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { useAppContext } from '../../../context/AppContext';
import TicketBuyModal from '../../../components/custom_modals/ticket_buy_modal';

const PageEventCard = () => {

    const {id} = useParams();
    const [eventCard, setEventCard] = useState<any>(false);
    const { addToast } = useToasts();
    const [latestEvents, setLatestEvents] = useState([]);
    const latestEventCarousel = useRef<typeof OwlCarousel>(null);
    const {setModal} = useAppContext();
    const navigate = useNavigate();

    useEffect(() => {

        getEventCardById(id).then(res => {
            console.log(res);
            if (res.success) {
                setEventCard(res.eventcard);
            }
        })

        getLatestEventCards().then(res => {
            if (res.success) {
                console.log(res.eventcards)
                setLatestEvents(res.eventcards);
            }
        })
    }, [])

    const next = (eleRf: any) => {
        const ele: any = eleRf.current;
        ele.next(500);
    } 

    const prev = (eleRf: any) => {
        const ele: any = eleRf.current;
        ele.prev(500);
    }

    const telegramUrl = (username: string) => {
        let temp;
        if (username.length > 0 && username.substr(0, 1) == '@') {
            temp = username.substr(1, username.length - 1);
        } else {
            temp = username;
        }

        return 'https://t.me/' + temp;
    }

    const lastestEventsEle = () => {
        return latestEvents.map((eventcard: any) => (
            <div className="card">
               
                <Link to={`/event/eventcard/${eventcard.id}`} className="card__cover">
                    <img src={`${config.API_BASE_URL}/api/upload/get_file?path=${eventcard.picture_small}`} alt=""/>
                    <span className="card__time">
                        <EventCountDown date={eventcard.date} />
                    </span>
                </Link>
                <h3 className="card__title"><Link to={`/event/eventcard/${eventcard.id}`}>{eventcard.name}</Link></h3>
                <div className="card__author ">
                    <div className="text__location">
                        <span>Date {eventcard.date}</span>
                        <div>
                            <span>Location {eventcard.location}</span>
                        </div>
                    </div>
                </div>
                <div className="card__info">
                    <div className="card__price">
                        <span>Current price</span>
                        <span>{eventcard.price} €</span>
                    </div>

                    <button className="card__likes" type="button">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path d="M20.16,5A6.29,6.29,0,0,0,12,4.36a6.27,6.27,0,0,0-8.16,9.48l6.21,6.22a2.78,2.78,0,0,0,3.9,0l6.21-6.22A6.27,6.27,0,0,0,20.16,5Zm-1.41,7.46-6.21,6.21a.76.76,0,0,1-1.08,0L5.25,12.43a4.29,4.29,0,0,1,0-6,4.27,4.27,0,0,1,6,0,1,1,0,0,0,1.42,0,4.27,4.27,0,0,1,6,0A4.29,4.29,0,0,1,18.75,12.43Z"/>
                        </svg>
                        <span>{eventcard.likes_number}</span>
                    </button>
                </div>
            </div>
        ))
    }

    const handleBuyTicket = () => {
        if (eventCard.total_tickets == eventCard.buy_count) {
            addToast('Already sold full amount of tickets', {appearance: 'error', autoDismiss: true});
            return;
        }
        console.log('buy ticket');

        setModal({open: true, children: <TicketBuyModal eventCard={eventCard} handleEnd={handleBought}/>}); return;
    }

    const handleBought = () => {
        console.log('bought');

        navigate('/activity');
    }

    const copyLink = () => {
        const url = `${config.SITE_URL}/event/eventcard/${id}`;
        navigator.clipboard.writeText(url);
        addToast('Copied the link to clipboard', {appearance: 'success', autoDismiss: true});
    }

    return (
        <main className="main">
        <div className="container">
            <div className="row row--grid">
                <div className="col-12">
                    <ul className="breadcrumb">
                        <li className="breadcrumb__item"><Link to="/">Home</Link></li>
                        <li className="breadcrumb__item"><Link to="/author">Author</Link></li>
                        <li className="breadcrumb__item breadcrumb__item--active">Item</li>
                    </ul>
                </div>
            </div>

            { eventCard ?
                <div className="row">

                    <div className="col-12">
                        <div className="main__title main__title--page" style={{justifyContent: 'inherit'}}>
                            <h1>{eventCard.name}</h1>
                            {
                                eventCard.green_pass_needed ?
                                    <span className='greenpass'>
                                        <img src="/img/icons/icon-check.png" alt="" style={{width: '40px'}}/>
                                        <span className='greenpass-text'>Greenpass<br/>Required</span>
                                    </span>    
                                    :''
                            }
                            
                        </div>
                    </div>

                    <div className="col-12 col-xl-8">
                        <div className="asset__item">
                            <a className="asset__img" style={{width: '100%'}}><img src={`${config.API_BASE_URL}/api/upload/get_file?path=${eventCard.picture_large}`} alt="" style={{width: '100%'}}/></a>
                            <div className="share share--asset">
                                {eventCard.facebook ? 
                                    <a href={eventCard.facebook} className="share__link share__link--fb" target="_blank"><svg width="9" height="17" viewBox="0 0 9 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.56341 16.8197V8.65888H7.81615L8.11468 5.84663H5.56341L5.56724 4.43907C5.56724 3.70559 5.63693 3.31257 6.69042 3.31257H8.09873V0.5H5.84568C3.1394 0.5 2.18686 1.86425 2.18686 4.15848V5.84695H0.499939V8.6592H2.18686V16.8197H5.56341Z"/></svg> <span>facebook</span></a>
                                    :''
                                }
                                {eventCard.twitter ? 
                                    <a href={eventCard.twitter} className="share__link share__link--tw" target="_blank"><svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.55075 3.19219L7.58223 3.71122L7.05762 3.64767C5.14804 3.40404 3.47978 2.57782 2.06334 1.1902L1.37085 0.501686L1.19248 1.01013C0.814766 2.14353 1.05609 3.34048 1.843 4.14552C2.26269 4.5904 2.16826 4.65396 1.4443 4.38914C1.19248 4.3044 0.972149 4.24085 0.951164 4.27263C0.877719 4.34677 1.12953 5.31069 1.32888 5.69202C1.60168 6.22165 2.15777 6.74068 2.76631 7.04787L3.28043 7.2915L2.67188 7.30209C2.08432 7.30209 2.06334 7.31268 2.12629 7.53512C2.33613 8.22364 3.16502 8.95452 4.08833 9.2723L4.73884 9.49474L4.17227 9.8337C3.33289 10.321 2.34663 10.5964 1.36036 10.6175C0.888211 10.6281 0.5 10.6705 0.5 10.7023C0.5 10.8082 1.78005 11.4014 2.52499 11.6344C4.75983 12.3229 7.41435 12.0264 9.40787 10.8506C10.8243 10.0138 12.2408 8.35075 12.9018 6.74068C13.2585 5.88269 13.6152 4.315 13.6152 3.56293C13.6152 3.07567 13.6467 3.01212 14.2343 2.42953C14.5805 2.09056 14.9058 1.71983 14.9687 1.6139C15.0737 1.41264 15.0632 1.41264 14.5281 1.59272C13.6362 1.91049 13.5103 1.86812 13.951 1.39146C14.2762 1.0525 14.6645 0.438131 14.6645 0.258058C14.6645 0.22628 14.5071 0.279243 14.3287 0.374576C14.1398 0.480501 13.7202 0.639389 13.4054 0.734722L12.8388 0.914795L12.3247 0.565241C12.0414 0.374576 11.6427 0.162725 11.4329 0.0991699C10.8978 -0.0491255 10.0794 -0.0279404 9.59673 0.14154C8.2852 0.618204 7.45632 1.84694 7.55075 3.19219Z"/></svg> <span>tweet</span></a>
                                    :''
                                }
                                {eventCard.instagram ? 
                                    <a href={eventCard.instagram} className="share__link share__link--in" target="_blank"><svg width="20px" height="20px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20.947 8.305a6.53 6.53 0 0 0-.419-2.216 4.61 4.61 0 0 0-2.633-2.633 6.606 6.606 0 0 0-2.186-.42c-.962-.043-1.267-.055-3.709-.055s-2.755 0-3.71.055a6.606 6.606 0 0 0-2.185.42 4.607 4.607 0 0 0-2.633 2.633 6.554 6.554 0 0 0-.419 2.185c-.043.963-.056 1.268-.056 3.71s0 2.754.056 3.71c.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.043 1.268.056 3.71.056s2.755 0 3.71-.056a6.59 6.59 0 0 0 2.186-.419 4.615 4.615 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.187.043-.962.056-1.267.056-3.71-.002-2.442-.002-2.752-.058-3.709zm-8.953 8.297c-2.554 0-4.623-2.069-4.623-4.623s2.069-4.623 4.623-4.623a4.623 4.623 0 0 1 0 9.246zm4.807-8.339a1.077 1.077 0 0 1-1.078-1.078 1.077 1.077 0 1 1 2.155 0c0 .596-.482 1.078-1.077 1.078z"/><circle cx="11.994" cy="11.979" r="3.003"/></svg><span>instagram</span></a>
                                    :''
                                }                      
                                {eventCard.telegram ? 
                                    <a href={telegramUrl(eventCard.telegram)} className="share__link share__link--te" target="_blank"><svg width="16px" height="16px" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg"><path d="M23.91 3.79L20.3 20.84c-.25 1.21-.98 1.5-2 .94l-5.5-4.07-2.66 2.57c-.3.3-.55.56-1.1.56-.72 0-.6-.27-.84-.95L6.3 13.7l-5.45-1.7c-1.18-.35-1.19-1.16.26-1.75l21.26-8.2c.97-.43 1.9.24 1.53 1.73z"/></svg> <span>telegram</span></a>
                                    :''
                                }             
                                {eventCard.discord ?
                                    <a href={eventCard.discord} className="share__link share__link--discord" target="_blank"><svg width="18px" height="18px" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/></svg><span>discord</span></a>
                                    :''
                                } 
                                {eventCard.tiktok ?
                                    <a href={eventCard.tiktok} className="share__link share__link--tiktok" target="_blank"><svg width="15px" height="18px" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg"><title>TikTok icon</title><path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg><span>tiktok</span></a>
                                    :''
                                }
                                
                            </div>
                            <button className="asset__likes" type="button">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <path d="M20.16,5A6.29,6.29,0,0,0,12,4.36a6.27,6.27,0,0,0-8.16,9.48l6.21,6.22a2.78,2.78,0,0,0,3.9,0l6.21-6.22A6.27,6.27,0,0,0,20.16,5Zm-1.41,7.46-6.21,6.21a.76.76,0,0,1-1.08,0L5.25,12.43a4.29,4.29,0,0,1,0-6,4.27,4.27,0,0,1,6,0,1,1,0,0,0,1.42,0,4.27,4.27,0,0,1,6,0A4.29,4.29,0,0,1,18.75,12.43Z"/></svg>
                                <span>358</span>
                            </button>
                        </div>
                    </div>

                    <div className="col-12 col-xl-4">
                        <div className="asset__info">
                            <div className="asset__desc">
                                <h2>Descriptions</h2>
                                <p>{eventCard.venue_description}</p>
                            </div>

                            <ul className="asset__authors">
                                <li>
                                    <span>Creator</span>
                                    <div className="asset__author asset__author--verified">
                                        {eventCard.creator.avatar ? 
                                            <img src={`${config.API_BASE_URL}/api/upload/get_file?path=${eventCard.creator.avatar}`} alt=""/>
                                            :
                                            <img src="/img/avatars/avatar5.jpg" alt=""/>
                                        }
                                        <Link to="/author">{eventCard.creator.name}</Link>
                                    </div>
                                </li>
                                <li>
                                    <span>Collection</span>
                                    <div className="asset__author ">
                                        <img src="/img/avatars/avatar5.jpg" alt=""/>
                                        <Link to="/collection">Event</Link>
                                    </div>
                                </li>
                            </ul>

                            <ul className="nav nav-tabs asset__tabs" role="tablist">
                                <li className="nav-item">
                                    <a className="nav-link" data-toggle="tab" href="#tab-3" role="tab" aria-controls="tab-3" aria-selected="false">Details</a>
                                </li>
                            </ul>

                            <div className="tab-content">
                                <div className="tab-pane fade show active" id="tab-1" role="tabpanel">
                                    <div className="asset__actions asset__actions--scroll" id="asset__actions--scroll" style={{height: 'inherit'}}>
                                        <p>Location {eventCard.location}</p>
                                        <p>Date {eventCard.date}</p>
                                        <p>{eventCard.description}</p>
                                    </div>
                            </div>

                            <div className="tab-pane fade" id="tab-2" role="tabpanel">
                                <div className="asset__actions">
                                    <div className="asset__action asset__action--verified">
                                        <img src="/img/avatars/avatar10.jpg" alt=""/>
                                        <p>Bid placed for <b>11.00 €</b> 4 hours ago <br/>by <Link to="/author">@erikkk</Link></p>
                                    </div>

                                    <div className="asset__action asset__action--verified">
                                        <img src="/img/avatars/avatar4.jpg" alt=""/>
                                        <p>Bid placed for <b>10.00 €</b> 5 hours ago <br/>by <Link to="/author">@johndoe</Link></p>
                                    </div>

                                    <div className="asset__action asset__action--verified">
                                        <img src="/img/avatars/avatar6.jpg" alt=""/>
                                        <p>Bid placed for <b>2.508 €</b> 5 hours ago <br/>by <Link to="/author">@n1ckname</Link></p>
                                    </div>
                                </div>
                            </div>

                            <div className="tab-pane fade" id="tab-3" role="tabpanel">
                                <ul className="asset__authors asset__authors--tab">
                                    <li>
                                        <span>Owner</span>
                                        <div className="asset__author asset__author--verified">
                                            <img src="/img/avatars/avatar5.jpg" alt=""/>
                                            <Link to="/author">@midinh</Link>
                                        </div>
                                    </li>
                                    <li>
                                        <span>Year created</span>
                                        <p>2021</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="asset__wrap">
                            <div className="asset__timer">
                                <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.3,8.59l.91-.9a1,1,0,0,0-1.42-1.42l-.9.91a8,8,0,0,0-9.79,0l-.91-.92A1,1,0,0,0,4.77,7.69l.92.91A7.92,7.92,0,0,0,4,13.5,8,8,0,1,0,18.3,8.59ZM12,19.5a6,6,0,1,1,6-6A6,6,0,0,1,12,19.5Zm-2-15h4a1,1,0,0,0,0-2H10a1,1,0,0,0,0,2Zm3,6a1,1,0,0,0-2,0v1.89a1.5,1.5,0,1,0,2,0Z"/></svg> Events start in</span>
                                <div className="event__clock">
                                    <EventCountDown date={eventCard.date} />
                                </div>
                            </div>

                            <div className="asset__price">
                                <span>Price</span>
                                <span>€{eventCard.price}</span>
                            </div>
                        </div>
                        <div className="asset__btns">
                            <button className="asset__btn asset__btn--full asset__btn--clr open-modal"
                                // disabled={eventCard.total_tickets == eventCard.buy_count}
                                onClick={handleBuyTicket}
                            >Buy Ticket</button>
                        </div>

                        </div>
                    </div>
                </div>
                :
                ''
            }
            
            <section className="row row--grid">
                <div className="col-12">
                    <div className="main__title main__title--border-top">
                        <h2><Link to="/explorer">Other author assets</Link></h2>
                    </div>
                </div>

                {latestEvents.length > 0 ?

                    <div className="col-12">
                        <div className='carousel-wrapper'>
                            <div className='nav-wrapper'>
                                <button className="main__nav main__nav--prev" type="button" onClick={() => prev(latestEventCarousel)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                        <path d="M17,11H9.41l3.3-3.29a1,1,0,1,0-1.42-1.42l-5,5a1,1,0,0,0-.21.33,1,1,0,0,0,0,.76,1,1,0,0,0,.21.33l5,5a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42L9.41,13H17a1,1,0,0,0,0-2Z"/>
                                    </svg>
                                </button>
                                <button className="main__nav main__nav--next" type="button" onClick={() => next(latestEventCarousel)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                        <path d="M17.92,11.62a1,1,0,0,0-.21-.33l-5-5a1,1,0,0,0-1.42,1.42L14.59,11H7a1,1,0,0,0,0,2h7.59l-3.3,3.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l5-5a1,1,0,0,0,.21-.33A1,1,0,0,0,17.92,11.62Z"/>
                                    </svg>
                                </button>
                            </div>
                            <OwlCarousel className='owl-theme' margin={30} items={4} autoplay dots={false} ref={latestEventCarousel as any}>
                                {lastestEventsEle()}
                            </OwlCarousel>    
                        </div>
                    </div>
                    :''
                }

            </section>
        </div>
        </main>
    );
}

export default PageEventCard;
