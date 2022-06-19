import { AnimatePresence, motion } from "framer-motion";
import React, { ReactNode, useEffect, useState } from "react";
import styled from "styled-components";
const MyCustomComponent = styled(motion.div)`
  width: 2rem;
  background-color: tomato;
`;
const List = styled.div`
    display: flex;
    gap: 10px;
    flex-direction: column;
`
const TestExit = () => {
  const [test, setTest] = useState([1, 2, 3, 4, 5, 6]);
  useEffect(() => {
    setTimeout(() => {
        setTest(value => {
            console.log(value.filter( (_,i) => i!=3));
            return value.filter( (_,i) => i!=3)
        });
    },1000);
  }, []);
  return (
    <List>
    <AnimatePresence>
      {test.map((el, i) => {
        return (
          <MyCustomComponent
            key={el}
            initial={true}
            animate={{ opacity: 1}}
            exit={{ opacity: 0, width: '0px', height:'0px',margin: '-5px', padding:'0px', fontSize: '0' }}
            transition={{ duration: 1 }}
          >
            {el}
          </MyCustomComponent>
        );
      })}
    </AnimatePresence>
    </List>
  );
};

export default TestExit;
