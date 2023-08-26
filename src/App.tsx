import "./App.css";
import { useState, ChangeEvent } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import ClearPage from "./components/resetPage";
import CvDisplay from "./components/cvDisplay";
import ToggleDarkMode from "./components/toggleDarkMode";
import PersonInformation, {
  PersonInfo,
} from "./components/general/PersonInformation";
import WorkExperience, {
  WorkExpInfo,
} from "./components/experience/WorkExperience";

function App() {
  const useFormInput = <T extends object>(initialState: T) => {
    const [value, setValue] = useState<T>(initialState);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      setValue({ ...value, [e.target.name]: e.target.value });
    };

    const clear = () => {
      setValue(initialState);
    };

    return { value, onChange: handleChange, clear };
  };

  const personInfo = useFormInput({
    name: "",
    address: "",
    emailAddress: "",
    phoneNumber: "",
  });

  const workExpInfo = useFormInput({
    companyName: "",
    positionTitle: "",
    responsibilities: "",
    startDate: "",
    endDate: "",
    location: "",
  });

  const [submittedPersonInfoData, setSubmittedPersonInfoData] = useState(
    {} as PersonInfo
  );
  const [editPersonalInfo, setEditPersonalInfo] = useState(false);

  const [submittedWorkExpData, setSubmittedWorkExpData] = useState(
    {} as WorkExpInfo
  );
  const [editWorkExp, setEditWorkExp] = useState(false);

  const resetPage = () => {
    personInfo.clear();
    setEditPersonalInfo(false);
    setSubmittedPersonInfoData({} as PersonInfo);

    workExpInfo.clear();
    setEditWorkExp(false);
    setSubmittedWorkExpData({} as WorkExpInfo);
  };

  const handleSubmit = () => {
    setSubmittedPersonInfoData(personInfo.value);
    setEditPersonalInfo(true);
  };

  const handleWorkExperienceSubmit = () => {
    setSubmittedWorkExpData(workExpInfo.value);
    setEditWorkExp(true);
  };

  return (
    <Container fluid>
      <div>
        <ToggleDarkMode />
        <ClearPage resetPage={resetPage} />
        <Button className="me-2" variant="success">
          Load CV Example
        </Button>
      </div>

      <Row>
        {/* Left Column */}
        <Col xs={12} md={4}>
          <PersonInformation
            {...personInfo.value}
            onChange={personInfo.onChange}
            onSubmit={handleSubmit}
            showEditButton={editPersonalInfo}
            onEdit={() => setEditPersonalInfo(false)}
          />
          <WorkExperience
            {...workExpInfo.value}
            onChange={workExpInfo.onChange}
            onSubmit={handleWorkExperienceSubmit}
            showEditButton={editWorkExp}
            onEdit={() => setEditWorkExp(false)}
          />
        </Col>

        {/* Right Column */}
        <Col xs={12} md={8}>
          <CvDisplay
            submittedPersonInfoData={submittedPersonInfoData}
            submittedWorkExpData={submittedWorkExpData}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default App;