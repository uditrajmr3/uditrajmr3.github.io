import { Html, useProgress } from "@react-three/drei";

const Loader = () => {
  const { progess } = useProgress;

  return (
    <html>
      <span className="canvas-load"></span>
      <p
        style={{
          fontSize: 14,
          color: "#f1f1f1",
          fontWeight: 800,
          marginTop: 40,
        }}
      >
        {progess.toFixed(2)}%
      </p>
    </html>
  );
};

export default Loader;
