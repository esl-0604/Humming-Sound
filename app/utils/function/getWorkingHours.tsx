export function getWorkingHours(workingHours: string[]): string[] {
  const result: string[] = [];

  if (workingHours.length === 0) {
    return result;
  }

  let startHour = workingHours[0].split(":")[0];
  let endHour = workingHours[0].split(":")[0];

  for (let i = 1; i < workingHours.length; i++) {
    const currentHour = workingHours[i].split(":")[0];

    if (parseInt(currentHour) - parseInt(endHour) === 1) {
      endHour = currentHour;
    } else {
      result.push(`${startHour}:00 ~ ${parseInt(endHour) + 1}:00`);
      startHour = currentHour;
      endHour = currentHour;
    }
  }

  result.push(`${startHour}:00 ~ ${parseInt(endHour) + 1}:00`);

  return result;
}

export function checkTimeInIntervals(
  time: string,
  intervals: string[],
): string {
  for (let i = 0; i < intervals.length; i++) {
    const [start, end] = intervals[i].split(" ~ ");

    if (time === start) {
      return "Start";
    } else if (time === end) {
      return "End";
    } else if (isBetween(time, start, end)) {
      return "Middle";
    }
  }

  return "Disabled";
}

function isBetween(time: string, start: string, end: string): boolean {
  return time > start && time < end;
}

export function filterTimeRanges(
  ranges: string[],
  targetTime: string,
): string[] {
  const filteredRanges: string[] = [];

  for (const range of ranges) {
    const [start, end] = range.split(" ~ ");

    if (
      compareTimes(start, targetTime) <= 0 &&
      compareTimes(targetTime, end) <= 0
    ) {
      // targetTime이 현재 구간에 속하면 해당 구간을 결과에 추가
      filteredRanges.push(range);
    }
  }

  return filteredRanges;
}

function compareTimes(time1: string, time2: string): number {
  // 시간 문자열을 숫자로 변환하여 비교
  const [hours1, minutes1] = time1.split(":").map(Number);
  const [hours2, minutes2] = time2.split(":").map(Number);

  if (hours1 !== hours2) {
    return hours1 - hours2;
  } else {
    return minutes1 - minutes2;
  }
}

export function parseTimeSlots(intervals: string[]): string[] {
  let result: string[] = [];

  for (const interval of intervals) {
    const [start, end] = interval.split(" ~ ");
    const temp = [...result];
    result = getUnion(generateTimeArray(start, end), temp);
  }
  return result;
}

export function generateTimeArray(start: string, end: string): string[] {
  const startTimeParts = start.split(":");
  const endTimeParts = end.split(":");

  if (
    startTimeParts.length !== 2 ||
    endTimeParts.length !== 2 ||
    isNaN(parseInt(startTimeParts[0])) ||
    isNaN(parseInt(startTimeParts[1])) ||
    isNaN(parseInt(endTimeParts[0])) ||
    isNaN(parseInt(endTimeParts[1]))
  ) {
    throw new Error("Invalid input format. Use 'HH:mm' format.");
  }

  const startHour = parseInt(startTimeParts[0]);
  const endHour = parseInt(endTimeParts[0]);

  if (endHour <= startHour) {
    throw new Error("End time should be greater than start time.");
  }

  const result: string[] = [];

  for (let hour = startHour; hour < endHour; hour++) {
    result.push(`${hour < 10 ? "0" + hour : hour}:00`);
  }

  return result;
}

export function getUnion(arr1: string[], arr2: string[]) {
  // Set을 이용하여 중복을 제거한 배열을 만듭니다.
  const set1 = new Set(arr1);
  const set2 = new Set(arr2);

  // Set의 union 연산을 사용하여 두 배열의 합집합을 얻습니다.
  const unionSet = new Set([...set1, ...set2]);

  // Set을 배열로 변환하여 반환합니다.
  return Array.from(unionSet);
}
