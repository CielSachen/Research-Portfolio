import './CBLPage.css';

import { assets } from '../../assets';

export function CBLPage() {
  return (
    <div className="page-content">
      <div className="content-wrapper">
        <div className="cbl-container">
          <div className="cbl-main">
            <div className="cbl-left-side">
              <div className="title cbl-title">Reflection</div>
              <div className="subtitle cbl-subtitle">
                The process for me and my group to make our research happen had been complicated but filled with many different learning experiences.
                We encountered plenty of issues with our initial concepts, but we were able to slowly get our concept to a point where we can execute on it.
                But in the end, we were able to get samples out for testing to see whether what we have done can be used to help our partner community, or if we have to rethink it once again.
              </div>
              <div className="subtitle cbl-subtitle">
                I had been able to learn a lot on a wide range of topics while conducting our research.
                Especially when it comes to the usage of applications like Jamovi and different types of analysis tests.
                But also, about cements in general due to the amount of research that we had to perform about it and talking to contractors as well as other people with great knowledge with them.
              </div>
            </div>
            <div className="cbl-right-side">
              <div className="cbl-image-container">
                <div className="cbl-image-wrapper">
                  <img
                    src={assets.images.researchSamples}
                    alt="Profile Icon"
                    className="cbl-image"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="cbl-second-main">
            <div className="title cbl-title">Worksheet 1: Challenge Planner</div>
            <iframe
              src="https://drive.google.com/file/d/1kBcPIlS4Rh2XITVY0Fxv3kAxfcHeUg7P/preview"
              title="Rise Challenge Planner"
            ></iframe>
            <div className="title cbl-title">Worksheet 2: Investigation Matrix</div>
            <iframe
              src="https://drive.google.com/file/d/11pP67ogWG4vs6LAetI88bJ2K7gQspxwi/preview"
              title="Investigation Matrix"
            ></iframe>
            <div className="title cbl-title">Worksheet 3: Learning Plans and Timeline</div>
            <iframe
              src="https://drive.google.com/file/d/1XDUWVxOARfVqBDejx6fPM_jyd6eMQKyq/preview"
              title="Learning Plans and Timeline"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
