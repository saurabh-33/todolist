import React from 'react'
import SVGLogo from './SVGLogo'
import { faCode } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Appbar = () => {
    return (
        <header className='appbar'>
            <div className='appbar__items-wrapper'>
                <SVGLogo className='appbar__logo' />
                <a href='https://github.com/saurabh-33/todolist' target='_blank' title='Source code'><FontAwesomeIcon icon={faCode} className='appbar__code-icon' /></a>
            </div>
        </header>
    )
}

export default Appbar
