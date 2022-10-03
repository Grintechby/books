import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { MainTemplateProps } from "../types/types";
import Search from "./Search/Search";
import { ru } from '../locales/ru.js'
import { en } from '../locales/en.js'
import ChangeLanguage from "./ChangeLanguage/ChangeLanguage";


const MainTemplate = ({ title, children, search }: MainTemplateProps) => {
    const router = useRouter();
    const t = router.locale === 'en' ? en : ru;

    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <header className="bg-white max-w-none phone:flex phone:flex-col phone:gap-2 tablet:items-center tablet:flex tablet:flex-row shadow-lg mb-5 p-3 tablet:justify-around">
                <Link href={'/'}>
                    <h1 className="font-bold text-3xl phone:mx-auto text-violet-700 cursor-pointer">{t.books}</h1>
                </Link>
                <div className="phone:mx-auto flex flex-col items-center">
                    <div className="font w-5"><img src="/icons/lang.png" alt="" /></div>
                    <div className="flex gap-1">
                        <ChangeLanguage href={router.asPath} locale={'en'}>EN</ChangeLanguage>
                        <ChangeLanguage href={router.asPath} locale={'ru'}>RU</ChangeLanguage>
                    </div>
                </div>
                <Search search={search} />
            </header>
            <div>
                {children}
            </div>
        </>
    )
};

export default MainTemplate;