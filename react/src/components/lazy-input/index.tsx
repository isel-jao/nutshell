import React from "react";

type inputInterface = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "onChange"
> & {
  onChange: (value: string) => void;
};

interface LazyInputProps extends inputInterface {
  type: "text" | "number" | "range" | "color" | "textearea";
  value: string;
  timeout?: number;
  onChange: (value: string) => void;
}

function LazyInput({
  type,
  value,
  timeout = 500,
  onChange,
  ...props
}: LazyInputProps) {
  const [state, setState] = React.useState(value);
  const [timer, setTimer] = React.useState<NodeJS.Timeout | null>(null);

  React.useEffect(() => {
    if (timer) {
      clearTimeout(timer);
    }
    setTimer(
      setTimeout(() => {
        onChange(state);
      }, timeout)
    );
  }, [state]);
  return (
    <input
      {...props}
      type={type}
      value={state}
      onChange={(e) => setState(e.target.value)}
    />
  );
}

export { LazyInputProps };
export default LazyInput;
