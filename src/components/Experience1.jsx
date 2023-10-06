import React from "react";

const Experience1 = () => {
  const persons = [
    {
      textOne: "Current",
      textTwo: "Metafy",
      textThree: "Design Lead",
      textFour: "Remote",
      textFive: "+",
    },
    {
      textOne: "2020-2022",
      textTwo: "MetaLab",
      textThree: "Design Lead",
      textFour: "Remote",
      textFive: "+",
    },
    {
      textOne: "2018-2020",
      textTwo: "Huawei",
      textThree: "UX Design Manager",
      textFour: "Milan, Italy",
      textFive: "+",
    },
    {
      textOne: "2018",
      textTwo: "Alkemy",
      textThree: "Senior Product Designer",
      textFour: "Milan, Italy",
      textFive: "+",
    },
    {
      textOne: "2020-2022",
      textTwo: "JibJab",
      textThree: "Senior Product Designer",
      textFour: "Los Angles, California",
      textFive: "+",
    },
    {
      textOne: "2018-2020",
      textTwo: "Huawei",
      textThree: "Senior Product Designer",
      textFour: "Milan, Italy",
      textFive: "+",
    },
    {
      textOne: "2007-2013",
      textTwo: "Pbcom",
      textThree: "Digital Art Director",
      textFour: "Genoa, Tlaly",
      textFive: "+",
    },
  ];

  return (
    <div style={{ height: "727px", width: "100%", border: "2px solid black" }}>
      <div className="container mb-5">
        <table
          class="table caption-top"
          style={{
            border: "1px solid black",
            fontSize: "38px",
          }}
        >
          <tbody>
            {persons.map((item) => {
              return (
                <tr style={{ padding: "22.8px 15px" }}>
                  <th style={{ padding: "22.8px 15px" }} scope="row">
                    {item.textOne}
                  </th>
                  <td style={{ padding: "22.8px 15px" }}>{item.textTwo}</td>
                  <td style={{ padding: "22.8px 15px" }}>{item.textThree}</td>
                  <td style={{ padding: "22.8px 15px" }}>{item.textFour}</td>
                  <th style={{ padding: "22.8px 15px" }}>{item.textFive}</th>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Experience1;
