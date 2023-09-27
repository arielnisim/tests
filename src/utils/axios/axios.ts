import axios from "axios";

// type reqType = Record<string, unknown>;

export const axiosGet = async (path: string) => {
  try {
    const { data } = await axios.get(path);
    return data;
  } catch (error) {
    return Promise.reject(error);
  }
};

// export const axiosPost = async (
//   path: string,
//   body: reqType,
//   headers: reqType
// ) => {
//   try {
//     const data = await axios.post(path, body, headers);
//     return data;
//   } catch (error) {
//     return error;
//   }
// };

// export const axiosPut = async (
//   path: string,
//   body: reqType,
//   headers: reqType
// ) => {
//   try {
//     const data = await axios.put(path, body, headers);
//     return data;
//   } catch (error) {
//     return error;
//   }
// };

// export const axiosDelete = async (path: string, headers: reqType) => {
//   try {
//     await axios.delete(path, headers);
//   } catch (error) {
//     return error;
//   }
// };
