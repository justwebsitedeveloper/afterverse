import Button from "react-bootstrap/Button";

import "./SecondaryButton.css";

function SecondaryButton({ className, children, onClick }) {
  return (
    <Button className={className} variant="outline-primary" onClick={onClick}>
      {children}
    </Button>
  );
}

export default SecondaryButton;
