type ButtonProps = {
  label: string | number;
  onClick: () => void;
};

export function Button({ label, onClick }: ButtonProps) {
  return <button onClick={onClick}>{label}</button>;
}

export function MainComponent() {
  return (
    <div>
      <Button label="Click me" onClick={() => console.log("clicked")} />
    </div>
  );
}
