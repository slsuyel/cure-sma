import { useState } from "react";

const LikeBtn = () => {
  const [pre, setPre] = useState(false);

  return (
    <div onClick={() => setPre(!pre)}>
      {pre ? (
        <span
          className="like-btn text-center animated infinite bounceIn slower"
          style={{ paddingTop: 65 }}
        >
          Liked Us!
        </span>
      ) : (
        <span className="like-btn text-center animated infinite bounceIn slower is-active"></span>
      )}
    </div>
  );
};

export default LikeBtn;
