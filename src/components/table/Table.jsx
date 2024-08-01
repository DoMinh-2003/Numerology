import React from "react";
import { useMediaQuery } from "react-responsive";
function Item({ items, background }) {
  const isQuery = useMediaQuery({ query: "(max-width: 755px)" });
  return (
    <>
      <tr
        className=" border-b border-[rgba(155,152,152,0.8)]  w-fit"
        style={{ backgroundColor: background }}
      >
        {items.map((item, index) => {
          if (items.length == index + 1 && isQuery) {
            return;
          }
          return <td className=" inline-block h-full ">{item()}</td>;
        })}
      </tr>
    </>
  );
}
function ItemResposive({ items, background }) {
  const isQuery = useMediaQuery({ query: "(max-width: 755px)" });
  return (
    <>
      <tr
        className="border-b border-[rgba(155,152,152,0.8)] "
        style={{ backgroundColor: background }}
      >
        {items.map((item, index) => {
          if (items.length == index + 1 && isQuery) {
            return (
              <td className=" inline-block h-full px-3 py-3 ">{item()}</td>
            );
          }
          return;
        })}
      </tr>
    </>
  );
}
function Table({ data }) {
  const isQuery = useMediaQuery({ query: "(max-width: 755px)" });
  const isQueryTable = useMediaQuery({ query: "(max-width: 372px)" });
  return (
    <div className="flex flex-col">
      <table className=" rounded-[6px] w-fit overflow-hidden  ">
        {data.map((item, index) => {
          return (
            <Item
              key={index}
              background={item.backgroundColor}
              items={Object.values(item.dataSource)}
            />
          );
        })}
      </table>
      {isQuery && (
        <table
          className={`mt-[30px] ${
            isQueryTable ? "w-[294px]" : "w-[348px]"
          }  rounded-[6px] overflow-hidden outline-[rgba(155,152,152,0.8)] outline-[1px]`}
        >
          {data.map((item, index) => {
            return (
              <ItemResposive
                key={index}
                background={item.backgroundColor}
                items={Object.values(item.dataSource)}
              />
            );
          })}
        </table>
      )}
    </div>
  );
}

export default Table;
