import React from 'react';
import {Link} from "react-router-dom";

const Hotcollections = () => {
    return (
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
                                 style={{transform: 'translate3d(-1330, 0, 0)', transition: "all 0s ease 0s", width: 4522}}>
                                <div className="owl-item cloned" style={{width: 236, marginRight: 30}}>
                                    <div className="collection">
                                        <Link to="/collection" className="collection__cover" style={{background: "url(/img/bg/bg-small3.png)"}}/>
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
                                    <div className="collection">
                                        <Link to="/collection" className="collection__cover" style={{background: "url(/img/bg/bg-small4.png)", backgroundRepeat: "no-repeat", backgroundPosition: "center"}} />
                                        <div className="collection__meta">
                                            <Link to="/author" className="collection__avatar">
                                                <img src="img/avatars/avatar15.jpg" alt="" />
                                            </Link>
                                            <h3 className="collection__name">
                                                <Link to="/collection">ProphecyNFT</Link>
                                            </h3>
                                            <span className="collection__number">ERC-721</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="owl-item cloned" style={{width: 236, marginRight: 30}}>
                                    <div className="collection">
                                        <Link to="/collection" className="collection__cover" style={{background: "url(/img/bg/bg-small5.png)", backgroundRepeat: "no-repeat", backgroundPosition: "center"}} />
                                        <div className="collection__meta">
                                            <Link to="/author"
                                               className="collection__avatar collection__avatar--verified">
                                                <img src="img/avatars/avatar4.jpg" alt="" />
                                            </Link>
                                            <h3 className="collection__name">
                                                <Link to="/collection">Hashavatars</Link>
                                            </h3>
                                            <span className="collection__number">ERC-1155</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="owl-item cloned" style={{width: 236, marginRight: 30}}>
                                    <div className="collection">
                                        <Link to="/collection" className="collection__cover" style={{background: "url(/img/bg/bg-small6.png)", backgroundRepeat: "no-repeat", backgroundPosition: "center"}} />
                                        <div className="collection__meta">
                                            <Link to="/author" className="collection__avatar">
                                                <img src="img/avatars/avatar11.jpg" alt="" />
                                            </Link>
                                            <h3 className="collection__name">
                                                <Link to="/collection">Clap Token</Link>
                                            </h3>
                                            <span className="collection__number">ERC-1155</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="owl-item cloned" style={{width: 236, marginRight: 30}}>
                                    <div className="collection">
                                        <Link to="/collection" className="collection__cover"
                                            style={{background: "url(/img/bg/bg-small3.png)", backgroundRepeat: "no-repeat", backgroundPosition: "center"}} 
                                        />
                                        <div className="collection__meta">
                                            <Link to="/author" className="collection__avatar collection__avatar--verified"                            >
                                                <img src="img/avatars/avatar15.jpg" alt="" />
                                            </Link>
                                            <h3 className="collection__name">
                                                <Link to="/collection">InventoryNFT</Link>
                                            </h3>
                                            <span className="collection__number">ERC-721</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="owl-item active" style={{width: 236, marginRight: 30}}>
                                    <div className="collection">
                                        <Link to="/collection" className="collection__cover" style={{background: "url(/img/bg/bg-small6.png)", backgroundRepeat: "no-repeat", backgroundPosition: "center"}} />
                                        <div className="collection__meta">
                                            <Link to="/author" className="collection__avatar collection__avatar--verified">
                                                <img src="img/avatars/avatar3.jpg" alt="" />
                                            </Link>
                                            <h3 className="collection__name">
                                                <Link to="/collection">Hashmasks</Link>
                                            </h3>
                                            <span className="collection__number">ERC-721</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="owl-item active" style={{width: 236, marginRight: 30}}>
                                    <div className="collection">
                                        <Link to="/collection" className="collection__cover" style={{background: "url(/img/bg/bg-small2.png)", backgroundRepeat: "no-repeat", backgroundPosition: "center"}} />
                                        <div className="collection__meta">
                                            <Link to="/author"
                                               className="collection__avatar collection__avatar--verified">
                                                <img src="img/avatars/avatar9.jpg" alt="" />
                                            </Link>
                                            <h3 className="collection__name">
                                                <Link to="/collection">NFTheft</Link>
                                            </h3>
                                            <span className="collection__number">ERC-721</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="owl-item active" style={{width: 236, marginRight: 30}}>
                                    <div className="collection">
                                        <Link to="/collection" className="collection__cover" style={{background: "url(/img/bg/bg-small3.png)", backgroundRepeat: "no-repeat", backgroundPosition: "center"}} />
                                        <div className="collection__meta">
                                            <Link to="/collection" className="collection__avatar collection__avatar--verified">
                                                <img src="img/avatars/avatar12.jpg" alt="" />
                                            </Link>
                                            <h3 className="collection__name">
                                                <Link to="/collection">Inventory</Link>
                                            </h3>
                                            <span className="collection__number">ERC-1155</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="owl-item active" style={{width: 236, marginRight: 30}}>
                                    <div className="collection">
                                        <Link to="/collection" className="collection__cover" style={{background: "url(/img/bg/bg-small4.png)", backgroundRepeat: "no-repeat", backgroundPosition: "center"}} />
                                        <div className="collection__meta">
                                            <Link to="/author" className="collection__avatar">
                                                <img src="img/avatars/avatar15.jpg" alt="" />
                                            </Link>
                                            <h3 className="collection__name">
                                                <Link to="/collection">ProphecyNFT</Link>
                                            </h3>
                                            <span className="collection__number">ERC-721</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="owl-item active" style={{width: 236, marginRight: 30}}>
                                    <div className="collection">
                                        <Link to="/collection" className="collection__cover" style={{background: "url(/img/bg/bg-small5.png)", backgroundRepeat: "no-repeat", backgroundPosition: "center"}} />
                                        <div className="collection__meta">
                                            <Link to="/author" className="collection__avatar collection__avatar--verified">
                                                <img src="img/avatars/avatar4.jpg" alt="" />
                                            </Link>
                                            <h3 className="collection__name">
                                                <Link to="/collection">Hashavatars</Link>
                                            </h3>
                                            <span className="collection__number">ERC-1155</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="owl-item" style={{width: 236, marginRight: 30}}>
                                    <div className="collection">
                                        <Link to="/collection" className="collection__cover" style={{background: "url(/img/bg/bg-small6.png)", backgroundRepeat: "no-repeat", backgroundPosition: "center"}} />
                                        <div className="collection__meta">
                                            <Link to="author" className="collection__avatar">
                                                <img src="img/avatars/avatar11.jpg" alt="" />
                                            </Link>
                                            <h3 className="collection__name"><Link to="/collection">Clap
                                                Token</Link></h3>
                                            <span className="collection__number">ERC-1155</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="owl-item" style={{width: 236, marginRight: 30}}>
                                    <div className="collection">
                                        <Link to="/collection" className="collection__cover"
                                            style={{background: "url(/img/bg/bg-small3.png)", backgroundRepeat: "no-repeat", backgroundPosition: "center"}} 
                                        />
                                        <div className="collection__meta">
                                            <Link to="/collection" className="collection__avatar collection__avatar--verified">
                                                <img src="img/avatars/avatar15.jpg" alt="" />
                                            </Link>
                                            <h3 className="collection__name">
                                                <Link to="/collection">InventoryNFT</Link>
                                            </h3>
                                            <span className="collection__number">ERC-721</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="owl-item cloned" style={{width: 236, marginRight: 30}}>
                                    <div className="collection">
                                        <Link to="/collection" className="collection__cover" style={{background: "url(/img/bg/bg-small6.png)", backgroundRepeat: "no-repeat", backgroundPosition: "center"}} />
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
                                    <div className="collection">
                                        <Link to="/collection" className="collection__cover"
                                           style={{background: "url(/img/bg/bg-small2.png)", backgroundRepeat: "no-repeat",backgroundPosition: "center"}}  />
                                        <div className="collection__meta">
                                            <Link to="/author"
                                               className="collection__avatar collection__avatar--verified">
                                                <img src="img/avatars/avatar9.jpg" alt="" />
                                            </Link>
                                            <h3 className="collection__name">
                                                <Link to="/collection">NFTheft</Link></h3>
                                            <span className="collection__number">ERC-721</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="owl-item cloned" style={{width: 236, marginRight: 30}}>
                                    <div className="collection">
                                        <Link to="/collection" className="collection__cover" style={{background: "url(/img/bg/bg-small3.png)", backgroundRepeat: "no-repeat", backgroundPosition: "center"}} />
                                        <div className="collection__meta">
                                            <Link to="author" className="collection__avatar collection__avatar--verified">
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
                                    <div className="collection">
                                        <Link to="/collection" className="collection__cover" style={{background: "url(/img/bg/bg-small4.png)", backgroundRepeat: "no-repeat", backgroundPosition: "center"}} />
                                        <div className="collection__meta">
                                            <Link to="/author" className="collection__avatar">
                                                <img src="img/avatars/avatar15.jpg" alt="" />
                                            </Link>
                                            <h3 className="collection__name">
                                                <Link to="/collection">ProphecyNFT</Link>
                                            </h3>
                                            <span className="collection__number">ERC-721</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="owl-item cloned" style={{width: 236, marginRight: 30}}>
                                    <div className="collection">
                                        <Link to="/collection" className="collection__cover" style={{background: "url(/img/bg/bg-small5.png)", backgroundRepeat: "no-repeat", backgroundPosition: "center"}} />
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
                                aria-label="Previous">‹</span></button>
                            <button type="button" role="presentation" className="owl-next"><span
                                aria-label="Next">›</span></button>
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

    );
}

export default Hotcollections;