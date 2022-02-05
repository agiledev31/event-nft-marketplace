import React from 'react';

const PageBlog = () => {
    return (
        <div className="container" style={{marginTop: 70, marginBottom: 70}}>
            <div className="row row--grid">

                <div className="col-12">
                    <ul className="breadcrumb">
                        <li className="breadcrumb__item"><a href="/">Home</a></li>
                        <li className="breadcrumb__item breadcrumb__item--active">News</li>
                    </ul>
                </div>

                <div className="col-12">
                    <div className="main__title main__title--page">
                        <h1>News</h1>
                    </div>
                </div>

                <div className="col-12">
                    <ul className="nav nav-tabs main__tabs" id="main__tabs" role="tablist">
                        <li className="nav-item">
                            <a className="nav-link active" data-toggle="tab" href="#tab-1" role="tab"
                                aria-controls="tab-1" aria-selected="true">All</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" data-toggle="tab" href="#tab-2" role="tab" aria-controls="tab-2"
                                aria-selected="false">Digital Art</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" data-toggle="tab" href="#tab-3" role="tab" aria-controls="tab-3"
                                aria-selected="false">Collectibles</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" data-toggle="tab" href="#tab-4" role="tab" aria-controls="tab-4"
                                aria-selected="false">Domains</a>
                        </li>
                    </ul>
                </div>

            </div>

            <div className="tab-content">
                <div className="tab-pane fade show active" id="tab-1" role="tabpanel">
                    <div className="row row--grid">

                        <div className="col-12 col-sm-6 col-lg-4">
                            <div className="post">
                                <a href="/article" className="post__img">
                                    <img src="img/posts/2.jpg" alt=""/>
                                </a>

                                <div className="post__content">
                                    <a href="/" className="post__category">Digital Art</a>
                                    <h3 className="post__title"><a href="/article">A Month of Rare Digital Art from
                                        MakersPlace</a></h3>
                                    <div className="post__meta">
                                        <span className="post__date"><svg xmlns="http://www.w3.org/2000/svg"
                                                                            viewBox="0 0 24 24"><path
                                            d="M12,2A10,10,0,1,0,22,12,10.01114,10.01114,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8.00917,8.00917,0,0,1,12,20ZM14.09814,9.63379,13,10.26807V7a1,1,0,0,0-2,0v5a1.00025,1.00025,0,0,0,1.5.86621l2.59814-1.5a1.00016,1.00016,0,1,0-1-1.73242Z"></path></svg> April 24, 2021</span>
                                        <span className="post__comments"><svg xmlns="http://www.w3.org/2000/svg"
                                                                                viewBox="0 0 24 24"><path
                                            d="M17,9H7a1,1,0,0,0,0,2H17a1,1,0,0,0,0-2Zm-4,4H7a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2ZM12,2A10,10,0,0,0,2,12a9.89,9.89,0,0,0,2.26,6.33l-2,2a1,1,0,0,0-.21,1.09A1,1,0,0,0,3,22h9A10,10,0,0,0,12,2Zm0,18H5.41l.93-.93a1,1,0,0,0,0-1.41A8,8,0,1,1,12,20Z"></path></svg> 88</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-sm-6 col-lg-4">
                            <div className="post">
                                <a href="/article" className="post__img">
                                    <img src="img/posts/3.jpg" alt=""/>
                                </a>

                                <div className="post__content">
                                    <a href="#" className="post__category">Digital Art</a>
                                    <h3 className="post__title">
                                        <a href="article.html">The beginners guide to
                                        creating &amp; selling digital art NFTs</a></h3>
                                    <div className="post__meta">
                                        <span className="post__date">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                                <path
                                            d="M12,2A10,10,0,1,0,22,12,10.01114,10.01114,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8.00917,8.00917,0,0,1,12,20ZM14.09814,9.63379,13,10.26807V7a1,1,0,0,0-2,0v5a1.00025,1.00025,0,0,0,1.5.86621l2.59814-1.5a1.00016,1.00016,0,1,0-1-1.73242Z"></path></svg> April 22, 2021</span>
                                        <span className="post__comments">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                                <path
                                            d="M17,9H7a1,1,0,0,0,0,2H17a1,1,0,0,0,0-2Zm-4,4H7a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2ZM12,2A10,10,0,0,0,2,12a9.89,9.89,0,0,0,2.26,6.33l-2,2a1,1,0,0,0-.21,1.09A1,1,0,0,0,3,22h9A10,10,0,0,0,12,2Zm0,18H5.41l.93-.93a1,1,0,0,0,0-1.41A8,8,0,1,1,12,20Z"></path></svg> 54</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-sm-6 col-lg-4">
                            <div className="post">
                                <a href="article.html" className="post__img">
                                    <img src="img/posts/1.jpg" alt=""/>
                                </a>

                                <div className="post__content">
                                    <a href="#" className="post__category">Charity</a>
                                    <h3 className="post__title"><a href="article.html">Save Thousands Of Lives
                                        Through
                                        This NFT</a></h3>
                                    <div className="post__meta">
                                        <span className="post__date"><svg xmlns="http://www.w3.org/2000/svg"
                                                                            viewBox="0 0 24 24"><path
                                            d="M12,2A10,10,0,1,0,22,12,10.01114,10.01114,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8.00917,8.00917,0,0,1,12,20ZM14.09814,9.63379,13,10.26807V7a1,1,0,0,0-2,0v5a1.00025,1.00025,0,0,0,1.5.86621l2.59814-1.5a1.00016,1.00016,0,1,0-1-1.73242Z"></path></svg> April 25, 2021</span>
                                        <span className="post__comments"><svg xmlns="http://www.w3.org/2000/svg"
                                                                                viewBox="0 0 24 24"><path
                                            d="M17,9H7a1,1,0,0,0,0,2H17a1,1,0,0,0,0-2Zm-4,4H7a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2ZM12,2A10,10,0,0,0,2,12a9.89,9.89,0,0,0,2.26,6.33l-2,2a1,1,0,0,0-.21,1.09A1,1,0,0,0,3,22h9A10,10,0,0,0,12,2Zm0,18H5.41l.93-.93a1,1,0,0,0,0-1.41A8,8,0,1,1,12,20Z"></path></svg> 119</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-sm-6 col-lg-4">
                            <div className="post">
                                <a href="article.html" className="post__img">
                                    <img src="img/posts/4.jpg" alt=""/>
                                </a>

                                <div className="post__content">
                                    <a href="#" className="post__category">Digital Art</a>
                                    <h3 className="post__title"><a href="article.html">A Month of Rare Digital Art
                                        from
                                        MakersPlace</a></h3>
                                    <div className="post__meta">
                                        <span className="post__date"><svg xmlns="http://www.w3.org/2000/svg"
                                                                            viewBox="0 0 24 24"><path
                                            d="M12,2A10,10,0,1,0,22,12,10.01114,10.01114,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8.00917,8.00917,0,0,1,12,20ZM14.09814,9.63379,13,10.26807V7a1,1,0,0,0-2,0v5a1.00025,1.00025,0,0,0,1.5.86621l2.59814-1.5a1.00016,1.00016,0,1,0-1-1.73242Z"></path></svg> April 27, 2021</span>
                                        <span className="post__comments"><svg xmlns="http://www.w3.org/2000/svg"
                                                                                viewBox="0 0 24 24"><path
                                            d="M17,9H7a1,1,0,0,0,0,2H17a1,1,0,0,0,0-2Zm-4,4H7a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2ZM12,2A10,10,0,0,0,2,12a9.89,9.89,0,0,0,2.26,6.33l-2,2a1,1,0,0,0-.21,1.09A1,1,0,0,0,3,22h9A10,10,0,0,0,12,2Zm0,18H5.41l.93-.93a1,1,0,0,0,0-1.41A8,8,0,1,1,12,20Z"></path></svg> 0</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-sm-6 col-lg-4">
                            <div className="post">
                                <a href="article.html" className="post__img">
                                    <img src="img/posts/5.jpg" alt=""/>
                                </a>

                                <div className="post__content">
                                    <a href="#" className="post__category">Collectibles</a>
                                    <h3 className="post__title"><a href="article.html">Rare NFT Series</a></h3>
                                    <div className="post__meta">
                                        <span className="post__date"><svg xmlns="http://www.w3.org/2000/svg"
                                                                            viewBox="0 0 24 24"><path
                                            d="M12,2A10,10,0,1,0,22,12,10.01114,10.01114,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8.00917,8.00917,0,0,1,12,20ZM14.09814,9.63379,13,10.26807V7a1,1,0,0,0-2,0v5a1.00025,1.00025,0,0,0,1.5.86621l2.59814-1.5a1.00016,1.00016,0,1,0-1-1.73242Z"></path></svg> April 28, 2021</span>
                                        <span className="post__comments"><svg xmlns="http://www.w3.org/2000/svg"
                                                                                viewBox="0 0 24 24"><path
                                            d="M17,9H7a1,1,0,0,0,0,2H17a1,1,0,0,0,0-2Zm-4,4H7a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2ZM12,2A10,10,0,0,0,2,12a9.89,9.89,0,0,0,2.26,6.33l-2,2a1,1,0,0,0-.21,1.09A1,1,0,0,0,3,22h9A10,10,0,0,0,12,2Zm0,18H5.41l.93-.93a1,1,0,0,0,0-1.41A8,8,0,1,1,12,20Z"></path></svg> 102</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-sm-6 col-lg-4">
                            <div className="post">
                                <a href="article.html" className="post__img">
                                    <img src="img/posts/6.jpg" alt=""/>
                                </a>

                                <div className="post__content">
                                    <a href="#" className="post__category">Domains</a>
                                    <h3 className="post__title"><a href="article.html">Control Your Own Top Level
                                        Domain
                                        on the DNS &amp; ENS</a></h3>
                                    <div className="post__meta">
                                        <span className="post__date"><svg xmlns="http://www.w3.org/2000/svg"
                                                                            viewBox="0 0 24 24"><path
                                            d="M12,2A10,10,0,1,0,22,12,10.01114,10.01114,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8.00917,8.00917,0,0,1,12,20ZM14.09814,9.63379,13,10.26807V7a1,1,0,0,0-2,0v5a1.00025,1.00025,0,0,0,1.5.86621l2.59814-1.5a1.00016,1.00016,0,1,0-1-1.73242Z"></path></svg> April 28, 2021</span>
                                        <span className="post__comments"><svg xmlns="http://www.w3.org/2000/svg"
                                                                                viewBox="0 0 24 24"><path
                                            d="M17,9H7a1,1,0,0,0,0,2H17a1,1,0,0,0,0-2Zm-4,4H7a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2ZM12,2A10,10,0,0,0,2,12a9.89,9.89,0,0,0,2.26,6.33l-2,2a1,1,0,0,0-.21,1.09A1,1,0,0,0,3,22h9A10,10,0,0,0,12,2Zm0,18H5.41l.93-.93a1,1,0,0,0,0-1.41A8,8,0,1,1,12,20Z"></path></svg> 325</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>


                    <div className="row row--grid collapse" id="collapsemore">

                        <div className="col-12 col-sm-6 col-lg-4">
                            <div className="post">
                                <a href="article.html" className="post__img">
                                    <img src="img/posts/2.jpg" alt=""/>
                                </a>

                                <div className="post__content">
                                    <a href="#" className="post__category">Digital Art</a>
                                    <h3 className="post__title"><a href="article.html">A Month of Rare Digital Art
                                        from
                                        MakersPlace</a></h3>
                                    <div className="post__meta">
                                        <span className="post__date"><svg xmlns="http://www.w3.org/2000/svg"
                                                                            viewBox="0 0 24 24"><path
                                            d="M12,2A10,10,0,1,0,22,12,10.01114,10.01114,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8.00917,8.00917,0,0,1,12,20ZM14.09814,9.63379,13,10.26807V7a1,1,0,0,0-2,0v5a1.00025,1.00025,0,0,0,1.5.86621l2.59814-1.5a1.00016,1.00016,0,1,0-1-1.73242Z"></path></svg> April 24, 2021</span>
                                        <span className="post__comments"><svg xmlns="http://www.w3.org/2000/svg"
                                                                                viewBox="0 0 24 24"><path
                                            d="M17,9H7a1,1,0,0,0,0,2H17a1,1,0,0,0,0-2Zm-4,4H7a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2ZM12,2A10,10,0,0,0,2,12a9.89,9.89,0,0,0,2.26,6.33l-2,2a1,1,0,0,0-.21,1.09A1,1,0,0,0,3,22h9A10,10,0,0,0,12,2Zm0,18H5.41l.93-.93a1,1,0,0,0,0-1.41A8,8,0,1,1,12,20Z"></path></svg> 88</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-sm-6 col-lg-4">
                            <div className="post">
                                <a href="article.html" className="post__img">
                                    <img src="img/posts/3.jpg" alt=""/>
                                </a>

                                <div className="post__content">
                                    <a href="#" className="post__category">Digital Art</a>
                                    <h3 className="post__title"><a href="article.html">The beginners guide to
                                        creating &amp; selling digital art NFTs</a></h3>
                                    <div className="post__meta">
                                        <span className="post__date"><svg xmlns="http://www.w3.org/2000/svg"
                                                                            viewBox="0 0 24 24"><path
                                            d="M12,2A10,10,0,1,0,22,12,10.01114,10.01114,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8.00917,8.00917,0,0,1,12,20ZM14.09814,9.63379,13,10.26807V7a1,1,0,0,0-2,0v5a1.00025,1.00025,0,0,0,1.5.86621l2.59814-1.5a1.00016,1.00016,0,1,0-1-1.73242Z"></path></svg> April 22, 2021</span>
                                        <span className="post__comments"><svg xmlns="http://www.w3.org/2000/svg"
                                                                                viewBox="0 0 24 24"><path
                                            d="M17,9H7a1,1,0,0,0,0,2H17a1,1,0,0,0,0-2Zm-4,4H7a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2ZM12,2A10,10,0,0,0,2,12a9.89,9.89,0,0,0,2.26,6.33l-2,2a1,1,0,0,0-.21,1.09A1,1,0,0,0,3,22h9A10,10,0,0,0,12,2Zm0,18H5.41l.93-.93a1,1,0,0,0,0-1.41A8,8,0,1,1,12,20Z"></path></svg> 54</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-sm-6 col-lg-4">
                            <div className="post">
                                <a href="article.html" className="post__img">
                                    <img src="img/posts/1.jpg" alt=""/>
                                </a>

                                <div className="post__content">
                                    <a href="#" className="post__category">Charity</a>
                                    <h3 className="post__title"><a href="article.html">Save Thousands Of Lives
                                        Through
                                        This NFT</a></h3>
                                    <div className="post__meta">
                                        <span className="post__date"><svg xmlns="http://www.w3.org/2000/svg"
                                                                            viewBox="0 0 24 24"><path
                                            d="M12,2A10,10,0,1,0,22,12,10.01114,10.01114,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8.00917,8.00917,0,0,1,12,20ZM14.09814,9.63379,13,10.26807V7a1,1,0,0,0-2,0v5a1.00025,1.00025,0,0,0,1.5.86621l2.59814-1.5a1.00016,1.00016,0,1,0-1-1.73242Z"></path></svg> April 25, 2021</span>
                                        <span className="post__comments"><svg xmlns="http://www.w3.org/2000/svg"
                                                                                viewBox="0 0 24 24"><path
                                            d="M17,9H7a1,1,0,0,0,0,2H17a1,1,0,0,0,0-2Zm-4,4H7a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2ZM12,2A10,10,0,0,0,2,12a9.89,9.89,0,0,0,2.26,6.33l-2,2a1,1,0,0,0-.21,1.09A1,1,0,0,0,3,22h9A10,10,0,0,0,12,2Zm0,18H5.41l.93-.93a1,1,0,0,0,0-1.41A8,8,0,1,1,12,20Z"></path></svg> 119</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-sm-6 col-lg-4">
                            <div className="post">
                                <a href="article.html" className="post__img">
                                    <img src="img/posts/4.jpg" alt=""/>
                                </a>

                                <div className="post__content">
                                    <a href="#" className="post__category">Digital Art</a>
                                    <h3 className="post__title"><a href="article.html">A Month of Rare Digital Art
                                        from
                                        MakersPlace</a></h3>
                                    <div className="post__meta">
                                        <span className="post__date"><svg xmlns="http://www.w3.org/2000/svg"
                                                                            viewBox="0 0 24 24"><path
                                            d="M12,2A10,10,0,1,0,22,12,10.01114,10.01114,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8.00917,8.00917,0,0,1,12,20ZM14.09814,9.63379,13,10.26807V7a1,1,0,0,0-2,0v5a1.00025,1.00025,0,0,0,1.5.86621l2.59814-1.5a1.00016,1.00016,0,1,0-1-1.73242Z"></path></svg> April 27, 2021</span>
                                        <span className="post__comments"><svg xmlns="http://www.w3.org/2000/svg"
                                                                                viewBox="0 0 24 24"><path
                                            d="M17,9H7a1,1,0,0,0,0,2H17a1,1,0,0,0,0-2Zm-4,4H7a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2ZM12,2A10,10,0,0,0,2,12a9.89,9.89,0,0,0,2.26,6.33l-2,2a1,1,0,0,0-.21,1.09A1,1,0,0,0,3,22h9A10,10,0,0,0,12,2Zm0,18H5.41l.93-.93a1,1,0,0,0,0-1.41A8,8,0,1,1,12,20Z"></path></svg> 0</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-sm-6 col-lg-4">
                            <div className="post">
                                <a href="article.html" className="post__img">
                                    <img src="img/posts/5.jpg" alt=""/>
                                </a>

                                <div className="post__content">
                                    <a href="#" className="post__category">Collectibles</a>
                                    <h3 className="post__title"><a href="article.html">Rare NFT Series</a></h3>
                                    <div className="post__meta">
                                        <span className="post__date"><svg xmlns="http://www.w3.org/2000/svg"
                                                                            viewBox="0 0 24 24"><path
                                            d="M12,2A10,10,0,1,0,22,12,10.01114,10.01114,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8.00917,8.00917,0,0,1,12,20ZM14.09814,9.63379,13,10.26807V7a1,1,0,0,0-2,0v5a1.00025,1.00025,0,0,0,1.5.86621l2.59814-1.5a1.00016,1.00016,0,1,0-1-1.73242Z"></path></svg> April 28, 2021</span>
                                        <span className="post__comments"><svg xmlns="http://www.w3.org/2000/svg"
                                                                                viewBox="0 0 24 24"><path
                                            d="M17,9H7a1,1,0,0,0,0,2H17a1,1,0,0,0,0-2Zm-4,4H7a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2ZM12,2A10,10,0,0,0,2,12a9.89,9.89,0,0,0,2.26,6.33l-2,2a1,1,0,0,0-.21,1.09A1,1,0,0,0,3,22h9A10,10,0,0,0,12,2Zm0,18H5.41l.93-.93a1,1,0,0,0,0-1.41A8,8,0,1,1,12,20Z"></path></svg> 102</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-sm-6 col-lg-4">
                            <div className="post">
                                <a href="article.html" className="post__img">
                                    <img src="img/posts/6.jpg" alt=""/>
                                </a>

                                <div className="post__content">
                                    <a href="#" className="post__category">Domains</a>
                                    <h3 className="post__title"><a href="article.html">Control Your Own Top Level
                                        Domain
                                        on the DNS &amp; ENS</a></h3>
                                    <div className="post__meta">
                                        <span className="post__date"><svg xmlns="http://www.w3.org/2000/svg"
                                                                            viewBox="0 0 24 24"><path
                                            d="M12,2A10,10,0,1,0,22,12,10.01114,10.01114,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8.00917,8.00917,0,0,1,12,20ZM14.09814,9.63379,13,10.26807V7a1,1,0,0,0-2,0v5a1.00025,1.00025,0,0,0,1.5.86621l2.59814-1.5a1.00016,1.00016,0,1,0-1-1.73242Z"></path></svg> April 28, 2021</span>
                                        <span className="post__comments"><svg xmlns="http://www.w3.org/2000/svg"
                                                                                viewBox="0 0 24 24"><path
                                            d="M17,9H7a1,1,0,0,0,0,2H17a1,1,0,0,0,0-2Zm-4,4H7a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2ZM12,2A10,10,0,0,0,2,12a9.89,9.89,0,0,0,2.26,6.33l-2,2a1,1,0,0,0-.21,1.09A1,1,0,0,0,3,22h9A10,10,0,0,0,12,2Zm0,18H5.41l.93-.93a1,1,0,0,0,0-1.41A8,8,0,1,1,12,20Z"></path></svg> 325</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="row row--grid">
                        <div className="col-12">
                            <button className="main__load" type="button" data-toggle="collapse"
                                    data-target="#collapsemore" aria-expanded="false"
                                    aria-controls="collapsemore">Load
                                more
                            </button>
                        </div>
                    </div>

                </div>

                <div className="tab-pane fade" id="tab-2" role="tabpanel">
                    <div className="row row--grid">

                        <div className="col-12 col-sm-6 col-lg-4">
                            <div className="post">
                                <a href="article.html" className="post__img">
                                    <img src="img/posts/2.jpg" alt=""/>
                                </a>

                                <div className="post__content">
                                    <h3 className="post__title"><a href="article.html">A Month of Rare Digital Art
                                        from
                                        MakersPlace</a></h3>
                                    <div className="post__meta">
                                        <span className="post__date"><svg xmlns="http://www.w3.org/2000/svg"
                                                                            viewBox="0 0 24 24"><path
                                            d="M12,2A10,10,0,1,0,22,12,10.01114,10.01114,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8.00917,8.00917,0,0,1,12,20ZM14.09814,9.63379,13,10.26807V7a1,1,0,0,0-2,0v5a1.00025,1.00025,0,0,0,1.5.86621l2.59814-1.5a1.00016,1.00016,0,1,0-1-1.73242Z"></path></svg> April 24, 2021</span>
                                        <span className="post__comments"><svg xmlns="http://www.w3.org/2000/svg"
                                                                                viewBox="0 0 24 24"><path
                                            d="M17,9H7a1,1,0,0,0,0,2H17a1,1,0,0,0,0-2Zm-4,4H7a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2ZM12,2A10,10,0,0,0,2,12a9.89,9.89,0,0,0,2.26,6.33l-2,2a1,1,0,0,0-.21,1.09A1,1,0,0,0,3,22h9A10,10,0,0,0,12,2Zm0,18H5.41l.93-.93a1,1,0,0,0,0-1.41A8,8,0,1,1,12,20Z"></path></svg> 88</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-sm-6 col-lg-4">
                            <div className="post">
                                <a href="article.html" className="post__img">
                                    <img src="img/posts/3.jpg" alt=""/>
                                </a>

                                <div className="post__content">
                                    <h3 className="post__title"><a href="article.html">The beginners guide to
                                        creating &amp; selling digital art NFTs</a></h3>
                                    <div className="post__meta">
                                        <span className="post__date"><svg xmlns="http://www.w3.org/2000/svg"
                                                                            viewBox="0 0 24 24"><path
                                            d="M12,2A10,10,0,1,0,22,12,10.01114,10.01114,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8.00917,8.00917,0,0,1,12,20ZM14.09814,9.63379,13,10.26807V7a1,1,0,0,0-2,0v5a1.00025,1.00025,0,0,0,1.5.86621l2.59814-1.5a1.00016,1.00016,0,1,0-1-1.73242Z"></path></svg> April 22, 2021</span>
                                        <span className="post__comments"><svg xmlns="http://www.w3.org/2000/svg"
                                                                                viewBox="0 0 24 24"><path
                                            d="M17,9H7a1,1,0,0,0,0,2H17a1,1,0,0,0,0-2Zm-4,4H7a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2ZM12,2A10,10,0,0,0,2,12a9.89,9.89,0,0,0,2.26,6.33l-2,2a1,1,0,0,0-.21,1.09A1,1,0,0,0,3,22h9A10,10,0,0,0,12,2Zm0,18H5.41l.93-.93a1,1,0,0,0,0-1.41A8,8,0,1,1,12,20Z"></path></svg> 54</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-sm-6 col-lg-4">
                            <div className="post">
                                <a href="article.html" className="post__img">
                                    <img src="img/posts/1.jpg" alt=""/>
                                </a>

                                <div className="post__content">
                                    <h3 className="post__title"><a href="article.html">Save Thousands Of Lives
                                        Through
                                        This NFT</a></h3>
                                    <div className="post__meta">
                                        <span className="post__date"><svg xmlns="http://www.w3.org/2000/svg"
                                                                            viewBox="0 0 24 24"><path
                                            d="M12,2A10,10,0,1,0,22,12,10.01114,10.01114,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8.00917,8.00917,0,0,1,12,20ZM14.09814,9.63379,13,10.26807V7a1,1,0,0,0-2,0v5a1.00025,1.00025,0,0,0,1.5.86621l2.59814-1.5a1.00016,1.00016,0,1,0-1-1.73242Z"></path></svg> April 25, 2021</span>
                                        <span className="post__comments"><svg xmlns="http://www.w3.org/2000/svg"
                                                                                viewBox="0 0 24 24"><path
                                            d="M17,9H7a1,1,0,0,0,0,2H17a1,1,0,0,0,0-2Zm-4,4H7a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2ZM12,2A10,10,0,0,0,2,12a9.89,9.89,0,0,0,2.26,6.33l-2,2a1,1,0,0,0-.21,1.09A1,1,0,0,0,3,22h9A10,10,0,0,0,12,2Zm0,18H5.41l.93-.93a1,1,0,0,0,0-1.41A8,8,0,1,1,12,20Z"></path></svg> 119</span>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="col-12 col-sm-6 col-lg-4">
                            <div className="post">
                                <a href="article.html" className="post__img">
                                    <img src="img/posts/4.jpg" alt=""/>
                                </a>

                                <div className="post__content">
                                    <h3 className="post__title"><a href="article.html">A Month of Rare Digital Art
                                        from
                                        MakersPlace</a></h3>
                                    <div className="post__meta">
                                        <span className="post__date"><svg xmlns="http://www.w3.org/2000/svg"
                                                                            viewBox="0 0 24 24"><path
                                            d="M12,2A10,10,0,1,0,22,12,10.01114,10.01114,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8.00917,8.00917,0,0,1,12,20ZM14.09814,9.63379,13,10.26807V7a1,1,0,0,0-2,0v5a1.00025,1.00025,0,0,0,1.5.86621l2.59814-1.5a1.00016,1.00016,0,1,0-1-1.73242Z"></path></svg> April 27, 2021</span>
                                        <span className="post__comments"><svg xmlns="http://www.w3.org/2000/svg"
                                                                                viewBox="0 0 24 24"><path
                                            d="M17,9H7a1,1,0,0,0,0,2H17a1,1,0,0,0,0-2Zm-4,4H7a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2ZM12,2A10,10,0,0,0,2,12a9.89,9.89,0,0,0,2.26,6.33l-2,2a1,1,0,0,0-.21,1.09A1,1,0,0,0,3,22h9A10,10,0,0,0,12,2Zm0,18H5.41l.93-.93a1,1,0,0,0,0-1.41A8,8,0,1,1,12,20Z"></path></svg> 0</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="tab-pane fade" id="tab-3" role="tabpanel">
                    <div className="row row--grid">

                        <div className="col-12 col-sm-6 col-lg-4">
                            <div className="post">
                                <a href="article.html" className="post__img">
                                    <img src="img/posts/1.jpg" alt=""/>
                                </a>

                                <div className="post__content">
                                    <h3 className="post__title"><a href="article.html">Save Thousands Of Lives
                                        Through
                                        This NFT</a></h3>
                                    <div className="post__meta">
                                        <span className="post__date"><svg xmlns="http://www.w3.org/2000/svg"
                                                                            viewBox="0 0 24 24"><path
                                            d="M12,2A10,10,0,1,0,22,12,10.01114,10.01114,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8.00917,8.00917,0,0,1,12,20ZM14.09814,9.63379,13,10.26807V7a1,1,0,0,0-2,0v5a1.00025,1.00025,0,0,0,1.5.86621l2.59814-1.5a1.00016,1.00016,0,1,0-1-1.73242Z"></path></svg> April 25, 2021</span>
                                        <span className="post__comments"><svg xmlns="http://www.w3.org/2000/svg"
                                                                                viewBox="0 0 24 24"><path
                                            d="M17,9H7a1,1,0,0,0,0,2H17a1,1,0,0,0,0-2Zm-4,4H7a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2ZM12,2A10,10,0,0,0,2,12a9.89,9.89,0,0,0,2.26,6.33l-2,2a1,1,0,0,0-.21,1.09A1,1,0,0,0,3,22h9A10,10,0,0,0,12,2Zm0,18H5.41l.93-.93a1,1,0,0,0,0-1.41A8,8,0,1,1,12,20Z"></path></svg> 119</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-sm-6 col-lg-4">
                            <div className="post">
                                <a href="article.html" className="post__img">
                                    <img src="img/posts/4.jpg" alt=""/>
                                </a>

                                <div className="post__content">
                                    <h3 className="post__title"><a href="article.html">A Month of Rare Digital Art
                                        from
                                        MakersPlace</a></h3>
                                    <div className="post__meta">
                                        <span className="post__date"><svg xmlns="http://www.w3.org/2000/svg"
                                                                            viewBox="0 0 24 24"><path
                                            d="M12,2A10,10,0,1,0,22,12,10.01114,10.01114,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8.00917,8.00917,0,0,1,12,20ZM14.09814,9.63379,13,10.26807V7a1,1,0,0,0-2,0v5a1.00025,1.00025,0,0,0,1.5.86621l2.59814-1.5a1.00016,1.00016,0,1,0-1-1.73242Z"></path></svg> April 27, 2021</span>
                                        <span className="post__comments"><svg xmlns="http://www.w3.org/2000/svg"
                                                                                viewBox="0 0 24 24"><path
                                            d="M17,9H7a1,1,0,0,0,0,2H17a1,1,0,0,0,0-2Zm-4,4H7a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2ZM12,2A10,10,0,0,0,2,12a9.89,9.89,0,0,0,2.26,6.33l-2,2a1,1,0,0,0-.21,1.09A1,1,0,0,0,3,22h9A10,10,0,0,0,12,2Zm0,18H5.41l.93-.93a1,1,0,0,0,0-1.41A8,8,0,1,1,12,20Z"></path></svg> 0</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-sm-6 col-lg-4">
                            <div className="post">
                                <a href="article.html" className="post__img">
                                    <img src="img/posts/5.jpg" alt=""/>
                                </a>

                                <div className="post__content">
                                    <h3 className="post__title"><a href="article.html">Rare NFT Series</a></h3>
                                    <div className="post__meta">
                                        <span className="post__date"><svg xmlns="http://www.w3.org/2000/svg"
                                                                            viewBox="0 0 24 24"><path
                                            d="M12,2A10,10,0,1,0,22,12,10.01114,10.01114,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8.00917,8.00917,0,0,1,12,20ZM14.09814,9.63379,13,10.26807V7a1,1,0,0,0-2,0v5a1.00025,1.00025,0,0,0,1.5.86621l2.59814-1.5a1.00016,1.00016,0,1,0-1-1.73242Z"></path></svg> April 28, 2021</span>
                                        <span className="post__comments"><svg xmlns="http://www.w3.org/2000/svg"
                                                                                viewBox="0 0 24 24"><path
                                            d="M17,9H7a1,1,0,0,0,0,2H17a1,1,0,0,0,0-2Zm-4,4H7a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2ZM12,2A10,10,0,0,0,2,12a9.89,9.89,0,0,0,2.26,6.33l-2,2a1,1,0,0,0-.21,1.09A1,1,0,0,0,3,22h9A10,10,0,0,0,12,2Zm0,18H5.41l.93-.93a1,1,0,0,0,0-1.41A8,8,0,1,1,12,20Z"></path></svg> 102</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-sm-6 col-lg-4">
                            <div className="post">
                                <a href="article.html" className="post__img">
                                    <img src="img/posts/6.jpg" alt=""/>
                                </a>

                                <div className="post__content">
                                    <h3 className="post__title"><a href="article.html">Control Your Own Top Level
                                        Domain
                                        on the DNS &amp; ENS</a></h3>
                                    <div className="post__meta">
                                        <span className="post__date"><svg xmlns="http://www.w3.org/2000/svg"
                                                                            viewBox="0 0 24 24"><path
                                            d="M12,2A10,10,0,1,0,22,12,10.01114,10.01114,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8.00917,8.00917,0,0,1,12,20ZM14.09814,9.63379,13,10.26807V7a1,1,0,0,0-2,0v5a1.00025,1.00025,0,0,0,1.5.86621l2.59814-1.5a1.00016,1.00016,0,1,0-1-1.73242Z"></path></svg> April 28, 2021</span>
                                        <span className="post__comments"><svg xmlns="http://www.w3.org/2000/svg"
                                                                                viewBox="0 0 24 24"><path
                                            d="M17,9H7a1,1,0,0,0,0,2H17a1,1,0,0,0,0-2Zm-4,4H7a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2ZM12,2A10,10,0,0,0,2,12a9.89,9.89,0,0,0,2.26,6.33l-2,2a1,1,0,0,0-.21,1.09A1,1,0,0,0,3,22h9A10,10,0,0,0,12,2Zm0,18H5.41l.93-.93a1,1,0,0,0,0-1.41A8,8,0,1,1,12,20Z"></path></svg> 325</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="tab-pane fade" id="tab-4" role="tabpanel">
                    <div className="row row--grid">
                        <div className="col-12 col-sm-6 col-lg-4">
                            <div className="post">
                                <a href="article.html" className="post__img">
                                    <img src="img/posts/3.jpg" alt=""/>
                                </a>

                                <div className="post__content">
                                    <h3 className="post__title"><a href="article.html">The beginners guide to
                                        creating &amp; selling digital art NFTs</a></h3>
                                    <div className="post__meta">
                                        <span className="post__date"><svg xmlns="http://www.w3.org/2000/svg"
                                                                            viewBox="0 0 24 24"><path
                                            d="M12,2A10,10,0,1,0,22,12,10.01114,10.01114,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8.00917,8.00917,0,0,1,12,20ZM14.09814,9.63379,13,10.26807V7a1,1,0,0,0-2,0v5a1.00025,1.00025,0,0,0,1.5.86621l2.59814-1.5a1.00016,1.00016,0,1,0-1-1.73242Z"></path></svg> April 22, 2021</span>
                                        <span className="post__comments"><svg xmlns="http://www.w3.org/2000/svg"
                                                                                viewBox="0 0 24 24"><path
                                            d="M17,9H7a1,1,0,0,0,0,2H17a1,1,0,0,0,0-2Zm-4,4H7a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2ZM12,2A10,10,0,0,0,2,12a9.89,9.89,0,0,0,2.26,6.33l-2,2a1,1,0,0,0-.21,1.09A1,1,0,0,0,3,22h9A10,10,0,0,0,12,2Zm0,18H5.41l.93-.93a1,1,0,0,0,0-1.41A8,8,0,1,1,12,20Z"></path></svg> 54</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-sm-6 col-lg-4">
                            <div className="post">
                                <a href="article.html" className="post__img">
                                    <img src="img/posts/1.jpg" alt=""/>
                                </a>

                                <div className="post__content">
                                    <h3 className="post__title"><a href="article.html">Save Thousands Of Lives
                                        Through
                                        This NFT</a></h3>
                                    <div className="post__meta">
                                        <span className="post__date"><svg xmlns="http://www.w3.org/2000/svg"
                                                                            viewBox="0 0 24 24"><path
                                            d="M12,2A10,10,0,1,0,22,12,10.01114,10.01114,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8.00917,8.00917,0,0,1,12,20ZM14.09814,9.63379,13,10.26807V7a1,1,0,0,0-2,0v5a1.00025,1.00025,0,0,0,1.5.86621l2.59814-1.5a1.00016,1.00016,0,1,0-1-1.73242Z"></path></svg> April 25, 2021</span>
                                        <span className="post__comments"><svg xmlns="http://www.w3.org/2000/svg"
                                                                                viewBox="0 0 24 24"><path
                                            d="M17,9H7a1,1,0,0,0,0,2H17a1,1,0,0,0,0-2Zm-4,4H7a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2ZM12,2A10,10,0,0,0,2,12a9.89,9.89,0,0,0,2.26,6.33l-2,2a1,1,0,0,0-.21,1.09A1,1,0,0,0,3,22h9A10,10,0,0,0,12,2Zm0,18H5.41l.93-.93a1,1,0,0,0,0-1.41A8,8,0,1,1,12,20Z"></path></svg> 119</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-sm-6 col-lg-4">
                            <div className="post">
                                <a href="article.html" className="post__img">
                                    <img src="img/posts/4.jpg" alt=""/>
                                </a>

                                <div className="post__content">
                                    <h3 className="post__title"><a href="article.html">A Month of Rare Digital Art
                                        from
                                        MakersPlace</a></h3>
                                    <div className="post__meta">
                                        <span className="post__date"><svg xmlns="http://www.w3.org/2000/svg"
                                                                            viewBox="0 0 24 24"><path
                                            d="M12,2A10,10,0,1,0,22,12,10.01114,10.01114,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8.00917,8.00917,0,0,1,12,20ZM14.09814,9.63379,13,10.26807V7a1,1,0,0,0-2,0v5a1.00025,1.00025,0,0,0,1.5.86621l2.59814-1.5a1.00016,1.00016,0,1,0-1-1.73242Z"></path></svg> April 27, 2021</span>
                                        <span className="post__comments"><svg xmlns="http://www.w3.org/2000/svg"
                                                                                viewBox="0 0 24 24"><path
                                            d="M17,9H7a1,1,0,0,0,0,2H17a1,1,0,0,0,0-2Zm-4,4H7a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2ZM12,2A10,10,0,0,0,2,12a9.89,9.89,0,0,0,2.26,6.33l-2,2a1,1,0,0,0-.21,1.09A1,1,0,0,0,3,22h9A10,10,0,0,0,12,2Zm0,18H5.41l.93-.93a1,1,0,0,0,0-1.41A8,8,0,1,1,12,20Z"></path></svg> 0</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-lg-4">
                            <div className="post">
                                <a href="article.html" className="post__img">
                                    <img src="img/posts/5.jpg" alt=""/>
                                </a>

                                <div className="post__content">
                                    <h3 className="post__title"><a href="article.html">Rare NFT Series</a></h3>
                                    <div className="post__meta">
                                        <span className="post__date"><svg xmlns="http://www.w3.org/2000/svg"
                                                                            viewBox="0 0 24 24"><path
                                            d="M12,2A10,10,0,1,0,22,12,10.01114,10.01114,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8.00917,8.00917,0,0,1,12,20ZM14.09814,9.63379,13,10.26807V7a1,1,0,0,0-2,0v5a1.00025,1.00025,0,0,0,1.5.86621l2.59814-1.5a1.00016,1.00016,0,1,0-1-1.73242Z"></path></svg> April 28, 2021</span>
                                        <span className="post__comments"><svg xmlns="http://www.w3.org/2000/svg"
                                                                                viewBox="0 0 24 24"><path
                                            d="M17,9H7a1,1,0,0,0,0,2H17a1,1,0,0,0,0-2Zm-4,4H7a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2ZM12,2A10,10,0,0,0,2,12a9.89,9.89,0,0,0,2.26,6.33l-2,2a1,1,0,0,0-.21,1.09A1,1,0,0,0,3,22h9A10,10,0,0,0,12,2Zm0,18H5.41l.93-.93a1,1,0,0,0,0-1.41A8,8,0,1,1,12,20Z"></path></svg> 102</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PageBlog;
