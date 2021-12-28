import seat from "@/assets/images/seat.png";

function formatDay(timestamp) {
  const nowTime = Date.now();
  const interval = Math.floor((nowTime - timestamp * 1000) / 86400000);
  switch (true) {
    case interval < 30:
      return `${interval} 天前`;
    case interval < 60:
      return `1 个月前`;
    case interval < 90:
      return `2 个月前`;
    case interval < 120:
      return `3 个月前`;
    case interval < 150:
      return `4 个月前`;
    case interval < 180:
      return `5 个月前`;
    case interval < 210:
      return `6 个月前`;
    case interval < 240:
      return `7 个月前`;
    case interval < 270:
      return `8 个月前`;
    case interval < 300:
      return `9 个月前`;
    case interval < 330:
      return `10 个月前`;
    case interval < 360:
      return `11 个月前`;
    case interval < 720:
      return `1 年前`;
    default:
      return "几年前";
  }
}

function formatTime(duration) {
  const time = Math.ceil(duration);
  const minute = Math.floor(time / 60);
  const second = time - minute * 60;

  return `${minute}:${second}`;
}

function formatHeat(playCount) {
  let heat = "";
  let count = Math.abs(playCount);
  switch (true) {
    case playCount < 10000:
      heat = `${playCount} `;
      break;
    case playCount < 100000:
      while (count >= 100) {
        count = count / 100;
      }

      heat = `${count.toFixed(1)} 万`;
      break;
    case playCount < 1000000:
      while (count >= 100) {
        count = count / 100;
      }

      heat = `${count.toFixed(1)} 万`;
      break;
    case playCount < 10000000:
      while (count >= 10000) {
        count = count / 100;
      }

      heat = `${parseInt(count)} 万`;
      break;
    case playCount < 100000000:
      while (count >= 10000) {
        count = count / 10;
      }

      heat = `${parseInt(count)} 万`;
      break;
    case playCount >= 100000000:
      while (count >= 10000) {
        count = count / 10000;
      }

      heat = `${count.toFixed(1)} 亿`;
      break;
    default:
      break;
  }
  return heat;
}

function formatImage(url) {
  return url ? url : seat;
}

function formatNumber(number) {
  let result = "";
  let counter = 0;
  number = (number || 0).toString();
  for (var i = number.length - 1; i >= 0; i--) {
    counter++;
    result = number.charAt(i) + result;
    // eslint-disable-next-line eqeqeq
    if (!(counter % 3) && i != 0) {
      result = "," + result;
    }
  }
  return result;
}

export { formatDay, formatTime, formatHeat, formatImage, formatNumber };
