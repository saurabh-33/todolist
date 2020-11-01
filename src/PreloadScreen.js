import React, { useState,useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import SVGLogo from './SVGLogo';
const PreloadScreen = () => {
    const preloadSVGAnimationDuration = 3200;
    const [isPreloadScreenActive, setIsPreloadScreenActive] = useState(true);
    useEffect(() => {
        setTimeout(()=>{
            setIsPreloadScreenActive(false);
        }, preloadSVGAnimationDuration);
    });        
    return (
        <CSSTransition in={isPreloadScreenActive} classNames="preload-svg-container" timeout={
            {
                enter: 0,
                appear: 0,
                exit: 300
            }
        } unmountOnExit>
            <div className="preload-svg-container">
                <SVGLogo className="preload-svg" viewBox="-3 0 130 32"/>
            </div>
        </CSSTransition>
    );
}

export default PreloadScreen;
