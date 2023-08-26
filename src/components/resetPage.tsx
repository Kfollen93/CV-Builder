import { Button } from "react-bootstrap";

interface ResetPageProps {
  resetPage: () => void;
}

function ResetPage(props: ResetPageProps) {
  const { resetPage } = props;

  return (
    <Button className="me-2" variant="danger" onClick={resetPage}>
      Clear CV Data
    </Button>
  );
}

export default ResetPage;
