import { useRecoilState } from "recoil";
import { LinkInputState } from "../../states";

const LinkInput = () => {
  const [input, setLinkInput] = useRecoilState(LinkInputState);

  const onInputChange = (event) => {
    setLinkInput(event.target.value);
  };

  const onButtonSubmit = () => {
    const USER_ID = "quynhanh1806";
    const PAT = "160646c697974ada9516e642eb7a0da4";
    const APP_ID = "FaceDetection";
    const MODEL_ID = "face-detection";
    const IMAGE_URL = input;

    const raw = JSON.stringify({
      user_app_id: {
        user_id: USER_ID,
        app_id: APP_ID,
      },
      inputs: [
        {
          data: {
            image: {
              url: IMAGE_URL,
            },
          },
        },
      ],
    });

    const requestOptions = {
      method: "POST",
      headers: {
        Accept: "application/json",
        Authorization: "Key " + PAT,
      },
      body: raw,
    };

    fetch(
      "https://api.clarifai.com/v2/models/" + MODEL_ID + "/outputs",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => console.log(result.outputs[0].data.regions[0].region_info.bounding_box));
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
