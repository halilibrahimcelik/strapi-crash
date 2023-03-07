import React from "react";
import Container from "../../UI/Container";
import styles from "./home.module.scss";
import { useQuery, gql } from "@apollo/client";
//import useFetch from "../../hooks/useFetch";
import ReviewItem from "../../components/reviewItem/ReviewItem";

//! useQuery  used to send query to graphql server
// gql  used by apllo to convert query string  into format it can use

const REVIEWS = gql`
  query GetReviews {
    reviews {
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
const Home = () => {
  // const { loading, error, data } = useFetch(
  //   "http://localhost:1337/api/reviews"
  // );
  const { loading, error, data } = useQuery(REVIEWS);
  console.log(data);
  if (loading) return <p className="text-2xl text-center ">Data is coming </p>;
  if (error)
    return <p className="text-2xl text-center ">we face with an eror </p>;
  return (
    <section>
      <Container>
        <main className={styles["main-wraper"]}>
          <h1>Welcome to Strapi tutorial</h1>
          <div className={styles.reviews}>
            {data?.reviews.data?.map((singleItem) => (
              <ReviewItem key={singleItem.id} {...singleItem} />
            ))}
          </div>
        </main>
      </Container>
    </section>
  );
};

export default Home;
