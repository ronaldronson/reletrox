const options = {
  year: 'numeric',
  month: 'long',
  weekday: 'short',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric'
};

export default function (date) {
  return new Intl.DateTimeFormat('en-GB', options).format(date);
}
