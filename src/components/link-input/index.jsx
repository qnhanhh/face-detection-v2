import { useSetRecoilState } from "recoil";
import Clarifai from "clarifai";
import { LinkInputState } from "../../states";

// const app = new Clarifai.App({
//   apiKey: "afac976e7a874656ae739e29a89d8ea6",
// });

const LinkInput = () => {
  const setLinkInput = useSetRecoilState(LinkInputState);

  const onInputChange = (event) => {
    setLinkInput(event.target.value);
  };

  const onButtonSubmit = () => {
    // app.models
    //   .predict(
    //     Clarifai.FACE_DETECT_MODEL,
    //     "https://i0.wp.com/post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/03/GettyImages-1092658864_hero-1024x575.jpg?w=1155&h=1528"
    //   )
    //   .then((response) => console.log(response));
  };

  return (
    <div className="flex w-full flex-col items-center gap-4">
      <p className="text-lg">Paste your image link here</p>
      <div className="w-1/2 rounded-md bg-violet-300/50 p-6 shadow-xl">
        <input
          onChange={(e) => onInputChange(e)}
          type="text"
          className="w-3/4 p-2 text-xl focus:outline-0"
        />
        <button
          onClick={onButtonSubmit}
          className="w-1/4 bg-indigo-500 p-2 text-xl text-white"
        >
          Detect
        </button>
      </div>
    </div>
  );
};

export default LinkInput;
