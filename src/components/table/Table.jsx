import React from "react";
import { useMediaQuery } from "react-responsive";
function Item({ items, background }) {
  const isQuery = useMediaQuery({ query: "(max-width: 755px)" });
  return (
    <>
      <tr
        className=" border-b border-black"
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
        className="border-b border-black"
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
  return (
    <div className="flex flex-col">
      <table className=" rounded-[6px] overflow-hidden">
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
        <table className="mt-[30px] rounded-[6px] overflow-hidden">
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
