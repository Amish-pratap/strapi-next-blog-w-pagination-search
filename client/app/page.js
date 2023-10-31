import { getArticles, getCategories } from "@/http";
import Tabs from "./components/tabs/page";
import ArticleList from "./components/articleList/page";

import qs from "qs";
import Pagination from "./components/pagination/page";

export default async function Home({ searchParams }) {
  // console.log(searchParams);
  const options = {
    populate: ["author.avatar"],
    sort: ["id:desc"],
    pagination: {
      page: searchParams.page ? searchParams.page : 1,
      pageSize: 1,
    },
    filters: {
      title: {
        $containsi: searchParams.search,
      },
      // body: {
      //   $containsi: searchParams.search,
      // },
    },
  };

  const querryString = qs.stringify(options);
  const categories = await getCategories();
  const articles = await getArticles(querryString);
  // console.log(articles);
  const { page, pageCount } = articles.meta.pagination;
  return (
    <>
      <Tabs categories={categories} />
      <ArticleList articles={articles} />
      <Pagination page={page} pageCount={pageCount} />
    </>
  );
}
