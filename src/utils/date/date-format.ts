import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'

dayjs.extend(utc)

interface OffsetType {
  offset?: number
  offsetType?: 'hour' | 'month' | 'day'
  startTime?: Date | string
  format?: string
  utc?: boolean
}

/**
 *
 * @param offset 偏移的数字,负数则表示向前偏移
 * @param offsetType 偏移的类型,hour | month | day
 * @param startTime 偏移的参照时间,默认为当前本地时间对应的北京时
 * @param format 返回时间的格式
 * @returns 偏移且格式化之后的时间字符串
 */
export function dateOffset({
  offset = 0,
  offsetType = 'hour',
  startTime = new Date(),
  format = 'YYYY-MM-DD HH:mm:ss',
  utc = false,
}: OffsetType) {
  const type = offset < 0 ? 'subtract' : 'add'
  const operator = utc ? dayjs.utc : dayjs

  return operator(startTime ?? new Date())
    [type](Math.abs(offset), offsetType ?? 'hour')
    .format(format)
}

/**
 *
 * @param date 时间参数,可以是字符串或者时间对象
 * @param format
 * @returns 格式化之后的本地时
 */
export function formatDate(
  date?: Date | string,
  format = 'YYYY-MM-DD HH:mm:ss',
) {
  if (!date) return
  return dayjs(date).format(format)
}
