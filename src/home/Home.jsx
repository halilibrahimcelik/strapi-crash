import React from "react";
import Container from "../UI/Container";
import styles from "./home.module.scss";

const Home = () => {
  return (
    <section>
      <Container>
        <main className={styles["main-wraper"]}>
          <h1>Welcome to Strapi tutorial</h1>
        </main>
      </Container>
    </section>
  );
};

export default Home;
