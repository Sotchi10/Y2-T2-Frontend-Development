export default function Card({ item }) {
  return (
    <div className="card">
      <h4>{item.name}</h4>
      <small>{item.title}</small>
      <p>{item.desc}</p>
      <img src={item.image.src} alt={item.image.alt} />
    </div>
  );  
}

