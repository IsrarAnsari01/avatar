
import { Environment, useTexture } from "@react-three/drei";
import { Avatar } from "./Avatar";
import { useThree } from "@react-three/fiber";
import { TEXTURE_PATH } from "../constant";

const Experience = ({ text, speak, setSpeak }) => {
  const texture = useTexture(TEXTURE_PATH);
  const viewport = useThree((state) => state.viewport);

  return (
    <>
      {/* <OrbitControls /> */}{" "}
      {/** OrbitControls is Allows the user to control the camera with the mouse or touch */}
      <Avatar position={[0, -5, 5]} scale={3} text={text} speak={speak} setSpeak={setSpeak} />{" "}
      {/* Position [] take three values first is x, second is y, third is z. This is use to change the view of avatar and scale is use to handle avatar zoom */}
      <Environment preset="sunset" />{" "}
      {/*Adds realistic lighting & reflections. */}
      <mesh>
        <planeGeometry args={[viewport.width, viewport.height]} />
        <meshBasicMaterial map={texture} />
      </mesh>
    </>
  );
};

export default Experience;
