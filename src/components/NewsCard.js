import Card from "react-bootstrap/Card";

import "./NewsCard.css";

function NewsCard({ imgSrc, className, onClick, style, text, title }) {
  className = className || "";
  return (
    <Card className={`news-card ${className}`} style={style} onClick={onClick} >
      <Card.Img variant="top" src={imgSrc} />
      <Card.Body>
        <Card.Title>
          {title}
        </Card.Title>
        <Card.Text>{text}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default NewsCard;
