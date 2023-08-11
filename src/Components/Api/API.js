import Axios from "./Axios";

async function getAllSnacks() {
  try {
    let result = await Axios.get("/snacks");
    return result;
  } catch (e) {
    return e;
  }
}
export { getAllSnacks };
