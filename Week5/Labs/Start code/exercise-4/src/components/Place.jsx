export default function Place({img}) {
  return (
    <li key="img.id" className="place-item">
      <button>
        <img src={img.image.src} alt={img.image.alt} />
        <h3>"{img.title}"</h3>
      </button>
    </li>
  );
}
