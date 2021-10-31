import React from "react";
import styled from "styled-components";
import phone from "../../../features/Home/img/phone.svg";
import ring1 from "../../../features/Home/img/ring_orange.svg";
import message1 from "../../../features/Home/img/message_pink.svg";
import message2 from "../../../features/Home/img/message_blue.svg";
import arrow from "../../../features/Home/img/arrow.svg";
import './HeaderContent.css';
import { Link } from "react-router-dom";

function HeaderContent() {
  return (
    <HeaderContentStyled>
      <div className="left-content">
        <div className="left-text-container">
          <h1>HospiTalk</h1>
          <p className="white">
            Special messaging application for medical staffs
          </p>
          <p className="mt-2 tracking-wide">
            Healthcare professionals will have a dedicated messaging app.
            There, they are divided into departments to exchange information,
            and you can immediately send prominent notifications by SMS or phone.
          </p>
          <Link to="/signup">
            <button className="btn-signUpNow">
              <span>Sign Up Now</span>
              <img src={arrow} alt="" className="ml-3" />
            </button>
          </Link>
        </div>
      </div>
      <div className="right-content">
        <img src={phone} alt="" className="phone" />
        <img src={ring1} alt="" className="ring1" />
        <img src={message1} alt="" className="message1" />
        <img src={message2} alt="" className="message2" />
      </div>
    </HeaderContentStyled>
  );
}

const HeaderContentStyled = styled.div`
  list-style: none;
  font-family: "Nunito", sans-serif;
  text-decoration: none;
  color: white;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding-top: 8rem;
  @media screen and (max-width: 700px) {
    grid-template-columns: repeat(1, 1fr);
  }
  .left-content {
    display: flex;
    align-items: center;
    padding-right: 3rem;
    .white {
      color: white;
      font-size: 1.8rem;
    }
    .black {
      color: #fdfaff;
      line-height: 1.9rem;
    }
    h1 {
      margin: 0.5rem 0;
      font-size: 4rem;
      font-weight: 600;
      @media screen and (max-width: 700px) {
        font-size: 3rem;
      }
    }

    .white {
      // padding: 1.4rem 0;
      line-height: 1.8rem;
    }
  }

  .right-content {
    position: relative;
    display: flex;
    justify-content: center;
    .phone {
      width: 90%;
    }
    .ring1 {
      position: absolute;
      bottom: 10%;
      right: 0;
      left: auto;
      animation: move2 20s infinite;
      transition: all 0.4s ease-in-out;
    }
    .message1 {
      position: absolute;
      top: 0;
      right: 0;
      left: auto;
      animation: move 5s infinite;
      transition: all 0.4s ease-in-out;
    }
    .message2 {
      position: absolute;
      bottom: 15%;
      left: 0;
      transition: all 0.4s ease-in-out;
      animation: move 8s infinite;
      animation-delay: 0.5s;
      transition: all 0.4s ease-in-out;
    }
  }

  //Header Animations
  .message1 {
    @keyframes move {
      0% {
        transform: translateY(0) rotate(0) scale(1) translateX(0);
      }
      50% {
        transform: translateY(-10px) rotate(20deg) scale(1.1) translateX(10px);
      }
      100% {
        transform: translateY(0) rotate(0deg) scale(1) translateX(0);
      }
    }
    @keyframes move2 {
      0% {
        transform: translateY(0) rotate(0) scale(1) translateX(0);
      }
      50% {
        transform: translateY(-10px) rotate(60deg) scale(1.1) translateX(10px);
      }
      100% {
        transform: translateY(0) rotate(0deg) scale(1) translateX(0);
      }
    }
  }
`;

export default HeaderContent;
