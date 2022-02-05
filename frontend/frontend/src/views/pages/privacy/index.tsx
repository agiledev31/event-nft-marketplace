import React from 'react';
import {Link} from "react-router-dom";

const PagePrivacy = () => {
    return (
        <div className="container" style={{marginTop:70,marginBottom:70}}>
            <div className="row row--grid">

                <div className="col-12">
                    <ul className="breadcrumb">
                        <li className="breadcrumb__item">
                            <Link to="/">Home</Link>
                        </li>
                        <li className="breadcrumb__item breadcrumb__item--active">Privacy policy</li>
                    </ul>
                </div>

                <div className="col-12">
                    <div className="main__title main__title--page">
                        <h1>Privacy policy</h1>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a
                            page when looking at its layout. The point of using Lorem Ipsum is that it has a
                            more-or-less normal distribution of letters, as opposed to using 'Content here, content
                            here', making it look like readable English.</p>
                        <p>Many desktop publishing packages and <a href="#">web page</a> editors now use Lorem Ipsum as
                            their default model text, and a search for 'lorem ipsum' will uncover many web sites still
                            in their infancy. Various versions have evolved over the years, sometimes by accident,
                            sometimes on purpose (injected humour and the like).</p>
                        <p>All the Lorem Ipsum generators on the <b>Internet</b> tend to repeat predefined chunks as
                            necessary, making this the first true generator on the Internet. It uses a dictionary of
                            over 200 Latin words, combined with a handful of model sentence structures, to generate
                            Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from
                            repetition, injected humour, or non-characteristic words etc.</p>
                        <ol>
                            <li>
                                <h4>Determination of personal information of users</h4>
                                <ol>
                                    <li>If you are going to use a passage of Lorem Ipsum:
                                        <ol>
                                            <li>All the Lorem Ipsum generators on the Internet tend to repeat predefined
                                                chunks as necessary, making this the first true generator on the
                                                Internet.
                                            </li>
                                            <li>It uses a dictionary of over 200 Latin words, combined with a handful of
                                                model sentence structures, to generate Lorem Ipsum which looks
                                                reasonable. The generated Lorem Ipsum is therefore always free from
                                                repetition, injected humour, or non-characteristic words etc.
                                            </li>
                                        </ol>
                                    </li>
                                    <li>There are many variations of passages of Lorem Ipsum available, but the majority
                                        have suffered alteration in some form, by injected humour, or randomised words
                                        which don't look even slightly believable.
                                    </li>
                                    <li>Many desktop publishing packages and web page editors now use Lorem Ipsum as
                                        their default model text, and a search for 'lorem ipsum' will uncover many web
                                        sites still in their infancy. Various versions have evolved over the years,
                                        sometimes by accident, sometimes on purpose (injected humour and the like).
                                    </li>
                                </ol>
                            </li>

                            <li>
                                <h4>Reasons for collecting and processing user personal information</h4>
                                <ol>
                                    <li>It is a long established fact that a reader will be distracted by the readable
                                        content of a page when looking at its layout. The point of using Lorem Ipsum is
                                        that it has a more-or-less normal distribution of letters.
                                    </li>
                                    <li>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks
                                        as necessary, making this the first true generator on the Internet:
                                        <ol>
                                            <li>It has survived not only five centuries, but also the leap into
                                                electronic typesetting, remaining essentially unchanged;
                                            </li>
                                            <li>It was popularised in the 1960s with the release of Letraset sheets
                                                containing Lorem Ipsum passages;
                                            </li>
                                            <li>Various versions have evolved over the years, sometimes by accident,
                                                sometimes on purpose (injected humour and the like);
                                            </li>
                                            <li>Many desktop publishing packages and web page editors now use Lorem
                                                Ipsum as their default model text;
                                            </li>
                                        </ol>
                                    </li>
                                </ol>
                            </li>
                        </ol>
                        <p>All the Lorem Ipsum generators on the <b>Internet</b> tend to repeat predefined chunks as
                            necessary, making this the first true generator on the Internet. It uses a dictionary of
                            over 200 Latin words, combined with a handful of model sentence structures, to generate
                            Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from
                            repetition, injected humour, or non-characteristic words etc.</p>
                    </div>
                </div>

            </div>


            <div className="row">
                <div className="col-12">
                    <div className="partners owl-carousel owl-loaded">
                        <div className="owl-stage-outer">
                            <div className="owl-stage"></div>
                        </div>
                        <div className="owl-nav disabled">
                            <button type="button" role="presentation" className="owl-prev"><span
                                aria-label="Previous">‹</span></button>
                            <button type="button" role="presentation" className="owl-next"><span
                                aria-label="Next">›</span></button>
                        </div>
                        <div className="owl-dots disabled"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PagePrivacy;
