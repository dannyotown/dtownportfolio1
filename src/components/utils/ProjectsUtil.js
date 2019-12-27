import axios from "axios";

const fetchGitHub = async () => {
  const getData = await axios.get(
    "https://api.github.com/users/dannyotown/repos"
  );
  return getData;
};
export default fetchGitHub;
