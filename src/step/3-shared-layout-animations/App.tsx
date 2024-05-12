import { motion } from "framer-motion";
import { useState } from "react";
import "./styles.css";

export default function App() {
  const [showSecond, setShowSecond] = useState<boolean>(false);

  return (
    <div className="wrapper">
      <motion.button
        layout
        className="button"
        onClick={() => setShowSecond(s => !s)}
      >
        Animate
      </motion.button>
      {showSecond ? (
        <motion.div layoutId="hey" className="second-element" />
      ) : (
        <motion.div layoutId="hey" className="element" />
      )}
    </div>
  );
}
