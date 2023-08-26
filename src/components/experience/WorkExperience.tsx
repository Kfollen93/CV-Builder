import { Button, Form } from "react-bootstrap";

interface WorkExperienceProps {
  companyName: string;
  positionTitle: string;
  responsibilities: string;
  startDate: string;
  endDate: string;
  location: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: () => void;
  showEditButton: boolean;
  onEdit: () => void;
}

export interface WorkExpInfo {
  companyName: string;
  positionTitle: string;
  responsibilities: string;
  startDate: string;
  endDate: string;
  location: string;
}

function WorkExperience(props: WorkExperienceProps) {
  const {
    companyName,
    positionTitle,
    responsibilities,
    startDate,
    endDate,
    location,
    onChange,
    onSubmit,
    showEditButton,
    onEdit,
  } = props;

  return (
    <div className="input-container">
      <h5>
        <b>Work Experience</b>
      </h5>
      {showEditButton ? (
        <Button variant="secondary" type="button" onClick={onEdit}>
          Edit
        </Button>
      ) : (
        <Form>
          <Form.Group controlId="formCompanyName">
            <Form.Label>Company Name:</Form.Label>
            <Form.Control
              type="text"
              name="companyName"
              value={companyName}
              onChange={onChange}
              placeholder="Enter company name"
            />
          </Form.Group>

          <Form.Group controlId="formPositionTitle">
            <Form.Label>Position Title:</Form.Label>
            <Form.Control
              type="text"
              name="positionTitle"
              value={positionTitle}
              onChange={onChange}
              placeholder="Enter position title"
            />
          </Form.Group>

          <Form.Group controlId="formResponsibilities">
            <Form.Label>Responsibilities:</Form.Label>
            <Form.Control
              as="textarea"
              rows={4}
              name="responsibilities"
              value={responsibilities}
              onChange={onChange}
              placeholder="Enter responsibilities"
            />
          </Form.Group>

          <Form.Group controlId="formStartDate">
            <Form.Label>Start Date:</Form.Label>
            <Form.Control
              type="text"
              name="startDate"
              value={startDate}
              onChange={onChange}
              placeholder="Enter start date"
            />
          </Form.Group>

          <Form.Group controlId="formEndDate">
            <Form.Label>End Date:</Form.Label>
            <Form.Control
              type="text"
              name="endDate"
              value={endDate}
              onChange={onChange}
              placeholder="Enter end date"
            />
          </Form.Group>

          <Form.Group controlId="formLocation">
            <Form.Label>City, State:</Form.Label>
            <Form.Control
              type="text"
              name="location"
              value={location}
              onChange={onChange}
              placeholder="Enter your city and state"
            />
          </Form.Group>

          <div className="mt-2">
            <Button variant="primary" type="button" onClick={onSubmit}>
              Submit
            </Button>
          </div>
        </Form>
      )}
    </div>
  );
}

export default WorkExperience;
