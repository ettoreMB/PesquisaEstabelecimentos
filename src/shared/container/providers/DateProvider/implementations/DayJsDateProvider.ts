import dayjs from "dayjs";
import utc from 'dayjs/plugin/utc';

import { IDateProvider } from '../IDateProvider';

class DayJsDateProvider implements IDateProvider {
  addDays(days: number): Date {
    return dayjs().add(days, "days").toDate();
  }

}

export { DayJsDateProvider }