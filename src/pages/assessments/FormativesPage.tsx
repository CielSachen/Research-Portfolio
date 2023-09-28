import './FormativesPage.css';

import { assets } from '../../assets';

export function FormativesPage() {
  return (
    <div className="page-content">
      <div className="content-wrapper">
        <div className="formatives-container">
          <div className="formatives-main">
            <div className="title formatives-title">Edpuzzles</div>
            <div className="screenshots-list">
              <div className="formatives-image-container">
                <div className="formatives-image-wrapper">
                  <img
                    src={assets.images.formativeAssessments.edpuzzleScreenshot1}
                    alt="Edpuzzle Screenshot"
                  />
                </div>
                <div className="formatives-image-wrapper">
                  <img
                    src={assets.images.formativeAssessments.edpuzzleScreenshot2}
                    alt="Edpuzzle Screenshot"
                  />
                </div>
                <div className="formatives-image-wrapper">
                  <img
                    src={assets.images.formativeAssessments.edpuzzleScreenshot3}
                    alt="Edpuzzle Screenshot"
                  />
                </div>
              </div>
            </div>
            <div className="title formatives-title">Jamovi Exercises</div>
            <div className="screenshots-list">
              <div className="formatives-pdf-container">
                <div className="formatives-pdf-wrapper">
                  <iframe
                    src="https://drive.google.com/file/d/1mXKUX1h-QlGxZntAn9gLkIciiUPAOGsv/preview"
                    title="Descriptives"
                  ></iframe>
                </div>
                <div className="formatives-pdf-wrapper">
                  <iframe
                    src="https://drive.google.com/file/d/1_bELItDwVwxEvyYFcaLgchCjddbpakqI/preview"
                    title="Independent T Test"
                  ></iframe>
                </div>
                <div className="formatives-pdf-wrapper">
                  <iframe
                    src="https://drive.google.com/file/d/1bYDhBuOVOUIBmFgdARiGMn8K3pXRfl7j/preview"
                    title="Paired T Test"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
