import Link from "next/link";
import { IBook, SearchItemProps } from "../../../types/types";


const SearchItem = ({book}:SearchItemProps) => {
    return (
        <Link href={`/books/${book.id}`}>
            <div className="flex cursor-pointer p-3 items-center gap-4 hover:bg-slate-300 hover:text-white">
                <img className="w-8 h-12" src={book.formats['image/jpeg']} alt="" />
                <div className="font-semibold">{book.title}</div>
            </div>
        </Link>
    )
}

export default SearchItem;