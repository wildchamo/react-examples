export const StaticData = () => {
  const fuits = ["apple", "banana", "orange", "kiwi"];

  return (
    <>
      <ul>
        {fuits.map((fuit) => (
          <li key={fuit}>{fuit}</li>
        ))}
      </ul>
    </>
  );
};
