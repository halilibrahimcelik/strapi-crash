import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import styles from "./reviewDetails.module.scss";
//import useFetch from "../../hooks/useFetch";
import Container from "../../UI/Container";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { useQuery, gql } from "@apollo/client";

const REVIEW = gql`
  query GetReview($id: ID!) {
    review(id: $id) {
      data {
        id
        attributes {
          title
          body
          rating
        }
      }
    }
  }
`;

const ReviewDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { loading, error, data } = useQuery(REVIEW, {
    variables: { id: id },
  });
  // const { loading, error, data } = useFetch(
  //   `http://localhost:1337/api/reviews/${id}`
  // );
  const detailedInfo = data?.review.data.attributes;

  if (loading) return <p className="text-2xl text-center ">Data is coming </p>;
  if (error)
    return <p className="text-2xl text-center ">we face with an eror </p>;
  return (
    <section className={styles["detailed-wraper"]}>
      <Container>
        <main className="mx-auto py-10 flex justify-center">
          <div className="max-w-[100%]  relative   md:w-[60%] flex flex-col justify-between border rounded-lg p-2 bg-pink-200 bg-opacity-20">
            <span className="rating-val absolute top-[-20px] p-5 bg-red-600 rounded-full flex justify-center items-center text-white font-bold w-[30px] h-[30px] left-[-20px]">
              <span> {detailedInfo?.rating}</span>
            </span>
            <div>
              <h2 className="text-2xl text-center">{detailedInfo?.title} </h2>
            </div>
            <div className="body">
              <ReactMarkdown>{detailedInfo?.body}</ReactMarkdown>
            </div>
            <button
              onClick={() => navigate(-1, { replace: true })}
              className="py-2 px-10 mt-5 w-[20rem] mx-auto block text-center border border-solid border-[#333] rounded-lg bg-red-600 text-white"
            >
              Go Back
            </button>
          </div>
        </main>
      </Container>
    </section>
  );
};

export default ReviewDetails;
