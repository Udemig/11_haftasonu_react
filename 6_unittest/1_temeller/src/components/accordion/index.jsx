import { useState } from "react";

const Accordion = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="accordion">
      <div>
        <h3>Unit Test Nedir ? </h3>
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? "Gizle" : "Göster"}
        </button>
      </div>

      {isOpen && (
        <p>
          Birim testi, yazılım programlamasında bir tasarım ve geliştirme
          yöntemidir.
        </p>
      )}
    </div>
  );
};

export default Accordion;
