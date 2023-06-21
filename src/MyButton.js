import { useState } from "react";

export default function MyButton() {
  const [fruits, setFruits] = useState([
    { title: "orange", id: 1 },
    { title: "mango", id: 2 },
    { title: "banana", id: 3 },
    { title: "melon", id: 4 },
    { title: "pawpaw", id: 5 }
  ]);

  const [index, setIndex] = useState(0);

  const handleClick = () => {
    setIndex((prevIndex) => {
      if (prevIndex === fruits.length - 1) {
        return 0;
      } else {
        return prevIndex + 1;
      }
    });
  };

  return (
    <div>
      <button onClick={handleClick}>Change me</button>
      <p>{fruits[index].title}</p>
    </div>
  );
}
