import * as React from 'react';
import {FC, useEffect, useRef, useState} from "react";
import Lottie from "lottie-web";

interface SkillCardProps {
  id: string;
}

const SkillCard: FC<SkillCardProps> = ({id}) => {
  const ref = useRef(null);
  const [isAnimationLoaded, setIsAnimationLoaded] = useState(false);
  useEffect(() => {
    Lottie.loadAnimation({
      container: ref.current,
      path: `/${id}.json`,
      autoplay: true,
      loop: true,
      renderer: 'svg',
      name: id,
    })
      .addEventListener('DOMLoaded', () => {
      setIsAnimationLoaded(true);
    })
  }, [])
  return (
    <div
      ref={ref}
      className="w-1/3"
    >
      {!isAnimationLoaded && (
        <img src={`/${id}.svg`} alt={`Pv Duc ${id} skill`}/>
      )}
    </div>
  );
};

export default SkillCard;
