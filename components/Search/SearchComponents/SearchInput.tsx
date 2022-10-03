import { useRouter } from "next/router";
import {en} from '../../../locales/en.js'
import {ru} from '../../../locales/ru.js'
import { SearchInputProps } from "../../../types/types.js";


const SearchInput = ({handleInput, handleSearch, onVisible, input}:SearchInputProps) => {
    const router = useRouter();
    const t = router.locale === 'en' ? en : ru;
    return (
        <div className="flex gap-3 items-center">
            <input onClick={onVisible} className="max-w-6xl phone:h-9 tablet:h-14 desktop:h-14 p-3 flex-grow border-violet-700 border-solid border-2 outline-none rounded-xl" type="search" name="Search" id="search" placeholder={`${t.search}...`} onChange={handleInput} value={input} />
            <button className="bg-violet-700 phone:p-2 tablet:h-14 tablet:p-5 rounded-lg duration-200 hover:bg-violet-900" onClick={handleSearch}><img style={{maxWidth: '20px'}} className="w-5 h-5" src="/icons/search.png" alt="" /></button>
        </div>
    )
}

export default SearchInput