import { useRouter } from "next/router";
import { useRef, useState } from "react";
import { SearchProps } from "../../types/types";
import {useOnClickOutside} from 'usehooks-ts';
import SearchList from "./SearchComponents/SearchList";
import SearchInput from "./SearchComponents/SearchInput";


const Search = ({ search }: SearchProps) => {
    const [input, setInput] = useState('');
    const [visible, setVisible] = useState(false);
    const router = useRouter();

    const searchRef = useRef<HTMLDivElement>(null);
    useOnClickOutside(searchRef, () => setVisible(false))

    const handleInput = (e: any) => {
        setInput(e.target.value);
    }

    const handleSearch = () => {
        const currentQuery = router.query;
        currentQuery.author = input;
        router.push({
            query: currentQuery,
            pathname: router.pathname
        })
        setInput('');
    }

    return (
        <div ref={searchRef} className="max-w-6xl flex-grow relative">
            <SearchInput handleInput={handleInput} handleSearch={handleSearch} input={input} onVisible={()=> setVisible(true)} />
            <SearchList visible={visible} search={search} />
        </div>
    )
}

export default Search;
