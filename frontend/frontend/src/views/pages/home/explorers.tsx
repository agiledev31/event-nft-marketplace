import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { getAllEventCards, deleteEventCardById } from "../../../helper/event";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import config from "../../../helper/config";
import { useUserContext } from "../../../context/UserContext";
import DeletePopper from "../../../components/DeletePopper";

const Explorers = () => {
  const { userInfo } = useUserContext();
  const [events, setEvents] = useState([]);
  const [deletePopupStatus, setDeletePopupStatus] = useState(false);
  const eventCarousel = useRef<typeof OwlCarousel>(null);

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

  const eventsEle = () => {
    return events.map((eventcard: any, i) => (
      <div key={`event_${i}`} className="card">
        {userInfo && userInfo.user.user_type == "ADMIN" ? (
          <DeletePopper
            setDeletePopupStatus={setDeletePopupStatus}
            onClickDelete={() => {
              handleDeleteEventCard(eventcard.id);
            }}
          />
        ) : (
          ""
        )}
        <Link to={`/event/eventcard/${eventcard.id}`} className="card__cover">
          <img
            src={`${config.API_BASE_URL}/api/upload/get_file?path=${eventcard.picture_small}`}
            alt=""
          />
          <span className="card__time">15 minutes left</span>
        </Link>
        <h3 className="card__title">
          <Link to={`/event/eventcard/${eventcard.id}`}>{eventcard.name}</Link>
        </h3>
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
              <path d="M20.16,5A6.29,6.29,0,0,0,12,4.36a6.27,6.27,0,0,0-8.16,9.48l6.21,6.22a2.78,2.78,0,0,0,3.9,0l6.21-6.22A6.27,6.27,0,0,0,20.16,5Zm-1.41,7.46-6.21,6.21a.76.76,0,0,1-1.08,0L5.25,12.43a4.29,4.29,0,0,1,0-6,4.27,4.27,0,0,1,6,0,1,1,0,0,0,1.42,0,4.27,4.27,0,0,1,6,0A4.29,4.29,0,0,1,18.75,12.43Z" />
            </svg>
            <span>{eventcard.likes_number}</span>
          </button>
        </div>
      </div>
    ));
  };

  const next = (eleRf: any) => {
    const ele: any = eleRf.current;
    ele.next(500);
  };

  const prev = (eleRf: any) => {
    const ele: any = eleRf.current;
    ele.prev(500);
  };

  return (
    <section className="row row--grid">
      <div className="col-12">
        <div className="main__title">
          <h2>
            <Link to="/explorer">Explore</Link>
          </h2>
        </div>
      </div>
      {events.length > 0 ? (
        <div className="col-12">
          <div className="carousel-wrapper">
            <div className="nav-wrapper">
              <button
                className="main__nav main__nav--prev"
                type="button"
                onClick={() => prev(eventCarousel)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M17,11H9.41l3.3-3.29a1,1,0,1,0-1.42-1.42l-5,5a1,1,0,0,0-.21.33,1,1,0,0,0,0,.76,1,1,0,0,0,.21.33l5,5a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42L9.41,13H17a1,1,0,0,0,0-2Z" />
                </svg>
              </button>
              <button
                className="main__nav main__nav--next"
                type="button"
                onClick={() => next(eventCarousel)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M17.92,11.62a1,1,0,0,0-.21-.33l-5-5a1,1,0,0,0-1.42,1.42L14.59,11H7a1,1,0,0,0,0,2h7.59l-3.3,3.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l5-5a1,1,0,0,0,.21-.33A1,1,0,0,0,17.92,11.62Z" />
                </svg>
              </button>
            </div>

            <OwlCarousel
              className="owl-theme"
              margin={30}
              items={4}
              autoplay={!deletePopupStatus}
              dots={false}
              ref={eventCarousel as any}
            >
              {eventsEle()}
            </OwlCarousel>
          </div>
        </div>
      ) : (
        ""
      )}
    </section>
  );
};

export default Explorers;
