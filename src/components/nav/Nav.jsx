import React from 'react';
import Container from '../../utils';
import logo from "../../assets/logo.svg";
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Nav = () => {
    const [t, i18n] = useTranslation();
    const location = useLocation();

    const isBlogPage = location.pathname.startsWith('/blog/');

    const handleChangeLanguage = (e) => {
        i18n.changeLanguage(e.target.value);
    }
    return (
        <section className='pt-[17px]'>
            <Container>
                <div className="nav__wrapper flex justify-between items-center w-full">
                    <Link to="/"><img src={logo} alt="Logo" /></Link>
                    <h1 className={`nav__title font-poppins font-bold text-2xl h-[36px] text-[#201F1F] underline ${isBlogPage ? 'opacity-0' : 'opacity-100'}`}>
                        {t('nav-1')}
                    </h1>
                    <div className='flex items-center gap-[7px]' >
                        <select defaultValue={i18n.language} onChange={handleChangeLanguage} className="bg-transparent text-[#201F1F] font-poppins text-sm outline-none ">
                            <option value="uz">Uz</option>
                            <option value="ru">Ru</option>
                            <option selected value="en">En</option>
                        </select>

                        <div className="checkbox-wrapper-22">
                            <label className="switch" htmlFor="checkbox">
                                <input type="checkbox" id="checkbox" />
                                <div className="slider round"></div>
                            </label>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Nav;
