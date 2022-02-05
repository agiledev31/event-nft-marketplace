import React from 'react';
import {Link} from "react-router-dom";

const PageCollection = () => {
    return (
        <div  style={{marginBottom:70, marginTop:70}}>
            <div className="main__author" style={{backgroundImage: 'url("img/bg/bg.png")', backgroundRepeat:"no-repeat", backgroundPosition:"center"}}>
                &nbsp;
            </div>
            <div className="container">
            <div className="row row--grid">
                <div className="col-12 col-xl-3">
                    <div className="author author--page">
                        <div className="author__meta">
                            <Link to="/author" className="author__avatar author__avatar--verified">
                                <img src="img/avatars/avatar5.jpg" alt="" />
                            </Link>
                            <h1 className="author__name"><Link to="/author">Lily Rose</Link></h1>
                            <h2 className="author__nickname"><Link to="/author">@l1rose</Link></h2>
                            <p className="author__text">Please insert below your Binannce Smart Chain wallet address</p>
                            <div className="author__code">
                                <input type="text" defaultValue="XAVUW3sw3ZunitokcLtemEfX3tGuX2plateWdh"  />
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

                <div className="col-12 col-xl-9">
                    <div className="row row--grid">
                        <div className="col-12 col-sm-6 col-lg-4">
                            <div className="card" style={{height: 460, width: 260, marginLeft :20}}>
                                <Link to="/item" className="card__cover">
                                    <img src="img/cover/cover8.jpg" alt="" />
                                </Link>
                                <h3 className="card__title"><Link to="/item">Walking on Air</Link></h3>
                                <div className="card__author card__author--verified">
                                    <img src="img/avatars/avatar5.jpg" alt="" />
                                        <Link to="/author">@l1rose</Link>
                                </div>
                                <div className="card__info">
                                    <div className="card__price">
                                        <span>Reserve price</span>
                                        <span>4.89 ETH</span>
                                    </div>

                                    <button className="card__likes" type="button">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                            <path d="M20.16,5A6.29,6.29,0,0,0,12,4.36a6.27,6.27,0,0,0-8.16,9.48l6.21,6.22a2.78,2.78,0,0,0,3.9,0l6.21-6.22A6.27,6.27,0,0,0,20.16,5Zm-1.41,7.46-6.21,6.21a.76.76,0,0,1-1.08,0L5.25,12.43a4.29,4.29,0,0,1,0-6,4.27,4.27,0,0,1,6,0,1,1,0,0,0,1.42,0,4.27,4.27,0,0,1,6,0A4.29,4.29,0,0,1,18.75,12.43Z"/>
                                        </svg>
                                        <span>189</span>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-sm-6 col-lg-4">
                            <div className="card" style={{height: 460, width: 260, marginLeft :20}}>
                                <Link to="/item" className="card__cover">
                                    <img src="img/cover/cover7.jpg" alt="" />
                                </Link>
                                <h3 className="card__title"><Link to="/item">Les Immortels, the Treachery of
                                    Artificial Shadows</Link></h3>
                                <div className="card__author card__author--verified">
                                    <img src="img/avatars/avatar5.jpg" alt="" />
                                        <Link to="/author">@l1rose</Link>
                                </div>
                                <div className="card__info">
                                    <div className="card__price">
                                        <span>Reserve price</span>
                                        <span>2.61 ETH</span>
                                    </div>

                                    <button className="card__likes" type="button">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                            <path d="M20.16,5A6.29,6.29,0,0,0,12,4.36a6.27,6.27,0,0,0-8.16,9.48l6.21,6.22a2.78,2.78,0,0,0,3.9,0l6.21-6.22A6.27,6.27,0,0,0,20.16,5Zm-1.41,7.46-6.21,6.21a.76.76,0,0,1-1.08,0L5.25,12.43a4.29,4.29,0,0,1,0-6,4.27,4.27,0,0,1,6,0,1,1,0,0,0,1.42,0,4.27,4.27,0,0,1,6,0A4.29,4.29,0,0,1,18.75,12.43Z"/>
                                        </svg>
                                        <span>702</span>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-sm-6 col-lg-4">
                            <div className="card" style={{height: 460, width: 260, marginLeft :20}}>
                                <a href="#modal-asset" className="card__cover open-modal">
                                    <img src="img/cover/cover6.jpg" alt="" />
                                </a>
                                <h3 className="card__title"><a href="#modal-asset" className="open-modal">Flowers in
                                    Concrete (Modal)</a></h3>
                                <div className="card__author card__author--verified">
                                    <img src="img/avatars/avatar5.jpg" alt="" />
                                        <Link to="/author">@l1rose</Link>
                                </div>
                                <div className="card__info">
                                    <div className="card__price">
                                        <span>Reserve price</span>
                                        <span>3.19 ETH</span>
                                    </div>

                                    <button className="card__likes card__likes--active" type="button">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                            <path d="M20.16,5A6.29,6.29,0,0,0,12,4.36a6.27,6.27,0,0,0-8.16,9.48l6.21,6.22a2.78,2.78,0,0,0,3.9,0l6.21-6.22A6.27,6.27,0,0,0,20.16,5Zm-1.41,7.46-6.21,6.21a.76.76,0,0,1-1.08,0L5.25,12.43a4.29,4.29,0,0,1,0-6,4.27,4.27,0,0,1,6,0,1,1,0,0,0,1.42,0,4.27,4.27,0,0,1,6,0A4.29,4.29,0,0,1,18.75,12.43Z"/>
                                        </svg>
                                        <span>37</span>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-sm-6 col-lg-4">
                            <div className="card" style={{height: 460, width: 260, marginLeft :20}}>
                                <Link to="/item" className="card__cover">
                                    <img src="img/cover/cover5.jpg" alt="" />
                                </Link>
                                <h3 className="card__title"><Link to="/item">Industrial Revolution</Link></h3>
                                <div className="card__author card__author--verified">
                                    <img src="img/avatars/avatar5.jpg" alt="" />
                                        <Link to="/author">@l1rose</Link>
                                </div>
                                <div className="card__info">
                                    <div className="card__price">
                                        <span>Reserve price</span>
                                        <span>1.11 ETH</span>
                                    </div>

                                    <button className="card__likes" type="button">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                            <path d="M20.16,5A6.29,6.29,0,0,0,12,4.36a6.27,6.27,0,0,0-8.16,9.48l6.21,6.22a2.78,2.78,0,0,0,3.9,0l6.21-6.22A6.27,6.27,0,0,0,20.16,5Zm-1.41,7.46-6.21,6.21a.76.76,0,0,1-1.08,0L5.25,12.43a4.29,4.29,0,0,1,0-6,4.27,4.27,0,0,1,6,0,1,1,0,0,0,1.42,0,4.27,4.27,0,0,1,6,0A4.29,4.29,0,0,1,18.75,12.43Z"/>
                                        </svg>
                                        <span>23</span>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-sm-6 col-lg-4">
                            <div className="card" style={{height: 460, width: 260, marginLeft :20}}>
                                <Link to="/item" className="card__cover">
                                    <img src="img/cover/cover4.jpg" alt="" />
                                </Link>
                                <h3 className="card__title"><Link to="/item">I Love You</Link></h3>
                                <div className="card__author card__author--verified">
                                    <img src="img/avatars/avatar5.jpg" alt="" />
                                        <Link to="/author">@l1rose</Link>
                                </div>
                                <div className="card__info">
                                    <div className="card__price">
                                        <span>Reserve price</span>
                                        <span>0.99 ETH</span>
                                    </div>

                                    <button className="card__likes" type="button">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                            <path d="M20.16,5A6.29,6.29,0,0,0,12,4.36a6.27,6.27,0,0,0-8.16,9.48l6.21,6.22a2.78,2.78,0,0,0,3.9,0l6.21-6.22A6.27,6.27,0,0,0,20.16,5Zm-1.41,7.46-6.21,6.21a.76.76,0,0,1-1.08,0L5.25,12.43a4.29,4.29,0,0,1,0-6,4.27,4.27,0,0,1,6,0,1,1,0,0,0,1.42,0,4.27,4.27,0,0,1,6,0A4.29,4.29,0,0,1,18.75,12.43Z"/>
                                        </svg>
                                        <span>358</span>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-sm-6 col-lg-4">
                            <div className="card" style={{height: 460, width: 260, marginLeft :20}}>
                                <Link to="/item" className="card__cover">
                                    <img src="img/cover/cover3.jpg" alt="" />
                                </Link>
                                <h3 className="card__title"><Link to="/item">To Infinity And Beyond</Link></h3>
                                <div className="card__author card__author--verified">
                                    <img src="img/avatars/avatar5.jpg" alt="" />
                                        <Link to="/author">@l1rose</Link>
                                </div>
                                <div className="card__info">
                                    <div className="card__price">
                                        <span>Reserve price</span>
                                        <span>3.33 ETH</span>
                                    </div>

                                    <button className="card__likes" type="button">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                            <path d="M20.16,5A6.29,6.29,0,0,0,12,4.36a6.27,6.27,0,0,0-8.16,9.48l6.21,6.22a2.78,2.78,0,0,0,3.9,0l6.21-6.22A6.27,6.27,0,0,0,20.16,5Zm-1.41,7.46-6.21,6.21a.76.76,0,0,1-1.08,0L5.25,12.43a4.29,4.29,0,0,1,0-6,4.27,4.27,0,0,1,6,0,1,1,0,0,0,1.42,0,4.27,4.27,0,0,1,6,0A4.29,4.29,0,0,1,18.75,12.43Z"/>
                                        </svg>
                                        <span/>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="row row--grid">
                        <div className="col-12">
                            <div className="paginator" style={{width: 926, marginLeft:20}}>
                                <span className="paginator__pages">8 from 169</span>

                                <ul className="paginator__list">
                                    <li>
                                        <a href="#">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                                <path d="M17,11H9.41l3.3-3.29a1,1,0,1,0-1.42-1.42l-5,5a1,1,0,0,0-.21.33,1,1,0,0,0,0,.76,1,1,0,0,0,.21.33l5,5a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42L9.41,13H17a1,1,0,0,0,0-2Z"/>
                                            </svg>
                                        </a>
                                    </li>
                                    <li className="active"><a href="#">1</a></li>
                                    <li><a href="#">2</a></li>
                                    <li><a href="#">3</a></li>
                                    <li><a href="#">4</a></li>
                                    <li>
                                        <a href="#">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                                <path d="M17.92,11.62a1,1,0,0,0-.21-.33l-5-5a1,1,0,0,0-1.42,1.42L14.59,11H7a1,1,0,0,0,0,2h7.59l-3.3,3.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l5-5a1,1,0,0,0,.21-.33A1,1,0,0,0,17.92,11.62Z"/>
                                            </svg>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className="row row--grid">
                <div className="col-12">
                    <div className="main__title">
                        <h2>Hot collections</h2>
                    </div>
                </div>
                <div className="col-12">
                    <div className="main__carousel-wrap">
                        <div className="main__carousel main__carousel--collections owl-carousel owl-loaded"
                                id="collections">
                            <div className="owl-stage-outer owl-height" style={{height: 249}}>
                                <div className="owl-stage"
                                        style={{transform: 'translate3d(-1330, 0, 0)', transition: 'all 0s ease 0s', width: '4522'}}>
                                    <div className="owl-item cloned" style={{width: 236, marginRight: 30}}>
                                        <div className="collection" style={{width: 200, marginLeft: 20}}>
                                            <Link to="/collection" className="collection__cover"
                                                style={{background: "url(/img/bg/bg-small3.png)", backgroundRepeat: "no-repeat", backgroundPosition: "center"}}/>
                                            <div className="collection__meta">
                                                <Link to="/author"
                                                    className="collection__avatar collection__avatar--verified">
                                                    <img src="img/avatars/avatar12.jpg" alt="" />
                                                </Link>
                                                <h3 className="collection__name"><Link to="/collection">Inventory</Link>
                                                </h3>
                                                <span className="collection__number">ERC-1155</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="owl-item cloned" style={{width: 236, marginRight: 30}}>
                                        <div className="collection">
                                            <Link to="/collection" className="collection__cover"
                                                style={{background: "url(/img/bg/bg-small4.png)", backgroundRepeat: "no-repeat", backgroundPosition: "center"}}/>
                                            <div className="collection__meta">
                                                <Link to="/author" className="collection__avatar">
                                                    <img src="img/avatars/avatar15.jpg" alt="" />
                                                </Link>
                                                <h3 className="collection__name">
                                                    <Link to="/collection">ProphecyNFT</Link></h3>
                                                <span className="collection__number">ERC-721</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="owl-item cloned" style={{width: 236, marginRight: 30}}>
                                        <div className="collection" style={{width: 200, marginLeft: 20}}>
                                            <Link to="/collection" className="collection__cover"
                                                style={{background: "url(/img/bg/bg-small5.png)", backgroundRepeat: "no-repeat", backgroundPosition: "center"}}/>
                                            <div className="collection__meta">
                                                <Link to="/author.html"
                                                    className="collection__avatar collection__avatar--verified">
                                                    <img src="img/avatars/avatar4.jpg" alt="" />
                                                </Link>
                                                <h3 className="collection__name">
                                                    <Link to="/collection">Hashavatars</Link></h3>
                                                <span className="collection__number">ERC-1155</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="owl-item cloned" style={{width: 236, marginRight: 30}}>
                                        <div className="collection" style={{width: 200, marginLeft: 20}}>
                                            <Link to="/collection" className="collection__cover"
                                                style={{background: 'url(/img/bg/bg-small6.png)', backgroundRepeat: "no-repeat", backgroundPosition: "center"}}/>
                                            <div className="collection__meta">
                                                <Link to="/author" className="collection__avatar">
                                                    <img src="img/avatars/avatar11.jpg" alt="" />
                                                </Link>
                                                <h3 className="collection__name">
                                                    <Link to="/collection">Clap Token</Link></h3>
                                                <span className="collection__number">ERC-1155</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="owl-item cloned" style={{width: 236, marginRight: 30}}>
                                        <div className="collection" style={{width: 200, marginLeft: 20}}>
                                            <Link to="/collection" className="collection__cover"
                                                style={{background: "url(/img/bg/bg-small4.png)", backgroundRepeat: "no-repeat", backgroundPosition: "center"}}
                                            />
                                            <div className="collection__meta">
                                                <Link to="/author"
                                                    className="collection__avatar collection__avatar--verified">
                                                    <img src="img/avatars/avatar15.jpg" alt="" />
                                                </Link>
                                                <h3 className="collection__name">
                                                    <Link to="/collection">InventoryNFT</Link></h3>
                                                <span className="collection__number">ERC-721</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="owl-item active" style={{width: 236, marginRight: 30}}>
                                        <div className="collection" style={{width: 200, marginLeft: 20}}>
                                            <Link to="/collection" className="collection__cover"
                                                style={{background: "url(/img/bg/bg-small.png)", backgroundRepeat: "no-repeat", backgroundPosition: "center"}}/>
                                            <div className="collection__meta">
                                                <Link to="/author" className="collection__avatar collection__avatar--verified">
                                                    <img src="img/avatars/avatar3.jpg" alt="" />
                                                </Link>
                                                <h3 className="collection__name"><Link to="/collection">Hashmasks</Link>
                                                </h3>
                                                <span className="collection__number">ERC-721</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="owl-item active" style={{width: 236, marginRight: 30}}>
                                        <div className="collection" style={{width: 200, marginLeft: 20}}>
                                            <Link to="/collection" className="collection__cover"
                                                style={{background: "url(/img/bg/bg-small2.png)", backgroundRepeat: "no-repeat", backgroundPosition: "center"}}/>
                                            <div className="collection__meta">
                                                <Link to="/author"
                                                    className="collection__avatar collection__avatar--verified">
                                                    <img src="img/avatars/avatar9.jpg" alt="" />
                                                </Link>
                                                <h3 className="collection__name"><Link to="/collection">NFTheft</Link>
                                                </h3>
                                                <span className="collection__number">ERC-721</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="owl-item active" style={{width: 236, marginRight: 30}}>
                                        <div className="collection" style={{width: 200, marginLeft: 20}}>
                                            <Link to="/collection" className="collection__cover"
                                                style={{background: "url(/img/bg/bg-small3.png)", backgroundRepeat: "no-repeat", backgroundPosition: "center"}}/>
                                            <div className="collection__meta">
                                                <Link to="/author"
                                                    className="collection__avatar collection__avatar--verified">
                                                    <img src="img/avatars/avatar12.jpg" alt="" />
                                                </Link>
                                                <h3 className="collection__name"><Link to="/collection">Inventory</Link>
                                                </h3>
                                                <span className="collection__number">ERC-1155</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="owl-item active" style={{width: 236, marginRight: 30}}>
                                        <div className="collection" style={{width: 200, marginLeft: 20}}>
                                            <Link to="/collection" className="collection__cover"
                                                style={{background: "url(/img/bg/bg-small4.png)", backgroundRepeat: "no-repeat", backgroundPosition: "center"}}/>
                                            <div className="collection__meta">
                                                <Link to="/author" className="collection__avatar">
                                                    <img src="img/avatars/avatar15.jpg" alt="" />
                                                </Link>
                                                <h3 className="collection__name">
                                                    <Link to="/collection">ProphecyNFT</Link></h3>
                                                <span className="collection__number">ERC-721</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="owl-item active" style={{width: 236, marginRight: 30}}>
                                        <div className="collection" style={{width: 200, marginLeft: 20}}>
                                            <Link to="/collection" className="collection__cover"
                                                style={{background: "url(/img/bg/bg-small5.png)", backgroundRepeat: "no-repeat", backgroundPosition: "center"}}/>
                                            <div className="collection__meta">
                                                <Link to="/author"
                                                    className="collection__avatar collection__avatar--verified">
                                                    <img src="img/avatars/avatar4.jpg" alt="" />
                                                </Link>
                                                <h3 className="collection__name">
                                                    <Link to="/collection">Hashavatars</Link></h3>
                                                <span className="collection__number">ERC-1155</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="owl-item" style={{width: 236, marginRight: 30}}>
                                        <div className="collection" style={{width: 200, marginLeft: 20}}>
                                            <Link to="/collection" className="collection__cover"
                                                style={{background: "url(/img/bg/bg-small6.png)", backgroundRepeat: "no-repeat", backgroundPosition: "center"}}/>
                                            <div className="collection__meta">
                                                <Link to="/author" className="collection__avatar">
                                                    <img src="img/avatars/avatar11.jpg" alt="" />
                                                </Link>
                                                <h3 className="collection__name">
                                                    <Link to="/collection">Clap Token</Link></h3>
                                                <span className="collection__number">ERC-1155</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="owl-item" style={{width: 236, marginRight: 30}}>
                                        <div className="collection" style={{width: 200, marginLeft: 20}}>
                                            <Link to="/collection" className="collection__cover"
                                                style={{background: "url(/img/bg/bg-small4.png)", backgroundRepeat: "no-repeat", backgroundPosition: "center"}}
                                            />
                                            <div className="collection__meta">
                                                <Link to="/author"
                                                    className="collection__avatar collection__avatar--verified">
                                                    <img src="img/avatars/avatar15.jpg" alt="" />
                                                </Link>
                                                <h3 className="collection__name">
                                                    <Link to="/collection">InventoryNFT</Link></h3>
                                                <span className="collection__number">ERC-721</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="owl-item cloned" style={{width: 236, marginRight: 30}}>
                                        <div className="collection" style={{width: 200, marginLeft: 20}}>
                                            <Link to="/collection" className="collection__cover"
                                                style={{background: "url(/img/bg/bg-small.png)", backgroundRepeat: "no-repeat", backgroundPosition: "center"}}/>
                                            <div className="collection__meta">
                                                <Link to="/author"
                                                    className="collection__avatar collection__avatar--verified">
                                                    <img src="img/avatars/avatar3.jpg" alt="" />
                                                </Link>
                                                <h3 className="collection__name"><Link to="/collection">Hashmasks</Link>
                                                </h3>
                                                <span className="collection__number">ERC-721</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="owl-item cloned" style={{width: 236, marginRight: 30}}>
                                        <div className="collection" style={{width: 200, marginLeft: 20}}>
                                            <Link to="/collection" className="collection__cover"
                                                style={{background: "url(/img/bg/bg-small2.png)", backgroundRepeat: "no-repeat", backgroundPosition: "center"}}/>
                                            <div className="collection__meta">
                                                <Link to="/author"
                                                    className="collection__avatar collection__avatar--verified">
                                                    <img src="img/avatars/avatar9.jpg" alt="" />
                                                </Link>
                                                <h3 className="collection__name"><Link to="/collection">NFTheft</Link>
                                                </h3>
                                                <span className="collection__number">ERC-721</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="owl-item cloned" style={{width: 236, marginRight: 30}}>
                                        <div className="collection" style={{width: 200, marginLeft: 20}}>
                                            <Link to="/collection" className="collection__cover"
                                                style={{background: "url(/img/bg/bg-small3.png)", backgroundRepeat: "no-repeat", backgroundPosition: "center"}}/>
                                            <div className="collection__meta">
                                                <Link to="/author"
                                                    className="collection__avatar collection__avatar--verified">
                                                    <img src="img/avatars/avatar12.jpg" alt="" />
                                                </Link>
                                                <h3 className="collection__name">
                                                    <Link to="/collection">Inventory</Link>
                                                </h3>
                                                <span className="collection__number">ERC-1155</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="owl-item cloned" style={{width: 236, marginRight: 30}}>
                                        <div className="collection" style={{width: 200, marginLeft: 20}}>
                                            <Link to="/collection" className="collection__cover"
                                                style={{background: "url(/img/bg/bg-small4.png)", backgroundRepeat: "no-repeat", backgroundPosition: "center"}}/>
                                            <div className="collection__meta">
                                                <Link to="/author" className="collection__avatar">
                                                    <img src="img/avatars/avatar15.jpg" alt="" />
                                                </Link>
                                                <h3 className="collection__name">
                                                    <Link to="/collection">ProphecyNFT</Link></h3>
                                                <span className="collection__number">ERC-721</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="owl-item cloned" style={{width: 236, marginRight: 30}}>
                                        <div className="collection" style={{width: 200, marginLeft: 20}}>
                                            <Link to="/collection" className="collection__cover"
                                                style={{background: "url(/img/bg/bg-small5.png)", backgroundRepeat: "no-repeat", backgroundPosition: "center"}}/>
                                            <div className="collection__meta">
                                                <Link to="/author"
                                                    className="collection__avatar collection__avatar--verified">
                                                    <img src="img/avatars/avatar4.jpg" alt="" />
                                                </Link>
                                                <h3 className="collection__name">
                                                    <Link to="/collection">Hashavatars</Link></h3>
                                                <span className="collection__number">ERC-1155</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="owl-nav disabled">
                                <button type="button" role="presentation" className="owl-prev"><span
                                    aria-label="Previous">�</span></button>
                                <button type="button" role="presentation" className="owl-next"><span
                                    aria-label="Next">�</span></button>
                            </div>
                            <div className="owl-dots disabled"/>
                        </div>

                        <button className="main__nav main__nav--prev" data-nav="#collections" type="button">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path d="M17,11H9.41l3.3-3.29a1,1,0,1,0-1.42-1.42l-5,5a1,1,0,0,0-.21.33,1,1,0,0,0,0,.76,1,1,0,0,0,.21.33l5,5a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42L9.41,13H17a1,1,0,0,0,0-2Z"/>
                            </svg>
                        </button>
                        <button className="main__nav main__nav--next" data-nav="#collections" type="button">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path d="M17.92,11.62a1,1,0,0,0-.21-.33l-5-5a1,1,0,0,0-1.42,1.42L14.59,11H7a1,1,0,0,0,0,2h7.59l-3.3,3.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l5-5a1,1,0,0,0,.21-.33A1,1,0,0,0,17.92,11.62Z"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </section>
            </div>
        </div>
    );
}

export default PageCollection;
