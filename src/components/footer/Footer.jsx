import React from 'react'
import Container from '../../utils'
import { Link } from 'react-router-dom'
import twitter from '../../assets/twitter.svg'
import github from '../../assets/github.svg'
import figma from '../../assets/figma.svg'
import { useTranslation } from 'react-i18next'

const Footer = ({data}) => {
  const {t} = useTranslation()
  return (

    <footer>
      <Container>
        <div className="footer__wrapper flex justify-between py-[26px]">
          <p className='font-poppins font-semibold text-[12px] leading-[18px]' >
            {t("footer-1")} &nbsp;
            <Link className='text-[#EE5626] underline' >
            {t("footer-2")}
            </Link>
          </p>
          <Link className='text-[#000000] underline text-[12px] leading-[18px] font-poppins font-semibold' href="#">
            gblog@gmail.com
          </Link>
          <div className='flex gap-[14px]' >
            <Link><img src={twitter} alt="" /></Link>
            <Link><img src={github} alt="" /></Link>
            <Link><img src={figma} alt="" /></Link>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer