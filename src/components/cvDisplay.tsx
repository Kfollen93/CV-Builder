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
}

function CvDisplay({
  submittedPersonInfoData,
  submittedWorkExpData,
}: ResumeDisplayProps) {
  return (
    <div className="resume-content">
      {/* Display the submitted data */}
      {Object.keys(submittedPersonInfoData).length > 0 ||
      Object.keys(submittedWorkExpData).length > 0 ? (
        <div>
          <ul className="list-unstyled">
            <li className="mb-2">
              <div className="text-center font-weight-bold color-banner">
                <h1>{submittedPersonInfoData.name}</h1>
                <div className="d-flex justify-content-between">
                  <p className="m-0" style={{ paddingLeft: "100px" }}>
                    {submittedPersonInfoData.address}
                  </p>
                  <p className="m-0">{submittedPersonInfoData.emailAddress}</p>
                  <p className="m-0" style={{ paddingRight: "100px" }}>
                    {submittedPersonInfoData.phoneNumber}
                  </p>
                </div>
              </div>
            </li>
          </ul>

          <div>
            <h3 className="text-center sub-banner">Experience</h3>
            <ul className="list-unstyled">
              <li className="mb-2">
                <div className="text-center">
                  <h5>{submittedWorkExpData.companyName}</h5>
                  <p className="mb-2">{submittedWorkExpData.positionTitle}</p>
                  <div className="text-center">
                    <p className="mb-2">
                      {submittedWorkExpData.startDate} -
                      {submittedWorkExpData.endDate}
                    </p>
                    <p className="mb-2">{submittedWorkExpData.location}</p>
                  </div>
                  <p className="mx-auto" style={{ maxWidth: "600px" }}>
                    {submittedWorkExpData.responsibilities}
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-center sub-banner">Education</h3>
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
