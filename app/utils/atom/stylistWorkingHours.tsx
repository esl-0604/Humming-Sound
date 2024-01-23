import { atom } from "recoil";

export interface ScheduleType {
  date: string;
  timeslots: string[];
}

export interface AvailableHoursType {
  stylist_id: string;
  working_hours: { [key: string]: string[] };
  disabled: ScheduleType[];
}

export const stylistWorkingHours = atom<AvailableHoursType>({
  key: "stylistWorkingHours",
  default: {
    stylist_id: "001",
    working_hours: {
      "0": ["18:00", "19:00", "20:00", "21:00", "22:00"],
      "1": ["13:00", "14:00", "15:00", "16:00", "17:00"],
      "2": ["09:00", "10:00", "11:00", "17:00", "18:00"],
      "3": ["09:00", "12:00"],
      "4": ["09:00", "10:00", "11:00", "12:00", "13:00", "21:00", "22:00"],
      "5": ["09:00", "10:00", "11:00", "12:00", "13:00"],
      "6": ["09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00"],
    },
    disabled: [
      { date: "2024-01-24", timeslots: ["10:00", "11:00"] },
      {
        date: "2024-01-30",
        timeslots: ["10:00", "11:00", "13:00", "14:00", "15:00"],
      },
      { date: "2024-02-05", timeslots: ["13:00", "14:00", "15:00"] },
      { date: "2024-02-10", timeslots: ["15:00"] },
    ],
  },
});
