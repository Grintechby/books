import Link from "next/link";
import { useRouter } from "next/router";
import formatName from "../../helpers/formatName";
import { IBook } from "../../types/types";
import {en} from '../../locales/en.js'
import {ru} from '../../locales/ru.js'



const BookCard = ({ formats, authors, download_count, id, title }: IBook) => {
    const router = useRouter();
    const t = router.locale === 'en' ? en : ru;

    return (
        <Link href={`/books/${id}`}>
            <div className="flex flex-col bg-slate-100 rounded-lg text-center items-center p-3 justify-between">
                <div className="w-25 h-72">
                    <img className="max-w-none max-h-72 w-52 rounded-lg" src={formats} alt="" />
                </div>
                <div>
                    <p className="font-bold w-48">{title}</p>
                    <p className="w-48 italic">{(authors?.map((author, i) => <span key={i}>{formatName(author.name)}</span>))}</p>
                    <div className="flex flex-col items-center gap-2">
                        <span className="font-semibold">{t.download}</span>
                        <p className="bg-violet-500 text-white px-2 rounded-md">{download_count}</p>
                    </div>
                </div>

            </div>
        </Link>
    )
}

export default BookCard;