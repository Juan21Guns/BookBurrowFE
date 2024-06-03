const axios = require('axios').default;

interface friend {
  userId: number,
  firstName: string,
  lastName: string,
  friendStatus?: number,
}

async function friendSearchApi (param: string, uid: number) {
  //axios request that gets the results of the searched name. 
  const data = await axios.get(`${import.meta.env.VITE_SERVER}/byName?${param}`)
    .then((response: any) => {
      return response.data;
    })
    .catch((err: Error) => {
      console.log(err);
      return [{
        userId: 0,
        firstName: "No",
        lastName: "results :(",
        friendStatus: -1,
      }];
    });

    if (data == null) {
      return null;
    }

    const x: friend[] = [];

    await data.forEach(async (friend: friend) => {
      if (friend != null) {
        return await axios.get(`${import.meta.env.VITE_SERVER}/friendstatus?User1=${uid}&User2=${friend.userId}`)
        .then((fs: any) => {
          const dupFriend = {
            userId: friend.userId,
            firstName: friend.firstName,
            lastName: friend.lastName,
            friendStatus: fs.data.friendStatus,
          } satisfies friend;

          x.push(dupFriend);
        })
        .catch((err: Error) => {
          console.log(err);
        })
      }
    });

    return x;
}

export default friendSearchApi;