import React from "react";
import { useSpring, animated } from "react-spring";
import avaimg from "../images/avatar-1.jpg";
import { Box, Image } from "grommet";

const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 20,
  (x - window.innerWidth / 2) / 20,
  1.1
];
const trans = (x, y, s) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

function ImageCard() {
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 4, tension: 100, friction: 40 }
  }));
  return (
    <animated.div
      onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      style={{ transform: props.xys.interpolate(trans) }}
    >
      <Box direction="row" justify="center">
        <Box height="medium" width="medium" elevation="large" round="large">
          <Image fit="cover" src={avaimg} className="avatar-img" />
        </Box>
      </Box>
    </animated.div>
  );
}

export default ImageCard;
