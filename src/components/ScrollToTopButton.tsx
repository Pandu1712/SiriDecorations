import  { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggle = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", toggle);
    return () => window.removeEventListener("scroll", toggle);
  }, []);

  return (
    visible && (
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-20 right-6 bg-pink-500 text-white p-2 rounded-full w-9 h-9 shadow-lg hover:bg-purple-600"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    )
  );
};

export default ScrollToTopButton;
