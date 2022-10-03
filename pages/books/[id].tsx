import { GetServerSideProps } from "next";
import MainTemplate from "../../components/MainTemplate";
import formatName from "../../helpers/formatName";
import { IBookProps } from "../../types/types";
import { ru } from '../../locales/ru.js';
import { en } from '../../locales/en.js';
import { useRouter } from "next/router";


export default function Book({ book, search }: IBookProps) {
    const router = useRouter();
    const t = router.locale === 'en' ? en : ru;
    return (
        <MainTemplate title={book.title} search={search}>
            <div className="phone:flex phone:flex-col phone:items-center tablet:flex tablet:flex-row mt-6 bg-slate-200 rounded-xl tablet:p-5 max-w-max mx-auto">
                <div className="w-25 h-72 m-3">
                    <img className="max-w-none max-h-72 w-52 rounded-lg" src={book.formats['image/jpeg']} alt="" />
                </div>
                <div className="m-3 pl-5 flex flex-col gap-3">
                    <div>
                        <div className="font-bold max-w-md"><span className="font-normal">{t.bookName}</span> {book.title}</div>
                        <div> <span className="font-normal ">{t.authors}</span> {(book.authors.map((author, i) => <span className="italic" key={i}>{formatName(author.name)}</span>))}</div>
                        <div className="flex items-center gap-2">
                            <span className="font-normal ">{t.download}</span>
                            <p className="bg-violet-500 text-white px-2 rounded-md">{book.download_count}</p>
                        </div>
                    </div>
                    <div className="flex gap-2 bg-slate-300 p-2 rounded-lg">
                        <p>{t.genre}</p>
                        <div>{book.subjects?.map((genre, i) =>
                            <p key={i}>{genre.replace(/--/g, ' - ')}</p>
                        )}</div>
                    </div>
                </div>
            </div>
        </MainTemplate>
    )
};

export const getServerSideProps: GetServerSideProps = async ({ params, query }) => {
    const response = await fetch(`https://gutendex.com/books/${params?.id}`)
    const book = await response.json()
    const author = query.author || '~';
    const get = await fetch(`https://gutendex.com/books?search=${author}`);
    const search = await get.json();
    return {
        props: { book, search },
    }
}
