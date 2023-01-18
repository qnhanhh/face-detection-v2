import { useRecoilValue } from "recoil";
import { BoundingBoxState, LinkInputState } from "../../states";
import "./styles.css";

const FaceRecognition = () => {
  const imgUrl = useRecoilValue(LinkInputState);
  const boundingBox = useRecoilValue(BoundingBoxState);

  return (
    <div className="m-4 w-2/5 relative">
      <img id="inputImage" src={imgUrl} alt="" />
      <div
        className="bounding-box"
        style={{
          top: boundingBox.topRow,
          right: boundingBox.rightCol,
          bottom: boundingBox.bottomRow,
          left: boundingBox.leftCol,
        }}
      ></div>
    </div>
  );
};

export default FaceRecognition;
