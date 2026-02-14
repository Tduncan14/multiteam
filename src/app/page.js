import Image from "next/image";
import './home.css'
import FooterCarousel from "./Components/FooterCarousel/FooterCarousel";

export default function Home() {
  return (
    <section className="flex  flex-col min-h-screen  font-sans dark:bg-black">

      <section className="upperHeader">


        <img className="bg-pattern-homePatternOne" src="/assets/bg-pattern-home-1.svg" />

        <div className="thisupperHone">
          <h1>Find the best  <span className="spanMe">talent</span></h1>
        </div>


        <div className="thisupperPara">



          <p>Finding the right people and building height
            performing teams can be hard. Most companies
            aren't tapping into abundance of global talent.
            We're about to change that
          </p>
        </div>


        <img className="bg-pattern-homeTwo" src="/assets/bg-pattern-home-2.svg" />



      </section>
      {/* this is the section */}


      <section className="midHeader">
        <div className="leftY">



          <h1>
            Build & manage distributed teams
            like no one else.
          </h1>
        </div>

        <div className="rightyyIcons">

          <div className="Icons">

            <img src="/assets/icon-person.svg" />


            <div className="IconsHone">
              <h2>Experienced individuals</h2>

              <p>Our network is made up of highly experienced professionals who are
                passionate about what they do
              </p>
            </div>

          </div>

          <div className="Icons">

            <img src="/assets/icon-cog.svg" />

            <div className="IconsHone">
              <h2>Easy to Implement</h2>

              <p>Our processes have been refined over years of implementation meaning our teams always deliver</p>
            </div>

          </div>

          {/* three */}

          <div className="Icons">

            <img src="/assets/icon-chart.svg" />


            <div className="IconsHone">
              <h2>Enchanced Productivity </h2>

              <p>Our customized platform with in-built analytics helps you manage your distributed teams.</p>
            </div>

          </div>

        </div>


      </section>


      {/* end of midHeader */}


      <section className="homeEnd">

        <div className="titleName">
          <h1> Delivering real results for top companies.</h1>
          <h1>Some of our <span>success stories.</span></h1>
        </div>



        <div className="gallerySuccess">

          <div className="successStory">

            <p>"The team perfectly fit the specialized skill set required.
              They focused on the most essential features helping us launch the platform
              eight months faster than planned
            </p>

            <h3>Kady Baker</h3>
            <h4>Product Manager at Bookmark </h4>


            <img src="/assets/avatar-kady.jpg" />
          </div>


          <div className="successStory">

            <p>"We needed to automate our entire onboarding process.
              The came in and built out the whole journey. Since going, user retention
              has gone through the roof!"
            </p>

            <h3>Kady Baker</h3>
            <h4>Founder of Manage </h4>


            <img src="/assets/avatar-aiysha.jpg" />
          </div>


          <div className="successStory">

            <p>"Amazing. Our team helped us build an app that delivered
              a new experience for hiring a physio.
              The launch was an instant success with 100k
              downloads in the first month.""
            </p>

            <h3>Arthur Clarke</h3>
            <h4>Co-founder of MyPhysia</h4>


            <img src="/assets/avatar-arthur.jpg" />
          </div>

        </div>





      </section>



      <FooterCarousel />







    </section>
  );
}
