import * as React from "react"
import {FC, useEffect, useRef} from 'react'
import Card from "../components/molecules/Card";
import SkillCard from "../components/molecules/SkillCard";
import {Helmet} from "react-helmet";
import {useDarkMode} from "usehooks-ts";
import "react-multi-carousel/lib/styles.css"
import Carousel from "react-multi-carousel";
import Seo from "../components/organisms/Seo";

const IndexPage: FC = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };
  return (
    <>
      <Seo
        description="Pv Duc developer"
      />
      <main>
      </main>
    </>
)
}

export default IndexPage
