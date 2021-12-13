import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ShowContext from "../Context/ShowsContext/ShowsContext";
import Layout from "../components/Layout";
import styled from "styled-components";
import { AiFillStar } from "react-icons/ai";
import Spinner from "../components/Spinner";
import Modal from "../components/Modal";

const ShowItem = () => {
  const context = useContext(ShowContext);
  const { show, getShow, loading } = context;
  const [showModal, setShowModal] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const params = useParams();
  useEffect(() => {
    getShow(params.show);
    //eslint-disable-next-line
  }, []);

  const handleShowModal = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <Layout>
      <ShowItemContainer>
        {loading ? (
          <Spinner />
        ) : (
          <>
            <ShowItemContentWrapper>
              <ShowItemLeftSec>
                <div className="showItem-img">
                  <ShowItemImg src={show.image?.original} alt={show.name} />
                </div>
                <div className="showItem-book-ticket">
                  <Button onClick={handleShowModal}> Book Ticket </Button>
                </div>
              </ShowItemLeftSec>
              <ShowItemRightSec>
                <ShowItemDetails>
                  <ShowItemTitle>{show?.name}</ShowItemTitle>
                  <ShowItemYear>{`(${show?.premiered})`}</ShowItemYear>
                  <ShowItemGenres>
                    {show.genres?.map((item) => (
                      <p>{item}</p>
                    ))}
                  </ShowItemGenres>
                  <ShowItemSchedule>
                    {/* <span>Schedule:</span> */}
                    <p>
                      Time: {show.schedule?.time ? show.schedule?.time : "N/A"}
                    </p>
                    {show.schedule?.days.map((item) => (
                      <p> {item} </p>
                    ))}
                  </ShowItemSchedule>
                  <Ratings>
                    <p>
                      {" "}
                      <StarIcon />{" "}
                      {show.rating?.average
                        ? `${show.rating?.average} / 10`
                        : "Unrated"}
                    </p>
                  </Ratings>
                </ShowItemDetails>
              </ShowItemRightSec>
            </ShowItemContentWrapper>
            <ShowItemSummary>
              <SummaryHead>
                Synopsis Of <span>{show?.name} </span> on MyShows{" "}
              </SummaryHead>
              <Summary>{show?.summary}</Summary>
              <OfficialLink>
                Know More:{" "}
                <a
                  href={show?.officialSite}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  {show?.officialSite}{" "}
                </a>
              </OfficialLink>
            </ShowItemSummary>
          </>
        )}
        <Modal
          showModal={showModal}
          setShowModal={setShowModal}
          handleShowModal={handleShowModal}
          showAlert={showAlert}
          setShowAlert={setShowAlert}
        />
      </ShowItemContainer>
    </Layout>
  );
};

export default ShowItem;

const ShowItemContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ShowItemContentWrapper = styled.div`
  width: 75%;
  height: auto;
  margin: 2em 0;
  display: flex;
  gap: 3em;
  /* border: 1px solid red; */
`;

const ShowItemLeftSec = styled.section`
  /* min-height: 35em; */
  /* height: 30em; */
  width: 30em;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
  .showItem-img {
    width: 80%;
    height: 80%;
    overflow: hidden;
  }
  .showItem-book-ticket {
    width: 100%;
  }
`;

const ShowItemImg = styled.img`
  width: 100%;
  height: 100%;
  -o-object-fit: contain;
  object-fit: contain;
`;

const ShowItemRightSec = styled.section``;

const ShowItemDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2em;
  color: rgba(var(--milkWhite));
`;

const ShowItemTitle = styled.h1`
  font-size: 3.5em;
`;

const ShowItemYear = styled.p`
  font-size: 1.1em;
  font-weight: 600;
  margin-top: -1em;
`;

const ShowItemGenres = styled.div`
  display: flex;
  gap: 1rem;
  font-size: 1.3em;
  p {
    background-color: rgba(var(--grey));
    padding: 0.5em;
    border-radius: 10px;
  }
`;

const ShowItemSchedule = styled.div`
  background-color: rgba(var(--grey));
  padding: 1em;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  gap: 1em;
  font-size: 1.2em;
  span {
    font-size: 1.2em;
  }
  p {
    font-weight: 600;
  }
`;

const Ratings = styled.div`
  p {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 0.5em;
    font-size: 1.8em;
  }
`;

const StarIcon = styled(AiFillStar)`
  font-size: 1.5em;
  color: yellow;
`;

const Button = styled.button`
  padding: 1em;
  background-color: rgba(var(--cherryRed));
  border: none;
  outline: none;
  border-radius: 5px;
  cursor: pointer;
  color: rgba(var(--milkWhite));
  font-size: 1.1em;
  font-weight: 600;
  width: calc(100% - 8em);
  outline: 1px solid rgba(var(--cherryRed));
`;

const ShowItemSummary = styled.div`
  width: 65%;
  height: auto;
  color: rgba(var(--milkWhite));
  display: flex;
  flex-direction: column;
  gap: 2em;
  margin-bottom: 5em;
`;

const SummaryHead = styled.h2`
  overflow: hidden;
`;

const Summary = styled.p`
  font-size: 1.3em;
  font-family: cursive, sans-serif;
`;

const OfficialLink = styled.p`
  a {
    text-decoration: none;
    color: rgba(var(--cherryRed));
  }
`;
