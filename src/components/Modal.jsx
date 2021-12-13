import React, { useContext, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { useSpring, animated } from "react-spring";
import ShowContext from "../Context/ShowsContext/ShowsContext";
import { AiFillStar } from "react-icons/ai";

const Modal = (props) => {
  const { setShowModal, showModal, handleShowModal, showAlert, setShowAlert } =
    props;
  const modalRef = useRef();
  const context = useContext(ShowContext);
  const { show } = context;
  const initialState = {
    userName: "",
    userEmail: "",
  };
  const [formData, setformData] = useState(initialState);

  useEffect(() => {
    //This prevents the body to scroll after the modal is open
    if (showModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [showModal]);

  const handleOnChange = (e) => {
    setformData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.userName && formData.userEmail) {
      localStorage.setItem("userName", formData.userName);
      localStorage.setItem("userEmail", formData.userEmail);
      setShowAlert(true);
      setInterval(() => {
        setShowAlert(false);
      }, 5000);
      setformData(initialState);
    }
  };

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const animation = useSpring({
    config: {
      duration: 350,
    },
    transform: showModal ? `translateY(0%)` : `translateX(100%)`,
  });
  return (
    <>
      {showModal ? (
        <ModalContainer onClick={closeModal}>
          <ModalContentWrapper className="modal-open" style={animation}>
            <ShowTitle>
              {" "}
              <span> Title: </span> {show?.name}
            </ShowTitle>
            <ShowGenres>
              {show?.genres.map((item) => (
                <Genres key={show.id}>{item}</Genres>
              ))}
            </ShowGenres>
            <ShowRating>
              {" "}
              <StarIcon /> {`${show.rating?.average} / 10`}
            </ShowRating>
            <ShowForm>
              <TicketForm>
                <label htmlFor="userName">
                  <span> Name: </span>
                  <input
                    type="text"
                    name="userName"
                    id="userName"
                    value={formData.userName}
                    onChange={handleOnChange}
                  />
                </label>
                <label htmlFor="userEmail">
                  <span> Email : </span>
                  <input
                    type="email"
                    name="userEmail"
                    id="userEmail"
                    value={formData.userEmail}
                    onChange={handleOnChange}
                  />
                </label>
                <Button type="submit" onClick={handleSubmit}>
                  Confirm Ticket
                </Button>
              </TicketForm>
              <Button onClick={handleShowModal}>Cancel</Button>
            </ShowForm>
            {showAlert ? (
              <ConfirmBooking>
                <p>
                  Hurray!! Your ticket booking for <span>{show.name} </span> is
                  successfull.
                </p>
              </ConfirmBooking>
            ) : null}
          </ModalContentWrapper>
        </ModalContainer>
      ) : null}
    </>
  );
};

export default Modal;

const ModalContainer = styled.div`
  position: fixed;
  background: rgba(0, 0, 0, 0.6);
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  backdrop-filter: blur(10px);
  z-index: 2;
  h2 {
    width: fit-content;
    color: rgba(237, 141, 141);
    border-bottom: 0.01rem solid rgba(253, 251, 249, 0.8);
  }
`;

const ModalContentWrapper = styled(animated.div)`
  position: relative;
  /* top: 5rem; */
  left: 50%;
  background: rgba(23, 23, 23);
  width: 50%;
  height: calc(100%);
  font-size: clamp(1rem, 3vw, 1.2rem);
  display: flex;
  flex-direction: column;
  gap: 2rem;
  flex-grow: 1;
  z-index: 3;
  overflow-y: auto;
  padding: 2em 0.7em;
`;

const ShowTitle = styled.h1`
  span {
    /* display: block; */
    color: rgba(var(--cherryRed));
  }
  color: rgba(var(--milkWhite));
`;

const ShowForm = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  gap: 1em;
`;

const TicketForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 1em;
  label {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1em;
    color: rgba(var(--milkWhite));
  }
  input {
    min-width: 20em;
    height: 2.5em;
    background-color: rgba(var(--grey));
    outline: none;
    border: none;
    padding: 0.5em;
    font-size: 1em;
    color: rgba(var(--milkWhite));
  }
`;

const Button = styled.button`
  padding: 0.8em;
  background-color: rgba(var(--cherryRed));
  border: none;
  outline: none;
  border-radius: 5px;
  cursor: pointer;
  color: rgba(var(--milkWhite));
  font-size: 1em;
`;

const ShowGenres = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1em;
`;

const Genres = styled.p`
  padding: 0.5em;
  background: rgba(var(--grey));
  border-radius: 5px;
  color: rgba(var(--milkWhite));
`;

const ShowRating = styled.p`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: rgba(var(--milkWhite));
  font-size: 1.4em;
  gap: 0.5em;
`;

const StarIcon = styled(AiFillStar)`
  font-size: 1.5em;
  color: yellow;
`;

const ConfirmBooking = styled.div`
  p {
    padding: 1em;
    background: green;
    color: rgba(var(--milkWhite));
    span {
      background: rgba(var(--grey));
      padding: 0.5em;
      margin: 0 0.3em;
      border-radius: 5px;
    }
  }
`;
