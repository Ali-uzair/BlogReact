import getData from "./Api";
export const getPosts = async () => {
  try {
    let res = await getData(`${process.env.REACT_APP_API}`);
    return res.json();
  } catch (err) {
    alert('Server did not responed');
  }
};
export const getPost = async (id) => {
  try {
  let res = await getData(`${process.env.REACT_APP_API}/${id}`);
  return res.json();
} catch (err) {
  alert('Server did not responed');
}
};
