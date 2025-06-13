import { useState } from "react";
import Select from "react-select";

//Importamos los estilos
import "./SelectPersonalizarToldos.css";

const fruitOptions = [
  { value: "apple", label: "Apple 🍎" },
  { value: "banana", label: "Banana 🍌" },
  { value: "orange", label: "Orange 🍊" },
];

const colorOptions = [
  { value: "red", label: "Red 🔴" },
  { value: "green", label: "Green 🟢" },
  { value: "blue", label: "Blue 🔵" },
  { value: "blue", label: "Blue 🔵" },
  { value: "blue", label: "Blue 🔵" },
  { value: "blue", label: "Blue 🔵" },
  { value: "blue", label: "Blue 🔵" },
];

const animalOptions = [
  { value: "dog", label: "Dog 🐶" },
  { value: "cat", label: "Cat 🐱" },
  { value: "rabbit", label: "Rabbit 🐰" },
];

const SelectPersonalizarToldos = () => {
  const [selectedFruit, setSelectedFruit] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedAnimal, setSelectedAnimal] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      fruit: selectedFruit?.value,
      color: selectedColor?.value,
      animal: selectedAnimal?.value,
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ maxWidth: 400, margin: "2rem auto" }}
    >
      <label>Fruit</label>
      <Select
        options={fruitOptions}
        value={selectedFruit}
        onChange={setSelectedFruit}
        placeholder="Select a fruit"
        isSearchable={false}
        styles={{
          menu: (base) => ({
            ...base,
            maxHeight: 150,
            overflowY: "auto",
          }),
          option: (base, state) => ({
            ...base,
            cursor: "pointer",
            backgroundColor: state.isFocused ? "#f0f0f0" : "white",
            color: "black",
          }),
        }}
      />

      <label style={{ marginTop: "1rem" }}>Color</label>
      <Select
        options={colorOptions}
        value={selectedColor}
        onChange={setSelectedColor}
        placeholder="Select a color"
        styles={{
          menu: (base) => ({
            ...base,
            maxHeight: 150,
            overflowY: "auto",
          }),
          option: (base, state) => ({
            ...base,
            cursor: "pointer",
            backgroundColor: state.isFocused ? "#f0f0f0" : "white",
            color: "black",
          }),
        }}
      />

      <label style={{ marginTop: "1rem" }}>Animal</label>
      <Select
        options={animalOptions}
        value={selectedAnimal}
        onChange={setSelectedAnimal}
        placeholder="Select an animal"
        isDisabled={true}
        styles={{
          menu: (base) => ({
            ...base,
            maxHeight: 150,
            overflowY: "auto",
          }),
          option: (base, state) => ({
            ...base,
            cursor: "pointer",
            backgroundColor: state.isFocused ? "#f0f0f0" : "white",
            color: "black",
          }),
        }}
      />

      <button type="submit" style={{ marginTop: "1rem" }}>
        Submit
      </button>
    </form>
  );
};

export default SelectPersonalizarToldos;
