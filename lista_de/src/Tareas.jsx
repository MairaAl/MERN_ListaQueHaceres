import { useState } from "react";
import "./App.css";
export default function Tareas() {
  const [nuevaTarea, setNuevaTarea] = useState("");
  const [tareas, setTareas] = useState([
    { tarea: "Hacer la cama", completada: false },
    { tarea: "Preparar el desayuno", completada: false },
    { tarea: "Dar comida a los perros", completada: false },
    { tarea: "Completar tareas", completada: false },
    { tarea: "Lavar las ropas", completada: false },
    { tarea: "Lavar los cubiertos", completada: false },
  ]);

  const handleChange = (event) => {
    setNuevaTarea(event.target.value);
  };

  const agregarTarea = (event) => {
    if (event.key === "Enter" && nuevaTarea.trim() !== "") {
      const nuevasTareas = [
        ...tareas,
        { tarea: nuevaTarea.trim(), completada: false },
      ];
      setTareas(nuevasTareas);
      setNuevaTarea("");
    }
  };

  const toggleCompletada = (index) => {
    const nuevasTareas = [...tareas];
    nuevasTareas[index].completada = !nuevasTareas[index].completada;
    setTareas(nuevasTareas);
  };

  const eliminarTarea = (index) => {
    const nuevasTareas = tareas.filter((_, i) => i !== index);
    setTareas(nuevasTareas);
  };

  return (
    <div>
      <ul>
        {tareas.map((tarea, index) => (
          <li
            key={index}
            style={{
              textDecoration: tarea.completada ? "line-through" : "none",
            }}
            onClick={() => toggleCompletada(index)}
          >
            {tarea.tarea}
            <button onClick={() => eliminarTarea(index)}>Eliminar</button>
          </li>
        ))}
      </ul>
      <input
        type="text"
        value={nuevaTarea}
        onChange={handleChange}
        onKeyDown={agregarTarea}
        placeholder="Añadir nueva tarea..."
      />
    </div>
  );
}
