import React from 'react';
import { useAppContext } from '@/utils/context';
import { DotsStyles, DotAnimate } from './style';
const Loader = () => {
    const { loader } = useAppContext();

    return (
        <div className={`loader absolute h-full w-full z-100 top-0 left-0 rounded-[1.875rem] bg-white/45 ${loader ? 'visible' : 'invisible'}`}>
            <svg className="filter" version="1.1">
                <defs>
                    <filter id="gooeyness">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur"></feGaussianBlur>
                        <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -10" result="gooeyness"></feColorMatrix>
                        <feComposite in="SourceGraphic" in2="gooeyness" operator="atop"></feComposite>
                    </filter>
                </defs>
            </svg>
            <DotsStyles className="dots absolute p-[30px] w-full text-center top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4">
                <DotAnimate>
                    {Array(5).fill().map((_, i) => (
                        <div key={i} className={`dot bg-primary rounded-full inline-block mr-[20px] h-[32px] w-[32px]`}></div>
                    ))}
                </DotAnimate>
            </DotsStyles>
        </div>
    )
}

export default Loader