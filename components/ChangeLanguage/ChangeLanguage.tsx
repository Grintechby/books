import Link from "next/link";
import { ILang } from "../../types/types";


const ChangeLanguage = ({ children, href, locale }: ILang) => {
    return (
        <Link href={href} locale={locale}>
            <a className="text-xs font-semibold text-violet-600 hover:text-blue-600">{children}</a>
        </Link>
    )
}

export default ChangeLanguage;