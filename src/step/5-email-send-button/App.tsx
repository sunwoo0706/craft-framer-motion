import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Spinner } from "./Spinner";
import "./styles.css";

type ButtonState = {
  idle: string;
  loading: JSX.Element;
  success: string;
};

const buttonCopy: ButtonState = {
  idle: "Send me a login link",
  loading: <Spinner size={16} color="rgba(255, 255, 255, 0.65)" />,
  success: "Login link sent!",
};

export default function SmoothButton() {
  const [buttonState, setButtonState] = useState<keyof ButtonState>("idle");

  return (
    <div className="outer-wrapper">
      <button
        className="blue-button"
        disabled={buttonState !== "idle"}
        onClick={() => {
          // This code is just a placeholder
          setButtonState("loading");

          setTimeout(() => {
            setButtonState("success");
          }, 1750);

          setTimeout(() => {
            setButtonState("idle");
          }, 3500);
        }}
      >
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.span
            transition={{ type: "spring", duration: 0.3, bounce: 0 }}
            key={buttonState}
            initial={{ top: "100%", opacity: 0 }}
            animate={{ top: "0%", opacity: 1 }}
            exit={{ top: "-100%", opacity: 0 }}
          >
            {buttonCopy[buttonState]}
          </motion.span>
        </AnimatePresence>
      </button>
    </div>
  );
}
