import React from 'react'
import Container from '../../utils'
import user_avatar from "../../assets/user_avatar.svg"
import blogs1 from "../../assets/blogs1.png"
import blogs2 from "../../assets/blogs2.png"
import blogs3 from "../../assets/blogs3.png"
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const Blogs = () => {
  const { t } = useTranslation()

  return (
    <section>
      <Container>
        <div className="blogs__wrapper w-full flex pt-[52px] pb-[26px]">
          <div className='max-h-[489px] max-w-[210.640px] border-r custom-box-shadow-v2 pr-[15px]' >
            <div className='custom-box-shadow w-full pt-[5px] pl-[5px] pb-[24px] ' >
              <Link to={"/blog/1"} >
              <h2 className='roman font-bold text-3xl h-[108px] text-justify ' >
                Lorem ipsum dolor sit amet, consectetur...
              </h2>
              <p className='font-poppins font-normal text-[10px] mt-[18px] mb-[10px] text-justify ' >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet tempor nunc maecenas cras ipsum, lorem massa lacus...
              </p>
              <div className='flex items-center gap-[7px]' >
                <img className='w-[36px] h-[36px]' src={user_avatar} alt="" />
                <div className='py-[3px]' >
                  <b className='font-poppins font-semibold text-[12px]' >
                  {t("blog-1")}
                  </b>
                  <p className='font-poppins font-normal text-[8px]' >
                    {t("blog-2")}
                  </p>
                </div>
              </div>
              </Link>
            </div>
            <div className='custom-box-shadow w-full pl-[5px] pb-[10px] ' >
              <Link to={"/blog/2"} >
              <h2 className='roman font-bold text-3xl h-[108px] text-justify ' >
                Lorem ipsum dolor sit amet, consectetur...
              </h2>
              <p className='font-poppins font-normal text-xs  text-justify mt-[13px] mb-[15px]' >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet tempor nunc maecenas cras ipsum, lorem massa lacus...
              </p>
              </Link>
            </div>
          </div>
          <div className='max-w-[275px] pl-[14px] pr-[11px] pb-[22px]' >
            <Link to={"/blog/1"} >
            <img src={blogs1} alt="" />
            <h2 className='roman font-bold text-3xl pt-[9px]' >
              Lorem ipsum dolor sit amet, consectetur...
            </h2>
            <p className='font-poppins font-normal text-[12px] pt-[15px] pb-[30px] text-justify ' >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet tempor nunc maecenas cras ipsum, lorem massa lacus. Tortor lorem augue
              elit leo nibh. Laoreet risus iaculis quisque adipisc...
            </p>
            <div className='custom-box-shadow pb-[33px] flex items-center gap-[7px]' >
              <img className='w-[36px] h-[36px]' src={user_avatar} alt="" />
              <div className='py-[3px]' >
                <b className='font-poppins font-semibold text-[12px]' >
                {t("blog-1")}
                </b>
                <p className='font-poppins font-normal text-[8px]' >
                {t("blog-2")}
                </p>
              </div>
            </div>
            </Link>
          </div>
          <div className='max-w-[210px] px-[10px] pb-[12px] custom-box-shadow-v3 h-[477px]' >
            <div className='custom-box-shadow pb-[17px] mb-[21px]' >
              <Link to={"/blog/2"} >
              <img src={blogs2} alt="" />
              <h3 className='roman font-bold leading-[23px] text-[19px] pt-[14px] pb-[4px]' >
                Lorem ipsum dolor sit amet, consectetur...
              </h3>
              <p className='font-poppins font-normal text-[12px] leading-[18px]' >
                By  &nbsp;
                <span className='text-[#EE5626]' >
                {t("blog-1")}
                </span>
              </p>
              </Link>
            </div>
            <div className='custom-box-shadow pb-[17px]' >
              <Link to={"/blog/3"} >
              <img src={blogs3} alt="" />
              <h3 className='roman font-bold leading-6 text-[20px] pt-[14px] pb-[4px]' >
                Lorem ipsum dolor sit amet, consectetur...
              </h3>
              <p className='font-poppins font-normal text-[10px] leading-[15px] pb-[6px] text-justify ' >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet lorem massa lacus...
              </p>
              <p className='font-poppins font-normal text-[12px] leading-[18px]' >
                By  &nbsp;
                <span className='text-[#EE5626]' >
                {t("blog-1")}
                </span>
              </p>
              </Link>
            </div>
          </div>
          <div className='max-w-[272px] w-full pl-[12px] pr-[12px] pb-[12px]' >
            <div className='w-full pb-[23px] custom-box-shadow' >
              <Link to={"/blog/1"} >
              <h2 className='roman font-bold text-[30px] leading-[35px] ' >
                Lorem ipsum dolor sit amet, consectetur...
              </h2>
              <p className='font-poppins font-normal text-[10px] leading-[15px] text-justify pt-[10px] pb-[10px]' >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet tempor nunc maecenas cras ipsum, lorem massa lacus...
              </p>
              <div className='flex items-center gap-[7px]' >
                <img className='w-[36px] h-[36px]' src={user_avatar} alt="" />
                <div className='py-[3px]' >
                  <b className='font-poppins font-semibold text-[12px]' >
                  {t("blog-1")}
                  </b>
                  <p className='font-poppins font-normal text-[8px]' >
                  {t("blog-2")}
                  </p>
                </div>
              </div>
              </Link>
            </div>
            <div className='w-full pb-[23px] custom-box-shadow' >
              <Link to={"/blog/2"} >
              <h2 className='roman font-bold text-[30px] leading-[35px] ' >
                Lorem ipsum dolor sit amet, consectetur...
              </h2>
              <p className='font-poppins font-normal text-[10px] leading-[15px] text-justify pt-[10px] pb-[10px]' >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet tempor nunc maecenas cras ipsum, lorem massa lacus...
              </p>
              <div className='flex items-center gap-[7px]' >
                <img className='w-[36px] h-[36px]' src={user_avatar} alt="" />
                <div className='py-[3px]' >
                  <b className='font-poppins font-semibold text-[12px]' >
                  {t("blog-1")}
                  </b>
                  <p className='font-poppins font-normal text-[8px]' >
                  {t("blog-2")}
                  </p>
                </div>
              </div>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Blogs