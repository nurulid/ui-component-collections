import { twMerge } from "tailwind-merge";
import { tv, type VariantProps } from "tailwind-variants";

const style = tv({
  base: "inline-block rounded-lg border font-semibold shadow-sm shadow-slate-200 transition duration-200 disabled:opacity-50",
  variants: {
    variant: {
      primary:
        "border-indigo-600 bg-indigo-600 text-indigo-50 hover:bg-indigo-500 active:bg-indigo-700",
      secondary:
        "border-slate-300 bg-white text-slate-600 hover:text-slate-700 active:bg-slate-50 active:text-slate-800",
      danger:
        "bg-rose-500 active:bg-rose-700 border-rose-500 hover:bg-rose-600 active:text-rose-50",
    },
    size: {
      sm: "px-3 py-2 text-sm",
      md: "px-4 py-3 text-[15px]",
      lg: "text-lg px-5 py-3",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});

type TButton = VariantProps<typeof style>;
interface Props extends TButton, React.ComponentPropsWithRef<"button"> {
  isFull?: boolean;
}

export const Buttontw = (props: Props) => {
  const { isFull = false } = props;
  const fullBtn = isFull ? "w-full" : "w-auto";
  return (
    <button
      {...props}
      className={twMerge(style({ ...props }), fullBtn, props.className)}
    >
      {props.children}
    </button>
  );
};
