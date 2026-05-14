import { useMemo, useState } from "react";
export type Priority = "baja" | "media" | "alta";

export function useItemForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState<Priority>("media");
  const [submitted, setSubmitted] = useState(false);
  const titleError =
    title.trim().length < 3
      ? "El título debe tener al menos 3 caracteres."
      : "";
  const descriptionError =
    description.trim().length < 8
      ? "La descripción debe tener al menos 8 caracteres."
      : "";
  const isValid = useMemo(() => {
    return !titleError && !descriptionError;
  }, [titleError, descriptionError]);
  function reset() {
    setTitle("");
    setDescription("");
    setPriority("media");
    setSubmitted(false);
  }
  return {
    title,
    description,
    priority,
    submitted,
    titleError,
    descriptionError,
    isValid,
    setTitle,
    setDescription,
    setPriority,
    setSubmitted,
    reset,
  };
}
