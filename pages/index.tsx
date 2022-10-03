import type { GetServerSideProps } from 'next'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import BooksList from '../components/BooksList/BooksList'
import MainTemplate from '../components/MainTemplate'
import { HomeProps } from '../types/types';
import {en} from '../locales/en.js';
import {ru} from '../locales/ru.js';


const Home = ({ books, page, search, author }: HomeProps) => {
  const router = useRouter();

  useEffect(() => {
    document.addEventListener('scroll', scrollHandler)

    return function () {
      document.removeEventListener('scroll', scrollHandler)
    }
  }, [page, author])

  const scrollHandler = (e: Event) => {
    if ((e.target as Document).documentElement.scrollHeight - ((e.target as Document).documentElement.scrollTop + window.innerHeight) < 50) {
      const currentPath = router.pathname;
      const currentQuery = router.query;
      currentQuery.page = ((+page) + 1).toString();
      router.push({
        pathname: currentPath,
        query: currentQuery
      })
    }
  }

  return (
    <MainTemplate title='Home' search={search}>
      <BooksList books={books} />
    </MainTemplate>
  )
}

export default Home;

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const page = query.page || 1;
  const response = await fetch(`https://gutendex.com/books?page=${page}`);
  const books = await response.json();
  const author = query.author || '~';
  const get = await fetch(`https://gutendex.com/books?search=${author}`);
  const search = await get.json();
  return {
    props: { books, page, author, search },
  }
}
