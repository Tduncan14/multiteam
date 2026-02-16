import React from 'react'
import './about.css'

const About = () => {
    return (
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

                <h1> Meet the directors</h1>


                <div className="directorsGalleries">

                    <div className="directorGallery">
                        <img src='/assets/avatar-nikita.jpg' />
                        <h1> Nikita Marks</h1>
                        <h3>Founder & CEO</h3>
                    </div>


                    <div className="directorGallery">
                        <img src='/assets/avatar-christian.jpg' />
                        <h1> Cristian Duncan</h1>
                        <h3>Co-founder & COO</h3>
                    </div>


                    <div className="directorGallery">
                        <img src='/assets/avatar-cruz.jpg' />
                        <h1> Cruz Hamer</h1>
                        <h3>Co-founder & CTO </h3>
                    </div>

                    <div className="directorGallery">
                        <img src='/assets/avatar-drake.jpg' />
                        <h1> Drake Heaton</h1>
                        <h3>Business Development Lead</h3>
                    </div>


                    <div className="directorGallery">
                        <img src='/assets/avatar-griffin.jpg' />
                        <h1> Griffin Wise</h1>
                        <h3>Lead Marketing </h3>
                    </div>


                    <div className="directorGallery">
                        <img src='/assets/avatar-aden.jpg' />
                        <h1> Aden Allan</h1>
                        <h3>Lead Marketing</h3>
                    </div>




                </div>

            </div>

        </div>
    )
}

export default About
