const axios = require('axios').default;
import { useSelector } from "react-redux";
import { IRootState } from "../../redux/IRootState";

async function friendStatus () {
    const todos = useSelector((state: IRootState) => state.friend.friends);

    // const data = await axios.get(`${import.meta.env.VITE_SERVER}/byName?${param}`)
    // .then((response: any) => {
    //   console.log(response);
    //   return response.data;
    // })
    // .catch((err: Error) => {
    //   console.log(err);
    //   return [{
    //     userId: 0,
    //     firstName: "No",
    //     lastName: "results :("
    //   }];
    // })
    // .finally()

    // if (data == null) {
    //   return null;
    // }

    // return data;
}

export default friendStatus;