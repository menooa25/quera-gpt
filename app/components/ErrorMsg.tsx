interface Props {
  text?: string | boolean;
}
const ErrorMsg = ({ text }: Props) => {
  if (!text) return null;
  return <span className="text-red-500 text-sm">&nbsp;{text}</span>;
};

export default ErrorMsg;
