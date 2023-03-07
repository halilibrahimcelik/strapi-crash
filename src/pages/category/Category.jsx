import React from "react";
import { useQuery, gql } from "@apollo/client";
import { Link } from "react-router-dom";
import styles from "./category.module.scss";
import { Outlet } from "react-router-dom";

const CATEGORIES = gql`
  query GetCategories {
    categories {
      data {
        id
        attributes {
          name
        }
      }
    }
  }
`;
const Category = () => {
  const { loading, error, data } = useQuery(CATEGORIES);

  if (loading) return <p>Loading Categories..</p>;
  if (error) return <p>Error fetching categories</p>;
  return (
    <div>
      <span>Filter reviews by their importance</span>
      {data?.categories?.data?.map((singleCategory) => (
        <Link
          className={styles.filterLinks}
          key={singleCategory.id}
          to={`${singleCategory.id}`}
        >
          {singleCategory?.attributes?.name}{" "}
        </Link>
      ))}
      <Outlet />
    </div>
  );
};

export default Category;
