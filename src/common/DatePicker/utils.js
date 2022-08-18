import i18next from 'i18next';
import './translate';
export function pad(num, size) {
  let newNum = num.toString();
  while (newNum.length < size) newNum = '0' + newNum;
  return newNum;
}

// У класса new Date() есть какая-то ошибка,
// при которой секунды равняются не нулем, а другим числои
export function setSecondsToZero(date) {
  try {
    const resetDate = date?.setSeconds(0, 0);
    return resetDate;
  } catch (e) {
    return date;
  }
}

export const month = () => {
  return [
    i18next.t('january'),
    i18next.t('february'),
    i18next.t('march'),
    i18next.t('april'),
    i18next.t('may'),
    i18next.t('june'),
    i18next.t('july'),
    i18next.t('august'),
    i18next.t('september'),
    i18next.t('october'),
    i18next.t('november'),
    i18next.t('december'),
  ];
};

const qDays = (n) => {
  const days = ['Q жс', 'Q дс', 'Q сс', 'Q ср', 'Q бс', 'Q жм', 'Q сб'];
  return days[n];
};

export const localQq = {
  localize: {
    day: qDays,
    month,
  },
  formatLong: {
    date: () => 'dd/MM/yyyy',
  },
};
