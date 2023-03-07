import React from "react";
import { useQuery, gql } from "@apollo/client";
import { useParams } from "react-router-dom";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import Container from "../../UI/Container";
const CATEGORY = gql`
  query GetCategory($id: ID!) {
    category(id: $id) {
      data {
        id
        attributes {
          name
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
      }
    }
  }
`;

const CategoryDetails = () => {
  const { categoryId } = useParams();

  const { loading, error, data } = useQuery(CATEGORY, {
    variables: { id: categoryId },
  });
  const detailedInfo = data?.category?.data?.attributes;
  const fetchedDAta = detailedInfo?.reviews?.data;
  console.log(detailedInfo);
  return (
    <Container>
      <main className="mx-auto py-10  px-4 flex  flex-wrap gap-10 justify-center border-t-orange-400">
        {fetchedDAta?.map((singleReview) => {
          return (
            <div
              key={singleReview.id}
              className="w-[100%]  relative   md:w-[60%] flex flex-col justify-between border rounded-lg p-2 bg-pink-200 bg-opacity-20"
            >
              <span className="rating-val absolute top-[-20px] p-5 bg-red-600 rounded-full flex justify-center items-center text-white font-bold w-[30px] h-[30px] left-[-20px]">
                <span> {singleReview?.attributes?.rating}</span>
              </span>
              <div>
                <h2 className="text-2xl text-center">
                  {singleReview?.attributes?.title}{" "}
                </h2>
              </div>
              <div className="body">
                <ReactMarkdown>{singleReview?.attributes?.body}</ReactMarkdown>
                <p>
                  <strong>Importance:</strong> <span>{detailedInfo?.name}</span>
                </p>
              </div>
            </div>
          );
        })}
      </main>
    </Container>
  );
};

export default CategoryDetails;
