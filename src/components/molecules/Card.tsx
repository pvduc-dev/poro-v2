import * as React from 'react';
import Divider from "../atoms/Divider";
// @ts-ignore
import Animation from '../../assets/animation.svg';

const Card = () => {
  return (
    <div
      className="py-1.5 rounded-md w-full max-w-lg mx-auto"
    >
      <div
        className="h-80 md:h-96 py-8"
      >
        <img src="/animation.svg" alt=""/>
      </div>
      <div>
        <p className="text-center text-xl font-bold mb-4">Backend Developer</p>
        <div className="text-gray-300 mt-1.5">
          <svg className="inline-block fill-green-400 mr-2" xmlns="http://www.w3.org/2000/svg" version="1.1" id="Capa_1"
               x="0px"
               y="0px" viewBox="0 0 507.506 507.506"
               width="15" height="15">
            <g>
              <path
                d="M163.865,436.934c-14.406,0.006-28.222-5.72-38.4-15.915L9.369,304.966c-12.492-12.496-12.492-32.752,0-45.248l0,0   c12.496-12.492,32.752-12.492,45.248,0l109.248,109.248L452.889,79.942c12.496-12.492,32.752-12.492,45.248,0l0,0   c12.492,12.496,12.492,32.752,0,45.248L202.265,421.019C192.087,431.214,178.271,436.94,163.865,436.934z"/>
            </g>
          </svg>
          Proficient using front-end languages: HTML, CSS/SASS, Javascript/Typescript.
        </div>
        <p className="text-gray-300 mt-1.5">
          <svg className="inline-block fill-green-400 mr-2" xmlns="http://www.w3.org/2000/svg" version="1.1" id="Capa_1"
               x="0px"
               y="0px" viewBox="0 0 507.506 507.506"
               width="15" height="15">
            <g>
              <path
                d="M163.865,436.934c-14.406,0.006-28.222-5.72-38.4-15.915L9.369,304.966c-12.492-12.496-12.492-32.752,0-45.248l0,0   c12.496-12.492,32.752-12.492,45.248,0l109.248,109.248L452.889,79.942c12.496-12.492,32.752-12.492,45.248,0l0,0   c12.492,12.496,12.492,32.752,0,45.248L202.265,421.019C192.087,431.214,178.271,436.94,163.865,436.934z"/>
            </g>
          </svg>
          Have 2.5-year experience in working with VueJs framework.
        </p>
        <p className="text-gray-300 mt-1.5">
          <svg className="inline-block fill-green-400 mr-2" xmlns="http://www.w3.org/2000/svg" version="1.1" id="Capa_1"
               x="0px"
               y="0px" viewBox="0 0 507.506 507.506"
               width="15" height="15">
            <g>
              <path
                d="M163.865,436.934c-14.406,0.006-28.222-5.72-38.4-15.915L9.369,304.966c-12.492-12.496-12.492-32.752,0-45.248l0,0   c12.496-12.492,32.752-12.492,45.248,0l109.248,109.248L452.889,79.942c12.496-12.492,32.752-12.492,45.248,0l0,0   c12.492,12.496,12.492,32.752,0,45.248L202.265,421.019C192.087,431.214,178.271,436.94,163.865,436.934z"/>
            </g>
          </svg>
          Proficient using version control software such as Git.
        </p>
        <p className="text-gray-300 mt-1.5">
          <svg className="inline-block fill-green-400 mr-2" xmlns="http://www.w3.org/2000/svg" version="1.1" id="Capa_1" x="0px"
               y="0px" viewBox="0 0 507.506 507.506"
               width="15" height="15">
            <g>
              <path d="M163.865,436.934c-14.406,0.006-28.222-5.72-38.4-15.915L9.369,304.966c-12.492-12.496-12.492-32.752,0-45.248l0,0   c12.496-12.492,32.752-12.492,45.248,0l109.248,109.248L452.889,79.942c12.496-12.492,32.752-12.492,45.248,0l0,0   c12.492,12.496,12.492,32.752,0,45.248L202.265,421.019C192.087,431.214,178.271,436.94,163.865,436.934z"/>
            </g>
          </svg>
          Proficient in using UI design tools such us Adobe Photoshop, Adobe Illustrator, Adobe XD, Figma.
        </p>
      </div>
    </div>
  );
};

export default Card;
