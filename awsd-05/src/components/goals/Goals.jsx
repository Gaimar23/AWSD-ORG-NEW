import React, { useEffect, useState } from "react";
import "./goals.scss";
import { FaPeopleGroup } from "react-icons/fa6"; // team
import { GoGoal } from "react-icons/go";
import { MdOutlineHardware } from "react-icons/md";
import { MdEmojiPeople } from "react-icons/md";
import { TbEyeSearch } from "react-icons/tb";
import { AiOutlineAreaChart } from "react-icons/ai";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

const ourGoals = [
  {
    id: 1,
    image: <AiOutlineAreaChart className="imageSlide" />,
    title: "Global",
    desc: "Contribuer à la réalisation des objectifs de développement durable",
  },

  {
    id: 2,
    image: <GoGoal className="imageSlide" />,
    title: "Spécifique 1",
    desc: "Contribuer à la réalisation des objectifs de développement durable",
  },
  {
    id: 3,
    image: <MdEmojiPeople className="imageSlide" />,
    // title: "Spécifique 2",
    title: "Sensibilisation",
    desc: "Sensibiliser les communautés et les décideurs aux enjeux environnementaux, sociaux et économiques liés au développement durable",
  },
  {
    id: 4,
    image: <MdOutlineHardware className="imageSlide" />,
    title: "Renforcement",
    desc: "Renforcer les capacités des acteurs locaux pour qu'ils puissent jouer un rôle actif dans la promotion du développement durable",
  },
  {
    id: 5,
    image: <FaPeopleGroup className="imageSlide" />,
    title: "Facilitation",
    // title: "Spécifique 4",
    desc: "Faciliter la collaboration entre les différents acteurs impliqués dans le développement durable, notamment les gouvernements, les organisations de la société civile et les entreprises",
  },
  {
    id: 6,
    image: <TbEyeSearch className="imageSlide" />,
    title: "Recherche",
    // title: "Spécifique 5",
    desc: "Rechercher des solutions innovantes et créatives pour résoudre les défis environnementaux, sociaux et économiques liés au développement durable.",
  },
];

const Goals = () => {
  const [items, setItems] = useState(ourGoals);
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

  return (
    <div className="goals">
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

export default Goals;
