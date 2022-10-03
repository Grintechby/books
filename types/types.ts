export interface IAuthor {
    name: string;
    birth_year: number;
    death_year: number;
  }
  
  export interface IBook {
      id?: number;
      title: string;
      subjects?: string[];
      authors: IAuthor[];
      translators?: string[];
      bookshelves?: string[];
      languages?: string[];
      copyright?: boolean;
      media_type?: string;
      formats?: any;
      download_count: number;
  }
  
  export interface IBooks {
    count: number;
    next: string;
    previous: string;
    results: IBook[];
  }

  export interface BooksListProps {
    books: IBooks;
  }

  export interface SearchProps {
    visible?: boolean;
    search: IBooks;
  }
  
  export interface HomeProps extends BooksListProps {
    page: string;
    search: IBooks;
    author: string
  }

  export interface IBookProps {
    book: IBook;
    search: IBooks
}


export interface BookState {
  books: IBook[];
}

export enum BooksActionType {
  FETCH_BOOKS = 'FETCH_BOOKS',
}

export interface FetchBooksAction {
  type: BooksActionType.FETCH_BOOKS;
  payload: IBook[];
}

export interface ILang {
  href: string;
  locale: string;
  children: React.ReactNode;
}

export interface SearchInputProps {
  onVisible: () => void;
  handleInput: (e:any) => void;
  handleSearch: () => void; 
  input: string;
}

export interface SearchItemProps {
  book: IBook;
}

export interface MainTemplateProps {
  title: string;
  children: React.ReactNode;
  search: IBooks;
}