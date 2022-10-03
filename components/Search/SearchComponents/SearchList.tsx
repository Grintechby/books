import { useState } from "react";
import { SearchProps } from "../../../types/types"
import SearchItem from "./SearchItem"
import cn from 'classnames';


const SearchList = ({search, visible}:SearchProps) => {

    let result = search?.results.filter((itm, ind) => ind < 5)
    return (
        <div className={cn(visible ? 'absolute z-10 top-16 w-full bg-slate-100 rounded-xl' : 'hidden')}>
            {result?.map((book, i) =>
                <SearchItem book={book} key={book.id} />
            )}
        </div>
    )
}

export default SearchList;