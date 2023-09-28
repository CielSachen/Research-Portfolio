import './Socials.css';

import { faGithub, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { userConfigs } from '../../configs/userConfigs';

export function Socials() {
  return (
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
      <div className="email">
        <div className="email-wrapper">
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
  );
}
