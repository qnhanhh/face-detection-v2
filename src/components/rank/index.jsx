import { useRecoilValue } from "recoil";
import { UserState } from "../../states";

const Rank = () => {
  const currentUser = useRecoilValue(UserState);
  const { username, entries } = currentUser;

  return (
    <div className="text-white w-full">
      <p className="text-xl">{`${username}, your current entry count is ...`}</p>
      <p className="text-5xl mb-4">{`#${entries}`}</p>
    </div>
  );
};

export default Rank;
