import { useState } from "react";

interface OrderFormProps {
  onSubmit(order: { name: string; cups: number }): void;
}

export function OrderForm({ onSubmit }: OrderFormProps) {
  const [name, setName] = useState<string>("Masala");
  const [cups, setCups] = useState<number>(1);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit({ name, cups });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Chai Name</label>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label>Cups</label>
      <input
        type="number"
        value={cups}
        onChange={(e) => setCups(Number(e.target.value))}
      />

      <button type="submit">Order</button>
    </form>
  );
}
