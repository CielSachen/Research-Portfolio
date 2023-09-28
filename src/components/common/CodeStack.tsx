import './CodeStack.css';

import { faCode } from '@fortawesome/free-solid-svg-icons';

import { Card } from './Card';

export function CodeStack() {
  return (
    <>
      <Card
        icon={faCode}
        title="Code Stack"
        body={
          <div className="codes-body">
            <div className="code">
              <img
                src="https://cdn.jsdelivr.net/npm/programming-languages-logos/src/html/html.png"
                alt="HTML 5 Logo"
                className="code-icon"
              />
              <div className="code-name">HTML</div>
              <div className="code-development-type">Web Development</div>
              <div className="code-type">Front-End</div>
            </div>
            <div className="code">
              <img
                src="https://cdn.jsdelivr.net/npm/programming-languages-logos/src/css/css.png"
                alt="CSS 3 Logo"
                className="code-icon"
              />
              <div className="code-name">CSS</div>
              <div className="code-development-type">Web Development</div>
              <div className="code-type">Front-End</div>
            </div>
            <div className="code">
              <img
                src="https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png"
                alt="JavaScript Logo"
                className="code-icon"
              />
              <div className="code-name">JavaScript</div>
              <div className="code-development-type">Web Development</div>
              <div className="code-type">Fullstack</div>
            </div>
            <div className="code">
              <img
                src="https://cdn.jsdelivr.net/npm/programming-languages-logos/src/typescript/typescript.png"
                alt="TypeScript Logo"
                className="code-icon"
              />
              <div className="code-name">TypeScript</div>
              <div className="code-development-type">Web Development</div>
              <div className="code-type">Fullstack</div>
            </div>
            <div className="code">
              <img
                src="https://cdn.jsdelivr.net/npm/programming-languages-logos/src/java/java.png"
                alt="Java Logo"
                className="code-icon"
              />
              <div className="code-name">Java</div>
              <div className="code-development-type">Software Development</div>
              <div className="code-type">Back-End</div>
            </div>
          </div>
        }
      />
    </>
  );
}
