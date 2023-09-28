import './HomePage.css';

import { faGithub, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faEnvelopesBulk, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { userConfigs } from '../../configs/userConfigs';

export function HomePage() {
  return (
    <div className="page-content hero-image">
      <div className="content-wrapper">
        <div className="home-container">
          <div className="home-main">
            <div className="title home-title">PRACTICAL RESEARCH 2: QUANTITATIVE RESEARCH IN DAILY LIFE</div>
            <div className="subtitle home-subtitle">Louis Raphael Villaluna Panaligan, 12-G STEM</div>
            <div className="home-socials">
              <a
                href={userConfigs.socials.github}
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon
                  icon={faGithub}
                  className="home-social-icon"
                />
              </a>
              <a
                href={userConfigs.socials.instagram}
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="home-social-icon"
                />
              </a>
              <a
                href={userConfigs.socials.youtube}
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon
                  icon={faYoutube}
                  className="home-social-icon"
                />
              </a>
              <a
                href={`mailto:${userConfigs.email}`}
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon
                  icon={faEnvelopesBulk}
                  className="home-social-icon"
                />
              </a>
              <a
                href={userConfigs.socials.website}
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon
                  icon={faGlobe}
                  className="home-social-icon"
                />
              </a>
            </div>
          </div>
          <div className="home-projects">
          </div>
        </div>
      </div>
    </div>
  );
}
