import React from "react";
import { useQuery, gql } from "@apollo/client";

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
  const {
    loading,
    error,
    data: { categories },
  } = useQuery(CATEGORIES);
  console.log(categories);
  if (loading) return <p>Loading Categories..</p>;
  if (error) return <p>Error fetching categories</p>;
  return (
    <div>
      <span>Filter reviews by their importance</span>
      {categories?.data?.map(singleCate=>)}
      
          </div>
  );
};

export default Category;
