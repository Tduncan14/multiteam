import Image from "next/image";
import './home.css'

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
            Build manage distributed teams
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


      <section className="homeHeaderEnd">




      </section>







    </section>
  );
}
