import React from "react";
import Lawthoua from "../assets/blank.png";
import Joe from "../assets/blank.png";
import James from "../assets/blank.png";
import Peng from "../assets/blank.png";
import Github from "../assets/Github.png";
import Linkedin from "../assets/LinkedIn.png";
import '../components/theTeam.css';


const TheTeamFour = () => {
  return (
    <div id="theTeamSection" className="bg-[#4d3ff5]">
      <section>
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="title text-4xl font-bold title-font mb-10">
              The Team
            </h1>
            <p className="subtitle lg:w-2/3 mx-auto leading-relaxed text-base">
              This project created by Lawthoua Xiong, Joe Rorem, James Jeinecke, and Peng Vang. If you would like more information on any of us, please feel free to check out our Github, Linkedin, or websites. 
            </p>
          </div>

          <div className='content'>        
          <div className="flex flex-wrap -m-4">
            <div className="p-4 lg:w-1/2">
              <div className="team-card h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                <img
                  alt="team"
                  className="profile-img flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                  src={Lawthoua}
                />
                <div className="flex-grow sm:pl-8">
                  <h2 className="title-font font-medium text-lg text-black tracking-widest">
                    Lawthoua
                  </h2>
                  <h3 className="mb-3">Designer/Developer</h3>
                  <p className="mb-4">
                    Lawthoua Xiong
                  </p>
                  <span className="inline-flex items-center">
                    <a
                      className="links github-link flex"
                      href="https://github.com/LawthouaMXiong">
                      <img src={Github} alt="Github" />
                    </a>
                    <a
                      className="links flex"
                      href="https://www.linkedin.com/in/lawthouaxiong/">
                      <img src={Linkedin} alt="LinkedIn" />
                    </a>
                  </span>
                </div>
              </div>
            </div>


            <div className="p-4 lg:w-1/2">
              <div className="team-card h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                <img
                  alt="team"
                  className="profile-img flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                  src={Joe}
                />
                <div className="flex-grow sm:pl-8">
                  <h2 className="title-font font-medium text-lg text-gray-900">
                    Joe
                  </h2>
                  <h3 className="text-gray-700 mb-3">Designer/Developer</h3>
                  <p className="mb-4 ">
                    Joe Rorem
                  </p>
                  <span className="inline-flex items-center">
                    <a
                      className="links github-link flex"
                      href="https://github.com/Jrorem">
                      <img src={Github} alt="Github" />
                    </a>
                    <a
                      className="links flex"
                      href="https://www.linkedin.com/in/joe-rorem/">
                      <img src={Linkedin} alt="LinkedIn" />
                    </a>
                  </span>
                </div>
              </div>
            </div>


            <div className="p-4 lg:w-1/2">
              <div className="team-card h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                <img
                  alt="team"
                  className="profile-img flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                  src={James}
                />
                <div className="flex-grow sm:pl-8">
                  <h2 className="title-font font-medium text-lg text-gray-900">
                    James
                  </h2>
                  <h3 className="mb-3">Designer/Developer</h3>
                  <p className="mb-4">
                    James Heinecke
                  </p>
                  <span className="inline-flex items-center">
                    <a
                      className="links github-link flex"
                      href="https://github.com/">
                      <img src={Github} alt="Github" />
                    </a>
                    <a
                      className="links flex"
                      href="https://www.linkedin.com/in/james-heinecke-b657a412/">
                      <img src={Linkedin} alt="LinkedIn" />
                    </a>
                  </span>
                </div>
              </div>
            </div>


            <div className="p-4 lg:w-1/2">
              <div className="team-card h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                <img
                  alt="team"
                  className="profile-img flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                  src={Peng}
                />
                <div className="flex-grow sm:pl-8">
                  <h2 className="title-font font-medium text-lg text-gray-900">
                    Peng
                  </h2>
                  <h3 className="mb-3">Designer/Developer</h3>
                  <p className="mb-4">
                  Peng Vang
                  </p>
                  <span className="inline-flex items-center">
                    <a
                      className="links github-link flex"
                      href="https://github.com/Penguuuu">
                      <img src={Github} alt="Github" />
                    </a>
                    <a
                      className="links flex"
                      href="https://www.linkedin.com/in/tsipengvang/">
                      <img src={Linkedin} alt="LinkedIn" />
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>
    </div>
  );
};

export default TheTeamFour;
