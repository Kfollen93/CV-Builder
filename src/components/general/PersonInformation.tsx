import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

interface PersonInformationProps {
  name: string;
  address: string;
  emailAddress: string;
  phoneNumber: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: () => void;
  showEditButton: boolean;
  onEdit: () => void;
}

export interface PersonInfo {
  name: string;
  address: string;
  emailAddress: string;
  phoneNumber: string;
}

function PersonInformation(props: PersonInformationProps) {
  const {
    name,
    address,
    emailAddress,
    phoneNumber,
    onChange,
    onSubmit,
    showEditButton,
    onEdit,
  } = props;

  return (
    <div className="input-container">
      <h5>
        <b>Personal Information</b>
      </h5>
      {showEditButton ? (
        <Button variant="secondary" type="button" onClick={onEdit}>
          Edit
        </Button>
      ) : (
        <Form>
          <Form.Group controlId="formName">
            <Form.Label>Name:</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={name}
              onChange={onChange}
              placeholder="Enter your name"
            />
          </Form.Group>

          <Form.Group controlId="formAddress">
            <Form.Label>City, State:</Form.Label>
            <Form.Control
              type="text"
              name="address"
              value={address}
              onChange={onChange}
              placeholder="Enter your city and state"
            />
          </Form.Group>

          <Form.Group controlId="formEmail">
            <Form.Label>Email Address:</Form.Label>
            <Form.Control
              type="email"
              name="emailAddress"
              value={emailAddress}
              onChange={onChange}
              placeholder="Enter your email"
            />
          </Form.Group>

          <Form.Group controlId="formPhoneNumber">
            <Form.Label>Phone Number:</Form.Label>
            <Form.Control
              type="tel"
              name="phoneNumber"
              value={phoneNumber}
              onChange={onChange}
              placeholder="Enter your phone number"
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

export default PersonInformation;
