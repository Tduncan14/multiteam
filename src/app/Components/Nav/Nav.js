import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import './style.css';

const Nav = () => {
    return (
        <header className="headContainer">
            <div className="leftHead">
                <div className="logo">
                    <Image src="/assets/logo.svg" height={150} width={150} alt="this is the logo" />
                </div>

                <div className="leftNav">
                    <Link href="/">home</Link>

                    <Link href="/about">about</Link>
                </div>
            </div>
            {/* this is the end of the left side */}


            <div className="rightHead">

                <button>
                    <Link href="/contact">contact us</Link>
                </button>

            </div>

        </header>
    )
}

export default Nav
