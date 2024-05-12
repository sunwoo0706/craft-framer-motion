import { motion } from "framer-motion";
import { useState } from "react";
import "./style.css";

export default function App() {
  const [animate, setAnimate] = useState<boolean>(false);

  return (
    <div className="wrapper">
      <button className="button" onClick={() => setAnimate(!animate)}>
        Animate
      </button>
      <motion.div
        animate={{ scale: animate ? 1.5 : 1, y: animate ? -40 : 0 }}
        className="element"
      />
    </div>
  );
}
