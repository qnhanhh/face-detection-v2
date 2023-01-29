import { useRecoilState, useSetRecoilState } from "recoil";
import { BoundingBoxState, LinkInputState, UserState } from "../../states";

const LinkInput = () => {
  const [currentUser, setCurrentUser] = useRecoilState(UserState);
  const setBoundingBox = useSetRecoilState(BoundingBoxState);
  const [input, setLinkInput] = useRecoilState(LinkInputState);

  const onInputChange = (event) => {
    setLinkInput(event.target.value);
    setBoundingBox({});
  };

  const calculateFaceLocation = (data) => {
    const clarifaiFace =
      data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById("inputImage");
    const width = Number(image.width);
    const height = Number(image.height);
    const leftCol = clarifaiFace.left_col * width;
    const topRow = clarifaiFace.top_row * height;
    const rightCol = width - clarifaiFace.right_col * width;
    const bottomRow = height - clarifaiFace.bottom_row * height;
    setBoundingBox({
      leftCol,
      topRow,
      rightCol,
      bottomRow,
    });
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
      .then((result) => {
        if (result) {
          fetch("http://localhost:3000/image", {
            method: "put",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              id: currentUser.id,
            }),
          })
            .then((res) => res.json())
            .then((count) =>
              setCurrentUser({ ...currentUser, entries: count })
            );
        }
        calculateFaceLocation(result);
      })
      .catch((err) => console.error(err));
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
