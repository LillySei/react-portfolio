import "./AnimatedLetters.scss";

// eslint-disable-next-line react/prop-types
const AnimatedLetters = ({ letterClass, strArray, idx }) => {
  return (
    // eslint-disable-next-line react/jsx-no-comment-textnodes
    <span>
      {strArray.map((char, i) => (
        <span key={char + i} className={`${letterClass} _${i + idx}`}>
          {char}
        </span>
      ))}
    </span>
  );
};

export default AnimatedLetters;
