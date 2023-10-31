import Tabs from "@/app/components/tabs/page";
import { getArticles, getCategories } from "@/http";
import React from "react";
// import { usePathname } from "next/navigation";
import ArticleList from "@/app/components/articleList/page";
import qs from "qs";
import { capitalizeFirstLetter, makeCategory } from "@/app/utils";
import Pagination from "@/app/components/pagination/page";

export async function generateMetadata({ params }) {
  // console.log(params);
  return {
    title: `Blog Book ${capitalizeFirstLetter(makeCategory(params.slug))}`,
  };
}
const Category = async ({ params, searchParams }) => {
  // console.log(searchParams);
  const options = {
    populate: ["author.avatar"],
    sort: ["id:desc"],
    filters: {
      category: {
        slug: `${params.slug}`,
      },
    },
    pagination: {
      page: searchParams.page ? searchParams.page : 1,
      pageSize: 1,
    },
  };

  const querryString = qs.stringify(options);

  const categories = await getCategories();
  const articles = await getArticles(querryString);
  const { page, pageCount } = articles.meta.pagination;
  return (
    <>
      <Tabs categories={categories} />
      <ArticleList articles={articles} />
      <Pagination page={page} pageCount={pageCount} />
    </>
  );
};

export default Category;
