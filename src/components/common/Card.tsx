import './Card.css';

import type { IconDefinition } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface Props {
  body: JSX.Element;
  icon: IconDefinition;
  title: string;
}

export function Card(props: Props) {
  return (
    <div className="card">
      <div className="card-container">
        <div className="card-header">
          <div className="card-icon">
            <FontAwesomeIcon icon={props.icon} />
          </div>
          <div className="card-title">{props.title}</div>
        </div>
        <div className="card-body">
          <div className="card-text">{props.body}</div>
        </div>
      </div>
    </div>
  );
}
