import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../styles/Layouts";

function CardSection() {
	return (
		<CardSectionStyled>
			<InnerLayout>
				<div className="card-container">
					<div className="card-left">
						<h2 className="secondary-heading">専用メッセージングアプリ</h2>
						<p>
							医療従事者だけ専用のメッセージングアプリ。アカウントはすべて事前承認されており、完全にプロフェッショナルです。
						</p>
					</div>
					<div className="card-right">
						<img
							width="450"
							height="300"
							src="https://static.vecteezy.com/system/resources/previews/001/363/129/non_2x/female-doctor-on-computer-screen-for-online-appointment-vector.jpg"
							alt=""
						/>
					</div>

					<div className="card-left">
						<img
							width="450"
							height="300"
							src="https://static.vecteezy.com/system/resources/previews/003/177/442/large_2x/online-doctor-service-technology-for-consultations-free-vector.jpg"
							alt=""
						/>
					</div>
					<div className="card-right">
						<div className="">
							<h2 className="secondary-heading">部門と学科に分かれる</h2>
							<p>情報の管理と、送信する必要の情報の選択が簡単になります。</p>
						</div>
					</div>


					<div className="card-left">
						<h2 className="secondary-heading">予期せぬお知らせ送信できる</h2>
						<p>
							緊急の場合、SMSとモバイルを直接送信するメッセージングができます。
						</p>
					</div>
					<div className="card-right">
						<img
							width="425"
							height="300"
							src="https://static.vecteezy.com/system/resources/previews/002/199/458/non_2x/online-doctor-consultation-concept-vector.jpg"
							alt=""
						/>
					</div>
				</div>
			</InnerLayout>
		</CardSectionStyled>
	);
}

const CardSectionStyled = styled.section`
  .card-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-row: repeat(3, 1fr);
    @media screen and (max-width: 845px) {
      grid-template-columns: repeat(1, 1fr);
    }
    .card-right {
      display: flex;
      justify-content: flex-end;
      padding: 2rem 0;

      img {
        border-radius: 20px;
        filter: drop-shadow(30px 20px 4px #d5d5d5);
      }
    }

    .card-left {
      padding: 4rem 0;

	  img {
        border-radius: 20px;
        filter: drop-shadow(30px 20px 4px #d5d5d5);
      }
    }
    p {
      font-family: "Nunito", sans-serif;
      color: #6a6d9e;
      line-height: 1.9rem;
      font-size: 1.2rem;
    }
    .secondary-heading {
      font-size: 2rem;
      color: #096397;
      font-family: "Nunito", sans-serif;
    }
  }
`;

export default CardSection;
