import React, { useEffect, useState } from "react";
import DateObject from "react-date-object";
import { Link, useNavigate } from "react-router-dom";
import { useToasts } from "react-toast-notifications";
import DeletePopper from "../../../components/DeletePopper";
import { useAppContext } from "../../../context/AppContext";
import { useUserContext } from "../../../context/UserContext";
import { getAllArtiles, deleteArticleById } from "../../../helper/article";
import config from "../../../helper/config";

const PageBlog = () => {
  const { userInfo } = useUserContext();
  const [articles, setArticles] = useState([]);
  const { loading, setLoading, setMessage, setModal } = useAppContext();
  const navigate = useNavigate();
  const { addToast } = useToasts();

  useEffect(() => {
    setLoading(true);
    getAllArtiles()
      .then((res) => {
        setLoading(false);
        setArticles(res.articles);
      })
      .catch((error) => {
        setLoading(false);
        addToast("An error occured", {
          appearance: "error",
          autoDismiss: true,
        });
      });
  }, []);

  const handleDeleteArticle = (articleId: string) => {
    deleteArticleById(articleId)
      .then((res) => {
        const updatedArticles = [...articles].filter(
          (article: any) => article.id !== articleId
        );
        setArticles(updatedArticles);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const dateString = (d: any) => {
    var date = new DateObject({
      date: new Date(d),
    });

    return date.format("MMMM DD, YYYY");
  };

  const CArticles = () => {
    return articles.map((article: any) => (
      <div className="col-12 col-sm-6 col-lg-4" key={article.id}>
        <div className="post">
          {userInfo && userInfo.user.user_type == "ADMIN" ? (
            <DeletePopper
              setDeletePopupStatus={() => {}}
              onClickDelete={() => {
                handleDeleteArticle(article.id);
              }}
            />
          ) : (
            ""
          )}

          <a href={`/article/${article.id}`} className="post__img">
            <img
              src={`${config.API_BASE_URL}/api/upload/get_file?path=${article.image}`}
              alt=""
            />
          </a>

          <div className="post__content">
            <a href="/" className="post__category">
              News
            </a>
            <h3 className="post__title">
              <a href={`/article/${article.id}`}>{article.title}</a>
            </h3>
            <div className="post__meta">
              <span className="post__date">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M12,2A10,10,0,1,0,22,12,10.01114,10.01114,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8.00917,8.00917,0,0,1,12,20ZM14.09814,9.63379,13,10.26807V7a1,1,0,0,0-2,0v5a1.00025,1.00025,0,0,0,1.5.86621l2.59814-1.5a1.00016,1.00016,0,1,0-1-1.73242Z"></path>
                </svg>{" "}
                {dateString(article.createdAt)}
              </span>
              <span className="post__comments">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M17,9H7a1,1,0,0,0,0,2H17a1,1,0,0,0,0-2Zm-4,4H7a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2ZM12,2A10,10,0,0,0,2,12a9.89,9.89,0,0,0,2.26,6.33l-2,2a1,1,0,0,0-.21,1.09A1,1,0,0,0,3,22h9A10,10,0,0,0,12,2Zm0,18H5.41l.93-.93a1,1,0,0,0,0-1.41A8,8,0,1,1,12,20Z"></path>
                </svg>{" "}
                0
              </span>
            </div>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <div className="container" style={{ marginTop: 70, marginBottom: 70 }}>
      <div className="row row--grid">
        <div className="col-12">
          <ul className="breadcrumb">
            <li className="breadcrumb__item">
              <a href="/">Home</a>
            </li>
            <li className="breadcrumb__item breadcrumb__item--active">News</li>
          </ul>
        </div>

        <div className="col-12">
          <div className="row row--grid">
            <div className="col-6 col-lg-10 col-md-9">
              <div className="main__title main__title--page">
                <h1>News</h1>
              </div>
            </div>

            {userInfo && userInfo.user.user_type == "ADMIN" ? (
              <div className="col-6 col-lg-2 col-md-3 btn_new_blog">
                <Link
                  to="/article/create"
                  className="main__load"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapsemore"
                  aria-expanded="false"
                  aria-controls="collapsemore"
                  style={{ marginTop: "0px" }}
                >
                  Create
                </Link>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>

        <div className="col-12">
          <div className="row row--grid">
            <ul
              className="nav nav-tabs main__tabs"
              id="main__tabs"
              role="tablist"
            >
              <li className="nav-item">
                <a
                  className="nav-link active"
                  data-toggle="tab"
                  href="#tab-1"
                  role="tab"
                  aria-controls="tab-1"
                  aria-selected="true"
                >
                  All
                </a>
              </li>

              <li className="nav-item">
                <a
                  className="nav-link"
                  data-toggle="tab"
                  href="#tab-2"
                  role="tab"
                  aria-controls="tab-2"
                  aria-selected="false"
                >
                  News
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="tab-content">
        <div className="tab-pane fade show active" id="tab-1" role="tabpanel">
          <div className="row row--grid">{CArticles()}</div>
        </div>

        <div className="tab-pane fade" id="tab-2" role="tabpanel">
          <div className="row row--grid">{CArticles()}</div>
        </div>
      </div>
    </div>
  );
};

export default PageBlog;
