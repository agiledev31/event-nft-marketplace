import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import config from "../../../helper/config";
import { useUserContext } from "../../../context/UserContext";
import { getAllEventCards, deleteEventCardById } from "../../../helper/event";
import DeletePopper from "../../../components/DeletePopper";

const PageExplorer = () => {
  const { userInfo } = useUserContext();
  const [events, setEvents] = useState([]);

  useEffect(() => {
    getAllEventCards().then((res) => {
      if (res.success) {
        console.log(res.eventcards);
        setEvents(res.eventcards);
      }
    });
  }, []);

  const handleDeleteEventCard = (eventCardId: string) => {
    deleteEventCardById(eventCardId)
      .then((res) => {
        const updatedEvents = [...events].filter(
          (article: any) => article.id !== eventCardId
        );
        setEvents(updatedEvents);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="container" style={{ marginTop: 70, marginBottom: 70 }}>
      <div className="row row--grid">
        <div className="col-12">
          <ul className="breadcrumb">
            <li className="breadcrumb__item">
              <a href="/">Home</a>
            </li>
            <li className="breadcrumb__item breadcrumb__item--active">
              Explore
            </li>
          </ul>
        </div>

        <div className="col-12">
          <div className="main__title main__title--page">
            <h1>Explore exclusive digital assets</h1>
          </div>
        </div>

        <div className="col-12">
          <div className="main__filter" style={{ width: 1258, marginLeft: 20 }}>
            <form action="#" className="main__filter-search">
              <input type="text" placeholder="Search..." />
              <button type="button">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M21.71,20.29,18,16.61A9,9,0,1,0,16.61,18l3.68,3.68a1,1,0,0,0,1.42,0A1,1,0,0,0,21.71,20.29ZM11,18a7,7,0,1,1,7-7A7,7,0,0,1,11,18Z" />
                </svg>
              </button>
            </form>

            <div className="main__filter-wrap">
              <select
                className="main__select select2-hidden-accessible"
                name="status"
                data-select2-id="1"
                aria-hidden="true"
              >
                <option value="now" data-select2-id="3">
                  Event
                </option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="row row--grid">
        {events.map((eventCard: any, i) => {
          return (
            <div
              key={`explorer_event_${i}`}
              className="col-12 col-sm-6 col-lg-4 col-xl-3"
            >
              <div
                className="card"
                style={{ height: 460, width: 260, marginLeft: 20 }}
              >
                {userInfo && userInfo.user.user_type == "ADMIN" ? (
                  <DeletePopper
                    setDeletePopupStatus={() => {}}
                    onClickDelete={() => {
                      handleDeleteEventCard(eventCard.id);
                    }}
                  />
                ) : (
                  ""
                )}
                <Link
                  to={`/event/eventcard/${eventCard.id}`}
                  className="card__cover"
                >
                  <img
                    src={`${config.API_BASE_URL}/api/upload/get_file?path=${eventCard.picture_small}`}
                    alt=""
                  />
                </Link>
                <h3 className="card__title">
                  <Link to={`/event/eventcard/${eventCard.id}`}>
                    {eventCard.name}
                  </Link>
                </h3>
                <div className="card__author">
                  {eventCard.creator.avatar ? (
                    <img
                      src={`${config.API_BASE_URL}/api/upload/get_file?path=${eventCard.creator.avatar}`}
                      alt=""
                    />
                  ) : (
                    <img src="/img/avatars/avatar5.jpg" alt="" />
                  )}
                  <Link to="/author">{eventCard.creator.name}</Link>
                </div>
                <div className="card__info">
                  <div className="card__price">
                    <span>Reserve price</span>
                    <span>{eventCard.price} €</span>
                  </div>

                  <button className="card__likes" type="button">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path d="M20.16,5A6.29,6.29,0,0,0,12,4.36a6.27,6.27,0,0,0-8.16,9.48l6.21,6.22a2.78,2.78,0,0,0,3.9,0l6.21-6.22A6.27,6.27,0,0,0,20.16,5Zm-1.41,7.46-6.21,6.21a.76.76,0,0,1-1.08,0L5.25,12.43a4.29,4.29,0,0,1,0-6,4.27,4.27,0,0,1,6,0,1,1,0,0,0,1.42,0,4.27,4.27,0,0,1,6,0A4.29,4.29,0,0,1,18.75,12.43Z" />
                    </svg>
                    <span>{eventCard.likes_number}</span>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="row row--grid">
        <div className="col-12">
          <div className="paginator" style={{ width: 1258, marginLeft: 20 }}>
            <span className="paginator__pages">8 from 169</span>
            <ul className="paginator__list">
              <li>
                <a href="#">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M17,11H9.41l3.3-3.29a1,1,0,1,0-1.42-1.42l-5,5a1,1,0,0,0-.21.33,1,1,0,0,0,0,.76,1,1,0,0,0,.21.33l5,5a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42L9.41,13H17a1,1,0,0,0,0-2Z" />
                  </svg>
                </a>
              </li>
              <li className="active">
                <a href="#">1</a>
              </li>
              <li>
                <a href="#">2</a>
              </li>
              <li>
                <a href="#">3</a>
              </li>
              <li>
                <a href="#">4</a>
              </li>
              <li>
                <a href="#">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M17.92,11.62a1,1,0,0,0-.21-.33l-5-5a1,1,0,0,0-1.42,1.42L14.59,11H7a1,1,0,0,0,0,2h7.59l-3.3,3.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l5-5a1,1,0,0,0,.21-.33A1,1,0,0,0,17.92,11.62Z" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageExplorer;
