import { format, parseISO } from "date-fns";

type Props = {
  dateString: string;
};

export default function DateComponent({ dateString }: Props) {
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, "LLLL d, yyyy")}</time>;
}
