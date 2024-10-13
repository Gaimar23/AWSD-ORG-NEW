import React, { useEffect, useState } from "react";
import "./Pagination.scss";

const Pagination = ({ totalPots, postsPerPage, setCurrentPage }) => {
  let pages = [];
  for (let i = 1; i <= Math.ceil(totalPots / postsPerPage); i++) {
    pages.push(i);
  }

  const [numbers, setNumbers] = useState([]);
  const [active, setActive] = useState(false);
  const [activePage, setActivePage] = useState(0);

  function initialization() {
    setNumbers(document.querySelectorAll(".number"));
    document.querySelectorAll(".number")[0].classList.add("active");
    setActive(document.querySelector(".number.active"));
    setActivePage(parseInt(document.querySelector(".number.active").innerHTML));
    isVisible(
      document.querySelectorAll(".number"),
      document.querySelector(".number.active"),
      parseInt(document.querySelector(".number.active").innerHTML)
    );
    const theActivePage = parseInt(
      document.querySelector(".number.active").innerHTML
    );
    const arrayPages = document.querySelectorAll(".number");
    if (arrayPages.length > 4) {
      arrayPages[0].style.display = "block";
      arrayPages[theActivePage].style.display = "block";
      arrayPages[theActivePage + 1].style.display = "block";
      arrayPages[theActivePage + 2].style.display = "block";

      for (let i = 0; i < arrayPages.length; i++) {
        if (
          i != 0 &&
          i != theActivePage &&
          i != theActivePage + 1 &&
          i != theActivePage + 2
        ) {
          arrayPages[i].style.display = "none";
        }
      }
    }
  }

  const reposition = (isVisible) => {
    const theActivePage = parseInt(
      document.querySelector(".number.active").innerHTML
    );
    isVisible(numbers, active, theActivePage);
  };

  useEffect(() => {
    setTimeout(() => {
      initialization();
    }, 2500);
  }, []);

  function unselectPages(numbers) {
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i].classList.contains("active")) {
        numbers[i].classList.remove("active");
      }
    }
  }

  function isVisible(numbers, active, theActivePage) {
    if (pages.length > 4) {
      if (theActivePage == pages[0]) {
        numbers[0].style.display = "block";
        numbers[theActivePage].style.display = "block";
        numbers[theActivePage + 1].style.display = "block";
        numbers[theActivePage + 2].style.display = "block";
        for (let i = 0; i < pages.length; i++) {
          if (
            i != 0 &&
            i != theActivePage &&
            i != theActivePage + 1 &&
            i != theActivePage + 2
          ) {
            numbers[i].style.display = "none";
          }
        }
      } else if (theActivePage == pages[0] + 1) {
        numbers[0].style.display = "block";
        numbers[theActivePage - 1].style.display = "block";
        numbers[theActivePage].style.display = "block";
        numbers[theActivePage + 1].style.display = "block";
        for (let i = 0; i < pages.length; i++) {
          if (
            i != 0 &&
            i != theActivePage - 1 &&
            i != theActivePage &&
            i != theActivePage + 1
          ) {
            numbers[i].style.display = "none";
          }
        }
      } else if (theActivePage == pages[pages.length - 1]) {
        numbers[theActivePage - 1].style.display = "block";
        numbers[theActivePage - 2].style.display = "block";
        numbers[theActivePage - 3].style.display = "block";
        numbers[theActivePage - 4].style.display = "block";

        for (let i = 0; i < pages.length; i++) {
          if (
            i != theActivePage - 1 &&
            i != theActivePage - 2 &&
            i != theActivePage - 3 &&
            i != theActivePage - 4
          ) {
            numbers[i].style.display = "none";
          }
        }
      } else if (theActivePage == pages[pages.length - 2]) {
        numbers[theActivePage].style.display = "block";
        numbers[theActivePage - 1].style.display = "block";
        numbers[theActivePage - 2].style.display = "block";
        numbers[theActivePage - 3].style.display = "block";

        for (let i = 0; i < pages.length; i++) {
          if (
            i != theActivePage &&
            i != theActivePage - 1 &&
            i != theActivePage - 2 &&
            i != theActivePage - 3
          ) {
            numbers[i].style.display = "none";
          }
        }
      } else {
        numbers[theActivePage - 2].style.display = "block";
        numbers[theActivePage - 1].style.display = "block";
        numbers[theActivePage].style.display = "block";
        numbers[theActivePage + 1].style.display = "block";

        for (let i = 0; i < pages.length; i++) {
          if (
            i != theActivePage - 2 &&
            i != theActivePage - 1 &&
            i != theActivePage &&
            i != theActivePage + 1
          ) {
            numbers[i].style.display = "none";
          }
        }
      }
    }
  }

  function isVisibleBack(numbers, active, theActivePage) {
    if (pages.length > 4) {
      if (theActivePage == pages[0]) {
        numbers[0].style.display = "block";
        numbers[theActivePage].style.display = "block";
        numbers[theActivePage + 1].style.display = "block";
        numbers[theActivePage + 2].style.display = "block";
        for (let i = 0; i < pages.length; i++) {
          if (
            i != 0 &&
            i != theActivePage &&
            i != theActivePage + 1 &&
            i != theActivePage + 2
          ) {
            numbers[i].style.display = "none";
          }
        }
      } else if (theActivePage == pages[0] + 1) {
        numbers[0].style.display = "block";
        numbers[theActivePage - 1].style.display = "block";
        numbers[theActivePage].style.display = "block";
        numbers[theActivePage + 1].style.display = "block";
        for (let i = 0; i < pages.length; i++) {
          if (
            i != 0 &&
            i != theActivePage - 1 &&
            i != theActivePage &&
            i != theActivePage + 1
          ) {
            numbers[i].style.display = "none";
          }
        }
      } else if (theActivePage == pages[pages.length - 1]) {
        numbers[theActivePage - 1].style.display = "block";
        numbers[theActivePage - 2].style.display = "block";
        numbers[theActivePage - 3].style.display = "block";
        numbers[theActivePage - 4].style.display = "block";

        for (let i = 0; i < pages.length; i++) {
          if (
            i != theActivePage - 1 &&
            i != theActivePage - 2 &&
            i != theActivePage - 3 &&
            i != theActivePage - 4
          ) {
            numbers[i].style.display = "none";
          }
        }
      } else if (theActivePage == pages[pages.length - 2]) {
        numbers[theActivePage].style.display = "block";
        numbers[theActivePage - 1].style.display = "block";
        numbers[theActivePage - 2].style.display = "block";
        numbers[theActivePage - 3].style.display = "block";

        for (let i = 0; i < pages.length; i++) {
          if (
            i != theActivePage &&
            i != theActivePage - 1 &&
            i != theActivePage - 2 &&
            i != theActivePage - 3
          ) {
            numbers[i].style.display = "none";
          }
        }
      } else {
        numbers[theActivePage - 2].style.display = "block";
        numbers[theActivePage - 1].style.display = "block";
        numbers[theActivePage].style.display = "block";
        numbers[theActivePage + 1].style.display = "block";

        for (let i = 0; i < pages.length; i++) {
          if (
            i != theActivePage - 2 &&
            i != theActivePage - 1 &&
            i != theActivePage &&
            i != theActivePage + 1
          ) {
            numbers[i].style.display = "none";
          }
        }
      }
    }
  }

  function thePage(number, index) {
    setActive(document.querySelector(".number.active"));
    setActivePage(parseInt(document.querySelector(".number.active").innerHTML));
    const theActivePage = parseInt(
      document.querySelector(".number.active").innerHTML
    );
    setCurrentPage(number);
    unselectPages(numbers);
    numbers[index].classList.add("active");
    isVisible(numbers, active, theActivePage);
    reposition(isVisible);
  }

  function nextPage() {
    setActive(document.querySelector(".number.active"));
    setActivePage(parseInt(document.querySelector(".number.active").innerHTML));
    const theActivePage = parseInt(
      document.querySelector(".number.active").innerHTML
    );
    if (
      parseInt(document.querySelector(".number.active").innerHTML) <
      pages[pages.length - 1]
    ) {
      let number = parseInt(document.querySelector(".number.active").innerHTML);
      unselectPages(numbers);
      setCurrentPage(number + 1);
      numbers[number].classList.add("active");
      isVisible(numbers, active, theActivePage);
    }
    reposition(isVisible);
  }

  function prevPage() {
    setActive(document.querySelector(".number.active"));
    setActivePage(parseInt(document.querySelector(".number.active").innerHTML));
    const theActivePage = parseInt(
      document.querySelector(".number.active").innerHTML
    );
    if (
      parseInt(document.querySelector(".number.active").innerHTML) > pages[0]
    ) {
      let number = parseInt(document.querySelector(".number.active").innerHTML);
      unselectPages(numbers);
      setCurrentPage(number - 1);
      numbers[number - 2].classList.add("active");
      isVisible(numbers, active, theActivePage);
    }
    reposition(isVisibleBack);
  }

  return (
    <div className="pagination">
      <div className="page-count">
        {pages.map((number, index) => {
          return (
            <span
              className="number"
              key={index}
              onClick={() => thePage(number, index)}
            >
              {number}
            </span>
          );
        })}
        <span className="prev" onClick={prevPage}>
          {"<<"}
        </span>
        <span className="next" onClick={nextPage}>
          {">>"}
        </span>
      </div>
    </div>
  );
};

export default Pagination;
