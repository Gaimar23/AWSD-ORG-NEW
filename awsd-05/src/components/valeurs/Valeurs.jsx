import React, { useState } from "react";
import "./valeurs.scss";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { useEffect } from "react";
import { RiTeamFill } from "react-icons/ri"; // team
import { FaPeopleArrows } from "react-icons/fa6"; //intégrité
import { FaPeopleGroup } from "react-icons/fa6"; // team
import { FaPeopleRoof } from "react-icons/fa6"; // equality
import { FaPeopleRobbery } from "react-icons/fa6"; // respect
import { FaRunning } from "react-icons/fa"; // Durabilité

const nosValeurs = [
  {
    id: 1,
    image: <FaPeopleArrows className="imageSlide" />,
    title: "Intégrité",
    desc: "Agir avec honnêteté, transparence et éthique dans toutes les activités entreprises",
  },
  {
    id: 2,
    image: <FaRunning className="imageSlide" />,
    title: "Durabilité",
    desc: "Travailler à long terme pour assurer un avenir durable pour la planète et les générations futures",
  },
  {
    id: 3,
    image: <RiTeamFill className="imageSlide" />,
    title: "Collaboration",
    desc: "Travailler en partenariat avec les communautés, les organisations et les gouvernements pour atteindre des objectifs communs en matière de développement durable",
  },
  {
    id: 4,
    image: <FaPeopleRoof className="imageSlide" />,
    title: "Inclusion",
    desc: "Promouvoir l'égalité des chances et la participation active de tous les acteurs, y compris les groupes marginalisés et vulnérables",
  },
  {
    id: 5,
    image: <FaPeopleRobbery className="imageSlide" />,
    title: "Respect",
    desc: "Respecter les cultures, les traditions et les droits de tous les acteurs impliqués dans le développement durable.",
  },
];

const Valeurs = () => {
  const [items, setItems] = useState(nosValeurs);
  const [index, setIndex] = useState(0);
  //
  useEffect(() => {
    const lastIndex = items.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, items]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 3000);
    return () => clearInterval(slider);
  }, [index]);

  //
  return (
    <div className="valeurs">
      <div className="monSlide">
        {items.map((item, itemIndex) => {
          const { id, image, title, desc } = item;
          let position = "nextSlide";
          if (itemIndex === index) {
            position = "activeSlide";
          }
          if (
            itemIndex === index - 1 ||
            (index === 0 && itemIndex === items.length - 1)
          ) {
            position = "lastSlide";
          }
          return (
            <div key={id} className={`${position} article`}>
              {/* <img src={image} alt="" className="imageSlide" /> */}
              <div
                style={{
                  border: "5px solid green",
                  width: "120px",
                  height: "120px",
                  margin: "0 auto",
                  borderRadius: "10px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {image}
              </div>
              <h4 className="theTitle">{title}</h4>
              <p className="description">{desc}</p>
            </div>
          );
        })}

        <button className="prev" onClick={() => setIndex(index - 1)}>
          <FiChevronLeft size={30} />
        </button>
        <button className="next" onClick={() => setIndex(index + 1)}>
          <FiChevronRight size={30} />
        </button>
      </div>
    </div>
  );
};

export default Valeurs;
