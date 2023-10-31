import React from "react";
import BlogCard from "../blogcard/page";
import BlogCardWithImage from "../blogcardimg/page";

const ArticleList = ({ articles }) => {
  return (
    <div className="grid lg:grid-cols-2 grid-gap gap-16 mt-16">
      {articles.data.map((article, idx) => {
        return (
          <div key={article.id}>
            {idx === 1 ? (
              <BlogCardWithImage article={article} />
            ) : (
              <BlogCard article={article} />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ArticleList;
