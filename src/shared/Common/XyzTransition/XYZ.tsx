import "@animxyz/core";
import { XyzTransition, XyzTransitionGroup } from "@animxyz/react";
import { useState } from "react";
import styles from "./XYZ.module.css";
const XYZ = () => {
  const [buttonToggled, setButtonToggled] = useState(true);

  const [numElements, setNumElements] = useState(3);

  function addElement() {
    setNumElements((oldNumElements) => oldNumElements + 1);
  }

  function removeElement() {
    setNumElements((oldNumElements) => {
      if (oldNumElements > 0) {
        return oldNumElements - 1;
      }
      return oldNumElements;
    });
  }

  return (
    <div className="App">
      <div className={styles.examplewrap}>
        <XyzTransition appear xyz="fade rotate-right ease-out-back">
          {buttonToggled && <div className={styles.square} />}
        </XyzTransition>
        <button
          className={styles.examplebutton}
          onClick={() => setButtonToggled(!buttonToggled)}
        >
          Click to toggle
        </button>
      </div>

      <div className={styles.examplewrap}>
        <XyzTransitionGroup
          appear
          className={styles.examplegrid}
          xyz="fade small out-down out-rotate-right appear-stagger"
        >
          {[...Array(numElements)].map((_, index) => (
            <div className={styles.square} key={index} />
          ))}
        </XyzTransitionGroup>
        <div className={styles.flexrow}>
          <button className={styles.examplebutton} onClick={addElement}>
            Add Element
          </button>
          <button className={styles.examplebutton} onClick={removeElement}>
            Remove Element
          </button>
        </div>
      </div>
    </div>
  );
};
export default XYZ;
