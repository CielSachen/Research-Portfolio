import './AboutPage.css';

import { faGithub, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { assets } from '../../assets';
import { CodeStack } from '../../components/common/CodeStack';
import { Socials } from '../../components/common/Socials';
import { userConfigs } from '../../configs/userConfigs';

export function AboutPage() {
  return (
    <div className="page-content">
      <div className="content-wrapper">
        <div className="about-container">
          <div className="about-main">
            <div className="about-left-side">
              <div className="title about-title">A STEM student studying in De La Salle Santiago Zobel School</div>
              <div className="subtitle about-subtitle">
                Raphael Panaligan has been studying in De La Salle Zobel for nearly six (6) years, transferring during seventh (7th) grade on the then new Vermosa campus.
                He chose the Science, Technology, Engineering, and Mathematics (STEM) strand as he has a passion for programming or computers in general, and nuclear energy.
              </div>
              <div className="subtitle about-subtitle">
                A generally antisocial person who prefers to stay in their room, he developed a hobby of programming small projects to pass time.
                Beginning from the basics of JavaScript, and now learning React.js with TypeScript and regular Java.
              </div>
              <div className="about-second-area-left-side">
                <div className="about-cards">
                  <CodeStack />
                </div>
              </div>
            </div>
            <div className="about-right-side">
              <div className="about-image-container">
                <div className="about-image-wrapper">
                  <img
                    src={assets.images.profilePicture}
                    alt="Profile Icon"
                    className="about-image"
                  />
                </div>
              </div>
              <div className="about-socials">
                <Socials />
              </div>
            </div>
          </div>
          <div className="about-socials-mobile">
            <div className="socials">
              <div className="social">
                <a
                  href={userConfigs.socials.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="social-icon">
                    <FontAwesomeIcon icon={faGithub} />
                  </div>
                  <div className="social-text">Follow on GitHub</div>
                </a>
              </div>
              <div className="social">
                <a
                  href={userConfigs.socials.instagram}
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="social-icon">
                    <FontAwesomeIcon icon={faInstagram} />
                  </div>
                  <div className="social-text">Follow on Instagram</div>
                </a>
              </div>
              <div className="social">
                <a
                  href={userConfigs.socials.youtube}
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="social-icon">
                    <FontAwesomeIcon icon={faYoutube} />
                  </div>
                  <div className="social-text">Follow on YouTube</div>
                </a>
              </div>
              <div className="social">
                <a
                  href={`mailto:${userConfigs.email}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="social-icon">
                    <FontAwesomeIcon icon={faEnvelope} />
                  </div>
                  <div className="social-text">{userConfigs.email}</div>
                </a>
              </div>
              <div className="social">
                <a
                  href={userConfigs.socials.website}
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="social-icon">
                    <FontAwesomeIcon icon={faGlobe} />
                  </div>
                  <div className="social-text">Website</div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
