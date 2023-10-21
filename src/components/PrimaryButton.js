import Button from "react-bootstrap/Button";

import "./PrimaryButton.css";

function PrimaryButton({ children, className, onClick }) {
  return (
    <Button variant="primary" className={className} onClick={onClick}>
      {children}
    </Button>
  );
}

export default PrimaryButton;
