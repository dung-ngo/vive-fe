import moment from 'moment';
import { useEffect, useState } from 'react';

const countDownDate = moment().endOf('isoWeek').toDate();

const useCountDown = (tilDate: Date = countDownDate) => {
  const [times, setTimes] = useState<string>('0,0,0,0');

  useEffect(() => {
    const timeout = setInterval(function () {
      var now = new Date().getTime();
      var distance = tilDate.getTime() - now;

      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      );
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimes(`${days},${hours},${minutes},${seconds}`);

      // If the count down is over, write some text
      if (distance < 0) {
        clearInterval(timeout);
        setTimes('0,0,0,0');
      }
    }, 1000);

    return () => {
      clearInterval(timeout);
    };
  }, [tilDate]);

  return times.split(',');
};

export default useCountDown;
