import React, { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Cell, ResponsiveContainer } from "recharts";
import { getStoredReadBook } from '../../utils/handleBookData/localstorage';

export const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${
    y + height / 3
  } ${x + width / 2}, ${y} C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height} Z`;
};

const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];

const PagesToRead = () => {
  const [readList, setReadList] = useState([]);

  useEffect(() => {
    fetch('/book.json')
      .then(response => response.json())
      .then(data => {
        const bookIds = getStoredReadBook();
        const readBooks = data.filter(book => bookIds.includes(book.id));

        const formattedData = readBooks.map(book => ({
          bookName: book.name,
          totalPages: book.totalPages
        }));
        
        setReadList(formattedData);
      });
  }, []);

  return (
    <div className="flex justify-center mx-4 lg:mx-10">
      {readList.length > 0 ? (
        <ResponsiveContainer width="100%" height={550}  className="h-[250px] lg:h-[550px]">
          <BarChart
            data={readList}
            className="bg-[#1313130D] lg:px-4 pt-24 pb-5 lg:pb-2 lg:pt-6 rounded-xl"
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="bookName" tick={{ fontSize: 14 }} />
            <YAxis />
            <Tooltip />
            <Bar
              dataKey="totalPages"
              shape={<TriangleBar />}
              label={{ position: "top", fontSize: 14 }}
            >
              {readList.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      ) : (
        <p>No data available to display.</p>
      )}
    </div>
  );
};

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;
  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

export default PagesToRead;
