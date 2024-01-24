import { connectDB } from "@/app/utils/database";
import { NextRequest, NextResponse } from "next/server";

interface ScheduleProps {
  date: string;
  timeslots: string[];
}
interface StylistProps {
  stylist_id: string;
  working_hours: {
    0: string[];
    1: string[];
    2: string[];
    3: string[];
    4: string[];
    5: string[];
    6: string[];
  };
}

interface ReservedProps {
  date: string;
  timeslots: string[];
}

interface DisabledProps {
  date: string;
  timeslots: string[];
}

interface HowProps {
  date: string;
  timeslots: string[];
}
interface ShoppingProps {
  date: string;
  timeslots: string[];
}
export async function GET(req: NextRequest) {
  const db = (await connectDB).db("stcl-dev");
  const searchParams = req.nextUrl.searchParams;
  const stylist_key = searchParams.get(`stylist_key`) || null;

  const getStylistInfoByStylistKey = async (stylist_key: string) => {
    const stylistInfoByStylistKeyResponse = await db
      .collection("Stylist")
      .findOne({ stylist_key: stylist_key });
    if (!stylistInfoByStylistKeyResponse)
      return { stylist_id: null, working_hours: null };

    const stylistInfo: StylistProps = {
      stylist_id: String(stylistInfoByStylistKeyResponse._id),
      working_hours: {
        0: stylistInfoByStylistKeyResponse.working_hours[0],
        1: stylistInfoByStylistKeyResponse.working_hours[1],
        2: stylistInfoByStylistKeyResponse.working_hours[2],
        3: stylistInfoByStylistKeyResponse.working_hours[3],
        4: stylistInfoByStylistKeyResponse.working_hours[4],
        5: stylistInfoByStylistKeyResponse.working_hours[5],
        6: stylistInfoByStylistKeyResponse.working_hours[6],
      },
    };
    // console.log(stylistInfo.working_hours);
    return stylistInfo;
  };

  const getScheduleByStylistId = async (stylist_id: string) => {
    const scheduleByStylistIdResponse = await db
      .collection("Schedule")
      .find({ stylist_id: stylist_id })
      .toArray();

    const schedules: ScheduleProps[] = scheduleByStylistIdResponse.map(
      (schedule) => ({
        date: schedule.date,
        timeslots: schedule.timeslots,
      }),
    );

    // console.log(schedules);
    if (!scheduleByStylistIdResponse) return [];

    return schedules;
  };

  const getReservedByStylistId = async (stylist_id: string) => {
    const reservedByStylistIdResponse = await db
      .collection("Reservation")
      .find({ stylist_id: stylist_id })
      .toArray();

    const reservedHow = reservedByStylistIdResponse.map((reservation) =>
      reservation.services.how.map((how: HowProps) => ({
        date: how.date,
        timeslots: how.timeslots,
      })),
    );

    const reservedShopping = reservedByStylistIdResponse.map((reservation) =>
      reservation.services.shopping.map((shopping: ShoppingProps) => ({
        date: shopping.date,
        timeslots: shopping.timeslots,
      })),
    );

    const allReservations = reservedHow
      .concat(reservedShopping)
      .flat()
      .reduce((acc, reservation) => {
        const existingReservation = acc.find(
          (r: ScheduleProps) => r.date === reservation.date,
        ) as ScheduleProps | undefined;

        if (existingReservation) {
          // 이미 있는 날짜라면 timeslots를 합침
          existingReservation.timeslots = existingReservation.timeslots.concat(
            reservation.timeslots,
          );
        } else {
          // 새로운 날짜라면 추가
          acc.push({
            date: reservation.date,
            timeslots: reservation.timeslots,
          });
        }

        return acc;
      }, []);

    console.log(allReservations);
    if (!reservedByStylistIdResponse) return [];
    return allReservations;
  };

  const timeSlotsByStylistKey = async (stylist_key: string) => {
    const stylist_info = await getStylistInfoByStylistKey(stylist_key);
    const stylist_id = stylist_info.stylist_id;

    if (stylist_id === null)
      return NextResponse.json(
        { error: `Stylist not found for ${stylist_key}` },
        { status: 404 },
      );
    const schedules: ScheduleProps[] = await getScheduleByStylistId(stylist_id);
    const reserved: ReservedProps[] = await getReservedByStylistId(stylist_id);

    const disabled: DisabledProps[] = schedules
      .concat(reserved)
      .flat()
      .reduce((acc: DisabledProps[], item) => {
        const existingItem = acc.find(
          (i: DisabledProps) => i.date === item.date,
        ) as ScheduleProps | undefined;

        if (existingItem) {
          existingItem.timeslots = existingItem.timeslots.concat(
            item.timeslots,
          );
        } else {
          acc.push({ date: item.date, timeslots: item.timeslots });
        }
        return acc;
      }, []);

    console.log(disabled);

    return {
      stylist_id: stylist_id,
      working_hours: stylist_info.working_hours,
      disabled: disabled,
    };
  };
  if (stylist_key === null) {
    return NextResponse.json(
      { error: "stylist_key is required" },
      { status: 400 },
    );
  }

  const result = await timeSlotsByStylistKey(stylist_key);
  return NextResponse.json(result, { status: 200 });
}
