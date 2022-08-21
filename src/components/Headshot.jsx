export default function Headshot() {
  return (
    <img
      src="/headshot.jpg"
      className="block mx-auto"
      width="150"
      height="150"
      alt="Trenton Kennedy at a coffee shop"
      onMouseEnter={(e) => (e.target.src = "/giphy.gif")}
      onMouseLeave={(e) => (e.target.src = "/headshot.jpg")}
    />
  );
}
