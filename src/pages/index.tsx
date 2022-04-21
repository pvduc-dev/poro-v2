import * as React from "react"
import {FC, useEffect, useRef} from 'react'
import Card from "../components/molecules/Card";
import Lottie from "lottie-web"
// @ts-ignore

const IndexPage: FC = () => {
  const ref = useRef(null);
  useEffect(() => {
    // @ts-ignore
    import('../../static/designer.json').then((data) => {
      Lottie.loadAnimation({
        container: ref.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: data,
        name: 'designer'
      })
      Lottie.stop('designer')
    });
  }, [])
  return (
    <main>
      <div>
        <div className="container">
          <div ref={ref}></div>
          <p
            className="text-center text-3xl font-bold text-[#5A6DFF]"
          >
            Skills
          </p>
          <div
            className="flex flex-wrap md:-mx-6 mt-6"
          >
            <div className="w-full lg:w-1/3 p-3 lg:p-4 xl:p-6 xl:p-8">
              <Card/>
            </div>
            <div className="w-full lg:w-1/3 p-3 lg:p-4 xl:p-6 xl:p-8">
              <Card/>
            </div>
            <div className="w-full lg:w-1/3 p-3 lg:p-4 xl:p-6 xl:p-8">
              <Card/>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default IndexPage
