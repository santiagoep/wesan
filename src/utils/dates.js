import 'dayjs/locale/es';
import dayjs from 'dayjs';

export const dateFormat = (date, format, config = { locale: 'es' }) =>
    dayjs(date, format, config.locale);