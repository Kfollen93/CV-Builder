import { Button, Form } from "react-bootstrap";

interface EducationProps {
  schoolName: string;
  degree: string;
  enrolledDate: string;
  graduatedDate: string;
  awards: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: () => void;
  showEditButton: boolean;
  onEdit: () => void;
}

export interface EducationInfo {
  schoolName: string;
  degree: string;
  enrolledDate: string;
  graduatedDate: string;
  awards: string;
}

function Education(props: EducationProps) {
  const {
    schoolName,
    degree,
    enrolledDate,
    graduatedDate,
    awards,
    onChange,
    onSubmit,
    showEditButton,
    onEdit,
  } = props;

  return (
    <div className="input-container">
      <h5>
        <b>Education</b>
      </h5>
      {showEditButton ? (
        <Button variant="secondary" type="button" onClick={onEdit}>
          Edit
        </Button>
      ) : (
        <Form>
          <Form.Group controlId="formUniversityAttended">
            <Form.Label>University Attended:</Form.Label>
            <Form.Control
              type="text"
              name="schoolName"
              value={schoolName}
              onChange={onChange}
              placeholder="Enter University"
            />
          </Form.Group>

          <Form.Group controlId="formDegree">
            <Form.Label>Degree:</Form.Label>
            <Form.Control
              type="text"
              name="degree"
              value={degree}
              onChange={onChange}
              placeholder="Enter degree received"
            />
          </Form.Group>

          <Form.Group controlId="formEnrolledDate">
            <Form.Label>Enrolled Date:</Form.Label>
            <Form.Control
              type="text"
              name="enrolledDate"
              value={enrolledDate}
              onChange={onChange}
              placeholder="Enter enrolled date"
            />
          </Form.Group>

          <Form.Group controlId="formGraduatedDate">
            <Form.Label>Graduated Date:</Form.Label>
            <Form.Control
              type="text"
              name="graduatedDate"
              value={graduatedDate}
              onChange={onChange}
              placeholder="Enter graduation date"
            />
          </Form.Group>

          <Form.Group controlId="formAwards">
            <Form.Label>Awards:</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="awards"
              value={awards}
              onChange={onChange}
              placeholder="Enter any awards or achievements"
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

export default Education;
