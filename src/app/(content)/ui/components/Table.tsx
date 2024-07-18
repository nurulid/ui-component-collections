import React, { ComponentProps, PropsWithChildren } from "react";

export const TableHead = (props: { tableHeadData: string[] }) => {
  const { tableHeadData } = props;
  return (
    <thead className="bg-shade-50">
      <tr>
        {tableHeadData.map((item, i) => (
          <th
            key={i}
            className={[
              "font-medium text-left py-[15px] px-6 text-xs opacity-50",
              "first:rounded-tl-md first:rounded-bl-md last:rounded-tr-md last:rounded-br-md",
            ].join(" ")}
          >
            {item}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export const TableCell = (props: PropsWithChildren) => {
  const { children } = props;
  return (
    <td className="border-b">
      <div className={["text-left py-3 px-6 text-sm"].join(" ")}>
        {children}
      </div>
    </td>
  );
};

export const TableBody = (props: PropsWithChildren) => {
  const { children } = props;
  return (
    <tbody>{children}</tbody>
  );
};

interface TableProps
  extends PropsWithChildren<ComponentProps<"table">> {}

export const Table = (props: TableProps) => {
  const { children, ...tableProps } = props;
  return (
    <table {...tableProps} className="table-fixed border-collapse border-spacing-0 w-full">{children}</table>
  );
};
