import { useEffect, useState } from "react";

// Types and deletes the given words in a loop.
export default function useTyping(words, speed = 90, pause = 1400) {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    setText("");
    setIndex(0);
    setDeleting(false);
  }, [words]);

  useEffect(() => {
    const word = words[index % words.length];
    let delay = deleting ? speed / 2 : speed;
    if (!deleting && text === word) delay = pause;

    const timer = setTimeout(() => {
      if (!deleting && text === word) {
        setDeleting(true);
      } else if (deleting && text === "") {
        setDeleting(false);
        setIndex((i) => i + 1);
      } else {
        setText(
          deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1)
        );
      }
    }, delay);
    return () => clearTimeout(timer);
  }, [text, deleting, index, words, speed, pause]);

  return text;
}
