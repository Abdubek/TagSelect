import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import TagSelect from "./components/TagSelect";
import reportWebVitals from "./reportWebVitals";

const data = [
  {
    id: 1,
    name: "rake",
    version: "12.7.0",
  },
  {
    id: 2,
    name: "postgres",
    version: "12.7.0",
  },
  {
    id: 3,
    name: "mongodb",
    version: "12.7.0",
  },
  {
    id: 4,
    name: "react",
    version: "12.7.0",
  },
  {
    id: 5,
    name: "nestjs",
    version: "12.7.0",
  },
  {
    id: 6,
    name: "react-hook-form",
    version: "12.7.0",
  },
];

ReactDOM.render(
  <React.StrictMode>
    <div className="layout">
      <TagSelect
        onChange={(val) => console.log(val)}
        placeholder="Выберите пакеты"
      >
        {data.map((item) => (
          <TagSelect.Item
            key={item.id}
            value={item}
            name={
              <span className="flex flex-between">
                <span>{item.name}</span>
                <span className="color-gray">{item.version}</span>
              </span>
            }
          />
        ))}
      </TagSelect>
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
