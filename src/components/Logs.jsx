function Logs({ logs }) {
  return (
    <section id="log" className="container">
      <h2>Battle Log</h2>

      <ul>
        {logs.map((log, index) => (
          <li key={index}>
            <span>{log.isPlayer ? "Player" : "Monster"}</span>

            <span>
              {log.isDamage ? (
                <>
                  {" "}
                  attacks for <span className="log--damage">{log.value}</span>
                </>
              ) : (
                <>
                  {" "}
                  heals for <span className="log--heal">{log.value}</span>
                </>
              )}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
export default Logs;