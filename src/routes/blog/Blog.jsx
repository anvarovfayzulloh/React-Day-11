import React from 'react'
import { useParams } from 'react-router-dom'
import Nav from "../../components/nav/Nav"
import Footer from "../../components/footer/Footer"
import Container from '../../utils'
import user_avatar from "../../assets/user_avatar.svg"
import dots from "../../assets/dots.svg"
import arrow from '../../assets/arrow.svg'
import { useTranslation } from 'react-i18next'

const Blog = ({ data }) => {
  const { id } = useParams()
  const blog = data[id - 1]
  const handleToTop = () => {
    window.scroll(0, 0)
  }
  const { t } = useTranslation()
  return (
    <>
      <button onClick={handleToTop} className='custom__border flex items-center gap-[7px] px-[10px] py-[8px] ' >
        {t("blogs-1")} <img src={arrow} alt="" />
      </button>
      <Nav />
      <Container>
        <div className="blog__wrapper flex flex-col items-center">
          <h1 className='font-poppins font-bold text-[48px] leading-[72px]  text-center pt-[37px]  pb-[19px]' >
            {blog.title}
          </h1>
          <div className='flex items-center gap-[7px] justify-center' >
            <img className='w-[36px] h-[36px]' src={user_avatar} alt="" />
            <div className='py-[3px]' >
              <b className='gradient-text font-poppins font-semibold text-[12px]' >
                Husni Ramdani
              </b>
              <p className='font-poppins font-normal text-[8px]' >
                30 November 2021
              </p>
            </div>
          </div>
          <div className='justify-center py-[32px]' >
            <img src={dots} alt="" />
          </div>
          <img className='w-[558px] h-[335px]' src={blog.image} alt="" />
          <p className='font-poppins font-normal text-[18px] leading-[27px] max-w-[558px] pt-[37px] pb-[52px] text-justify' >
            {blog.text} <br />
            {blog.text2}
          </p>
        </div>
      </Container>
      <Footer />
    </>
  )
}

export default Blog