interface Props {
  text: string;
}
const ErrorMsg = ({ text }: Props) => {
  if (!text) return null;
  return <div>{text}</div>;
};

export default ErrorMsg;
