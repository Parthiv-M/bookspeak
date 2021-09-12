export const CalcDiff = (date) => {
  const finishDate = new Date(date.date);
  const currentTime = new Date();
  const timeDiff = currentTime.getTime() - finishDate.getTime();
  const numDays = timeDiff / (1000 * 60 * 60 * 24);

  //   Check if the number of days is greater than 1
  if (numDays > 1) {
    //   Check if the number of days is less than 32
    if (numDays < 32) {
      return <p className="text-gray-500 font-bold">{Math.floor(numDays)} days ago</p>;
    }
    //   Check if the number of days is greater than 1
    else {
      //   Check if the number of weeks is less than 52
      if (timeDiff / (24 * 3600 * 1000 * 7) <= 52) {
        return <p className="text-gray-500 font-bold">{Math.floor(timeDiff / (24 * 3600 * 1000 * 7))} weeks ago</p>;
      }
      //   If weeks is more than 52
      else {
        //   Check if the number of years is equal to 1
        if (
          Math.floor(currentTime.getFullYear() - finishDate.getFullYear()) ==
          1
        ) {
          return <p className="text-gray-500 font-bold">1 year ago</p>;
        }
        //   Check if the number of years is greater than 1
        else {
          return <p className="text-gray-500 font-bold">{Math.floor(currentTime.getFullYear() - finishDate.getFullYear())} years ago</p>;
        }
      }
    }
  } else if (numDays == 1) {
    return <p className="text-gray-500 font-bold">1 day ago</p>;
  } else {
    return <p className="text-gray-500 font-bold">{numDays * 24} hours ago</p>;
  }
};