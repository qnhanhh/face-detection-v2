import { useSetRecoilState } from "recoil";
import { LinkInputState } from "../../states";

const LinkInput = () => {
  const setLinkInput = useSetRecoilState(LinkInputState);

  const onInputChange = (event) => {
    setLinkInput(event.target.value);
  };

  const onButtonSubmit = () => {
    const USER_ID = "quynhanh1806";
    // Your PAT (Personal Access Token) can be found in the portal under Authentification
    const PAT = "160646c697974ada9516e642eb7a0da4";
    const APP_ID = "FaceDetection";
    // Change these to whatever model and image URL you want to use
    const MODEL_ID = "face-detection";
    const IMAGE_URL =
      "https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/03/GettyImages-1092658864_thumb-732x549.jpg";

    ///////////////////////////////////////////////////////////////////////////////////
    // YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
    ///////////////////////////////////////////////////////////////////////////////////

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

    // NOTE: MODEL_VERSION_ID is optional, you can also call prediction with the MODEL_ID only
    // https://api.clarifai.com/v2/models/{YOUR_MODEL_ID}/outputs
    // this will default to the latest version_id

    fetch(
      "https://api.clarifai.com/v2/models/" + MODEL_ID + "/outputs",
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => console.log(result));
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
