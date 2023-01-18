import FaceRecognition from "../face-recognition";
import LinkInput from "../link-input";
import Rank from "../rank";

const HomeScreen = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <Rank />
      <LinkInput />
      <FaceRecognition />
    </div>
  );
};

export default HomeScreen;
