import React from 'react'
import './Footer.css'
import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
    return (
        <div className="footerContainer">

            <div className="footLeft">

                <div className="footLeftLeft">


                    <Link href="/"> <div className="logo">
                        <Image src="/assets/logo.svg" height={150} width={150} alt="this is the logo" />
                    </div>
                    </Link>

                    <div className="footerLeftnav">
                        <ul>
                            <li><button>home</button></li>
                            <li><button>about</button></li>
                        </ul>
                    </div>

                </div>

                <div className="footLeftRight">

                    <ul>
                        <li>987 Hillcrest Lane</li>
                        <li>Irvine,CA</li>
                        <li>California 92714</li>
                        <li>Call Us:949-833-7432</li>
                    </ul>


                </div>


            </div>


            <div className="footRight">

                <div className="footerSocialIconsGallery">

                    <img src="/assets/icon-facebook.svg" />
                    <img src="/assets/icon-pinterest.svg" />
                    <img src="/assets/icon-twitter.svg" />




                </div>


                <p>Copyright 2026. All Rights Reserved</p>



            </div>


        </div>





    )
}

export default Footer
