const axios = require('axios').default;

interface friend {
  userId: number,
  firstName: string,
  lastName: string,
  friendStatus?: number,
}

async function friendSearchApi (param: string, uid: number) {
  //axios request that gets the results of the searched name. 
  const data: friend[] = await axios.get(`${import.meta.env.VITE_SERVER}/byName?${param}`)
    .then((response: any) => {
      return response.data;
    })
    .catch((err: Error) => {
      console.log(err);
      return [{
        userId: 0,
        firstName: "No",
        lastName: "results :("
      }];
    })

    if (data == null) {
      return null;
    }

    //this promise hell maps the original axios request by adding the userid of the searched person.
    const getFriendStatus = await Promise.all(data.map(async (friend: friend) => {
      return await axios.get(`${import.meta.env.VITE_SERVER}/friendstatus?User1=${uid}&User2=${friend.userId}`)
        .then((fs: any) => {
          const dupFriend = {
            userId: friend.userId,
            firstName: friend.firstName,
            lastName: friend.lastName,
            friendStatus: fs.data.friendStatus,
          } satisfies friend;

          return dupFriend;
        })
        .catch((err: Error) => {
          console.log(err);
        })
    }));

    return getFriendStatus;
}

export default friendSearchApi;