import { AxiosResponse } from 'axios';
import { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import ArticleList from '../components/ArticleList';
import Tabs from '../components/Tabs';
import { fetchArticles, fetchCategories } from '../http';
import { IArticle, ICategory, ICollectionResponse } from '../types';
import qs from 'qs';

interface IProptype {
  categories: {
    items: ICategory[];
  };
  articles: {
    items: IArticle[];
  };
}

const Home: NextPage<IProptype> = ({ categories, articles }) => {
  return (
    <div>
      <Head>
        <title>Taushik's Blog</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Tabs categories={categories.items} />

      <ArticleList articles={articles.items} />

      <main>
        <h1 className='mx'>welcome to hell</h1>
      </main>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const options = {
    populate: ['author.avatar'],
    sort: ['id:desc'],
    // pagination: {
    //   page: query.page ? +query.page : 1,
    //   // pageSize: 1,
    // },
  };
  const queryString = qs.stringify(options);
  const { data: articles }: AxiosResponse<ICollectionResponse<IArticle[]>> =
    await fetchArticles(queryString);

  // console.log(JSON.stringify(articles));

  //
  const { data: categories }: AxiosResponse<ICollectionResponse<ICategory[]>> =
    await fetchCategories();

  // console.log(categories);

  return {
    props: {
      categories: {
        items: categories.data,
      },
      articles: {
        items: articles.data,
        pagination: articles.meta.pagination,
      },
    },
  };
};

export default Home;
