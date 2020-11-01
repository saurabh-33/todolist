import React from 'react'
import SVGLogo from './SVGLogo'
import { faCode } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Appbar = () => {
    return (
        <header className='appbar'>
            <div className='appbar__items-wrapper'>
                <SVGLogo className='appbar__logo' />
                <a href='#' title='Source code'><FontAwesomeIcon icon={faCode} className='appbar__code-icon' /></a>
            </div>
        </header>
    )
}

export default Appbar
