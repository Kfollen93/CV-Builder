interface ResumeDisplayProps {
  submittedPersonInfoData: {
    name: string;
    address: string;
    emailAddress: string;
    phoneNumber: string;
  };
  submittedWorkExpData: {
    companyName: string;
    positionTitle: string;
    startDate: string;
    endDate: string;
    location: string;
    responsibilities: string;
  };
  submittedEducationData: {
    schoolName: string;
    degree: string;
    enrolledDate: string;
    graduatedDate: string;
    awards: string;
  };
}

function CvDisplay({
  submittedPersonInfoData,
  submittedWorkExpData,
  submittedEducationData,
}: ResumeDisplayProps) {
  return (
    <div className="resume-content">
      {/* Display the submitted data */}
      {Object.keys(submittedPersonInfoData).length > 0 ||
      Object.keys(submittedWorkExpData).length > 0 ||
      Object.keys(submittedEducationData).length > 0 ? (
        <div>
          <ul className="list-unstyled">
            <li className="mb-2">
              <div className="text-center font-weight-bold color-banner">
                <h1>
                  <b>{submittedPersonInfoData.name}</b>
                </h1>
                <div className="d-flex justify-content-between">
                  <p className="mt-2 m-0" style={{ paddingLeft: "90px" }}>
                    <b>{submittedPersonInfoData.address}</b>
                  </p>
                  <p className="mt-2 m-0">
                    <b>{submittedPersonInfoData.emailAddress}</b>
                  </p>
                  <p className="mt-2 m-0" style={{ paddingRight: "65px" }}>
                    <b>{submittedPersonInfoData.phoneNumber}</b>
                  </p>
                </div>
              </div>
            </li>
          </ul>

          <div>
            <h2 className="text-center sub-banner mb-2 mt-5">
              <b>Experience</b>
            </h2>
            <ul className="list-unstyled">
              <li className="mb-2">
                <div className="text-center mt-3 line-spacing-text-size">
                  <h4>
                    <b>{submittedWorkExpData.companyName}</b>
                  </h4>
                  <p className="mb-2">
                    <b>{submittedWorkExpData.positionTitle}</b>
                  </p>
                  <div className="text-center">
                    <p className="mb-2">
                      <b>
                        {submittedWorkExpData.startDate}&nbsp;-&nbsp;
                        {submittedWorkExpData.endDate}
                      </b>
                    </p>
                    <p className="mb-2">
                      <b>{submittedWorkExpData.location}</b>
                    </p>
                  </div>
                  <p className="mx-auto" style={{ maxWidth: "600px" }}>
                    <b>{submittedWorkExpData.responsibilities}</b>
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-center sub-banner mb-2 mt-5">
              <b>Education</b>
            </h2>
            <ul className="list-unstyled">
              <li className="mb-2">
                <div className="text-center mt-3 line-spacing-text-size">
                  <h4>
                    <b>{submittedEducationData.schoolName}</b>
                  </h4>
                  <p className="mb-2">
                    <b>{submittedEducationData.degree}</b>
                  </p>
                  <div className="text-center">
                    <p className="mb-2">
                      <b>
                        {submittedEducationData.enrolledDate}&nbsp;-&nbsp;
                        {submittedEducationData.graduatedDate}
                      </b>
                    </p>
                    <p className="mx-auto" style={{ maxWidth: "600px" }}>
                      <b>{submittedEducationData.awards}</b>
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <div className="text-center" style={{ marginTop: "250px" }}>
          <h3>
            <b>
              <i>
                Start by filling out the forms to see your CV be built, or load
                an example CV.
              </i>
            </b>
          </h3>
        </div>
      )}
    </div>
  );
}

export default CvDisplay;
