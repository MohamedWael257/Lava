import React from 'react'
import loader from '../../assets/loader1.mp4'
import './Loader.css'
const Loader = () => {
    return (
        <>
            <div className="bodyloader">
                <div className="scene" style={{ "--hue": 260, "--saturation": 53, "--lightness": 68 }}>
                    <div className="word">
                        <div className="letter__wrap" style={{ "--index": 0 }}>
                            <div className="letter" data-letter="L"><span className="letter__panel" aria-hidden="true">L</span><span className="letter__panel" aria-hidden="true">W</span><span className="letter__panel" aria-hidden="true">L</span><span className="letter__panel" aria-hidden="true">W</span><span className="letter__panel"></span></div>
                        </div>
                        <div className="letter__wrap" style={{ "--index": 1 }}>
                            <div className="letter" data-letter="o"><span className="letter__panel" aria-hidden="true">o</span><span className="letter__panel" aria-hidden="true">a</span><span className="letter__panel" aria-hidden="true">o</span><span className="letter__panel" aria-hidden="true">a</span><span className="letter__panel"></span></div>
                        </div>
                        <div className="letter__wrap" style={{ "--index": 2 }}>
                            <div className="letter" data-letter="a"><span className="letter__panel" aria-hidden="true">a</span><span className="letter__panel" aria-hidden="true">i</span><span className="letter__panel" aria-hidden="true">a</span><span className="letter__panel" aria-hidden="true">i</span><span className="letter__panel"></span></div>
                        </div>
                        <div className="letter__wrap" style={{ "--index": 3 }}>
                            <div className="letter" data-letter="d"><span className="letter__panel" aria-hidden="true">d</span><span className="letter__panel" aria-hidden="true">t</span><span className="letter__panel" aria-hidden="true">d</span><span className="letter__panel" aria-hidden="true">t</span><span className="letter__panel"></span></div>
                        </div>
                        <div className="letter__wrap" style={{ "--index": 4 }}>
                            <div className="letter" data-letter="i"><span className="letter__panel" aria-hidden="true">i</span><span className="letter__panel" aria-hidden="true">.</span><span className="letter__panel" aria-hidden="true">i</span><span className="letter__panel" aria-hidden="true">.</span><span className="letter__panel"></span></div>
                        </div>
                        <div className="letter__wrap" style={{ "--index": 5 }}>
                            <div className="letter" data-letter="n"><span className="letter__panel" aria-hidden="true">n</span><span className="letter__panel" aria-hidden="true">.</span><span className="letter__panel" aria-hidden="true">n</span><span className="letter__panel" aria-hidden="true">.</span><span className="letter__panel"></span></div>
                        </div>
                        <div className="letter__wrap" style={{ "--index": 6 }}>
                            <div className="letter" data-letter="g"><span className="letter__panel" aria-hidden="true">g</span><span className="letter__panel" aria-hidden="true">.</span><span className="letter__panel" aria-hidden="true">g</span><span className="letter__panel" aria-hidden="true">.</span><span className="letter__panel"></span></div>
                        </div>
                    </div>
                </div>
                {/* <div className="pl">
                    <div className="pl__dot"></div>
                    <div className="pl__dot"></div>
                    <div className="pl__dot"></div>
                    <div className="pl__dot"></div>
                    <div className="pl__dot"></div>
                    <div className="pl__dot"></div>
                    <div className="pl__dot"></div>
                    <div className="pl__dot"></div>
                    <div className="pl__dot"></div>
                    <div className="pl__dot"></div>
                    <div className="pl__dot"></div>
                    <div className="pl__dot"></div>
                    <div className="pl__text">Loading…</div>
                </div> */}
            </div>

        </>
        // <div style={{ zIndex: '444444', background: '#222123' }} className=" h-screen w-screen fixed top-0 left-0 flex justify-center items-center text-center flex-col">
        //     {/* <div className="flex gap-4 items-center mb-8 ">
        //   <img src={icon} className="w-10" />
        //   <h1 className="font-semibold text-slate-700 text-6xl">Lava</h1>
        // </div> */}
        //     <video autoPlay loop muted className='h-full w-full'>
        //         <source src={loader} type="video/mp4" />
        //     </video>
        // </div>
    )
}

export default Loader