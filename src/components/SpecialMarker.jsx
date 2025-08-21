import "./SpecialMarker.css";

export default function SpecialMarker({ type, isTrue }) {
  let color, text, isOff;
  if (isTrue)
  {switch (type) {
    case "newMarker":
      color = "var(--green400)";
      text = "NEW!";
      break;
    case "featuredMarker":
      color = "var(--green900)";
      text = "FEATURED";
      break;
  }}
  else isOff = "hidden";
  return (
    <div
      className="special-marker"
      style={{ backgroundColor: color, visibility: isOff }}
    >
      <span className="new-marker">{text}</span>
    </div>
  );
}
