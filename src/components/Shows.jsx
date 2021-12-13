import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ShowContext from "../Context/ShowsContext/ShowsContext";
import { AiFillStar } from "react-icons/ai";
import Layout from "./Layout";
import Spinner from "./Spinner";

const Shows = ({ user }) => {
  const context = useContext(ShowContext);
  const { shows, getAllShows, getShow, show, loading } = context;
  useEffect(() => {
    getAllShows();
    // eslint-disable-next-line
  }, []);

  return (
    <Layout>
      <ShowsContainer>
        <Head>
          <SubHeading> {`>> Trending Shows`} </SubHeading>
          {user.name ? (
            <WelcomeUser>
              {" "}
              Welcome: <span> {user.name} </span>{" "}
            </WelcomeUser>
          ) : null}
        </Head>
        {loading ? (
          <Spinner />
        ) : (
          <ShowsContentWrapper>
            {shows.map((item) => (
              <div className="show-container">
                <Link to={`/shows/${item.show?.id}`}>
                  <div className="img-content">
                    <ShowImg
                      className="show-img"
                      src={item.show?.image.original}
                      alt={item.show.name}
                    />
                    <div className="content-on-image">
                      <StarIcon />
                      <Ratings>
                        <p>
                          {" "}
                          {item.show?.rating.average
                            ? `${item.show?.rating.average} / 10`
                            : "Unrated"}{" "}
                        </p>
                      </Ratings>
                      <Genres>
                        {item.show?.genres.map((item) => (
                          <p> {`${item}`} </p>
                        ))}
                      </Genres>
                      <Button>View Details</Button>
                    </div>
                  </div>
                </Link>
                <ShowTitle>{item.show.name}</ShowTitle>
                <ShowYear>{`(${item.show.premiered})`}</ShowYear>
              </div>
            ))}
          </ShowsContentWrapper>
        )}
      </ShowsContainer>
    </Layout>
  );
};

export default Shows;

const ShowsContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 1em 0;
  /* gap: 1em; */
`;

const SubHeading = styled.h1`
  color: rgba(var(--milkWhite));
  margin: 0.5em;
`;

const ShowsContentWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 2em;
  margin: 1rem;
  .show-container {
    overflow: hidden;
  }
  .img-content {
    position: relative;
    z-index: 1;
    color: rgba(var(--milkWhite));
    :hover .show-img {
      border-color: rgba(var(--cherryRed));
    }
    .content-on-image {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 1rem;
      text-align: center;
      margin: 0.8em;
      background: rgba(var(--matteBlack), 0.8);
      /* opacity: 0; */
      /* z-index: -1; */
      transform: scaleX(0);
      transform-origin: right;
      transition: transform 0.3s ease;
    }
    :hover .content-on-image {
      transform: scaleX(1);
      transform-origin: left;
      .show-image {
        border: 1px solid red;
      }
    }
  }
`;

const StarIcon = styled(AiFillStar)`
  font-size: 2.5em;
  color: yellow;
`;

const ShowImg = styled.img`
  width: 100%;
  max-height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  border: 0.8em solid rgba(var(--milkWhite));
`;

const ShowTitle = styled.p`
  font-size: 1.2em;
  color: rgba(var(--milkWhite));
`;

const ShowYear = styled.p`
  font-size: 1.2em;
  color: rgba(var(--milkWhite));
  font-size: 0.9em;
`;

const Ratings = styled.div`
  p {
    font-size: 1.5em;
  }
`;

const Genres = styled.div`
  p {
    font-size: 1.8em;
  }
`;

const Button = styled.button`
  padding: 1em;
  background-color: rgba(var(--cherryRed));
  border: none;
  outline: none;
  border-radius: 5px;
  cursor: pointer;
  color: rgba(var(--milkWhite));
  font-size: 1em;
`;

const WelcomeUser = styled.p`
  color: rgba(var(--milkWhite));
  margin-right: 2em;
  font-size: 1.5em;
  font-weight: 600;
  span {
    color: rgba(var(--cherryRed));
  }
`;

const Head = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;
