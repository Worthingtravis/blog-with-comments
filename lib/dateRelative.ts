import formatDistanceToNowStrict from "date-fns/formatDistanceToNowStrict";

export default function distanceToNow(dateTime: number | Date | undefined) {
  if (!dateTime) return "Unknown";
  return formatDistanceToNowStrict(dateTime, {
    addSuffix: true,
  });
}
