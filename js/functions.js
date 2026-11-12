// 1. Проверка длины строки
function checkStringLength(string, maxLength) {
  return string.length <= maxLength;
}

// 2. Проверка на палиндром
function isPalindrome(string) {
  const normalizedString = string.replaceAll(' ', '').toLowerCase();
  let reversedString = '';

  for (let i = normalizedString.length - 1; i >= 0; i--) {
    reversedString += normalizedString[i];
  }

  return normalizedString === reversedString;
}

// 3. Дополнительная функция: извлечение цифр из строки
function getNumber(string) {
  const digits = String(string).replace(/\D/g, '');
  return digits === '' ? NaN : Number(digits);
}

// 4. Перевод времени в минуты
function getTimeInMinutes(time) {
  const [hours, minutes] = time.split(':').map(Number);
  return hours * 60 + minutes;
}

// 5. Проверка, помещается ли встреча в рабочее время
function isMeetingFits(startWork, endWork, startMeeting, meetingDuration) {
  const startWorkMinutes = getTimeInMinutes(startWork);
  const endWorkMinutes = getTimeInMinutes(endWork);
  const startMeetingMinutes = getTimeInMinutes(startMeeting);
  const endMeetingMinutes = startMeetingMinutes + meetingDuration;

  return startMeetingMinutes >= startWorkMinutes &&
    endMeetingMinutes <= endWorkMinutes;
}