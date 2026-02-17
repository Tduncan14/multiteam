import React from 'react'
import './about.css'
import FooterCarousel from '../Components/FooterCarousel/FooterCarousel'

const About = () => {
    return (
        <>
            <div className="aboutContainer">
                <div className="upperAbout">

                    <div className="upperAboutLeft">
                        <h1> About</h1>

                    </div>


                    <div className="upperAboutRight">

                        <p> We help companies build dynamic teams made up of top global talent.
                            Using our network of passionate professionals we drive innovation and
                            deliver incredible outcomes. Talented, diverse teams shaped the best products
                            and experiences. We'll bring those teams to you.
                        </p>

                    </div>



                </div>

                {/* end of the upperAbout */}

                {/*  this is  the beginning of the director's page */}

                <div className="directorsContainer">

                    <h1 className="directTop"> Meet the directors</h1>


                    <div className="directorsGalleries">

                        <div className="directorGallery">
                            <img className='avatarDi' src='/assets/avatar-nikita.jpg' />
                            <h1> Nikita Marks</h1>
                            <h3>Founder & CEO</h3>

                            <button> <img className="cross" src='/assets/icon-cross.svg' /></button>
                        </div>


                        <div className="directorGallery">
                            <img className='avatarDi' src='/assets/avatar-christian.jpg' />
                            <h1> Cristian Duncan</h1>
                            <h3>Co-founder & COO</h3>

                            <button> <img className="cross" src='/assets/icon-cross.svg' /></button>
                        </div>


                        <div className="directorGallery">
                            <img className='avatarDi' src='/assets/avatar-cruz.jpg' />
                            <h1> Cruz Hamer</h1>
                            <h3>Co-founder & CTO </h3>


                            <button> <img className="cross" src='/assets/icon-cross.svg' /></button>
                        </div>

                        <div className="directorGallery">
                            <img className='avatarDi' src='/assets/avatar-drake.jpg' />
                            <h1> Drake Heaton</h1>
                            <h3>Business Development Lead</h3>

                            <button> <img className="cross" src='/assets/icon-cross.svg' /></button>
                        </div>


                        <div className="directorGallery">
                            <img className='avatarDi' src='/assets/avatar-griffin.jpg' />
                            <h1> Griffin Wise</h1>
                            <h3>Lead Marketing </h3>

                            <button> <img className="cross" src='/assets/icon-cross.svg' /></button>
                        </div>


                        <div className="directorGallery">
                            <img className='avatarDi' src='/assets/avatar-aden.jpg' />
                            <h1> Aden Allan</h1>
                            <h3>Lead Marketing</h3>
                            <button> <img className="cross" src='/assets/icon-cross.svg' /></button>
                        </div>




                    </div>

                </div>

                {/* end of the directorsContainer */}

                <div className="clientsContainer">
                    <h1> Some of our clients</h1>

                    <div className="clientsName">

                        <ul>
                            <li><img src="/assets/logo-the-verge.png" /></li>
                            <li><img src="/assets/logo-jakarta-post.png" /></li>
                            <li><img src="/assets/logo-the-guardian.png" /></li>
                            <li><img src="/assets/logo-tech-radar.png" /></li>
                            <li><img src="/assets/logo-gadgets-now.png" /></li>
                        </ul>
                    </div>
                </div>

                {/* end of the clientsContainer */}



            </div>
            <FooterCarousel />
        </>
    )
}

export default About
