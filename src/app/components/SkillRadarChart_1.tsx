import React, { PureComponent } from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from "recharts";

const data = [
  {
    subject: "laravel",
    A: 3,
    // B: 110,
    fullMark: 5,
  },
  {
    subject: "flutter",
    A: 2,
    // B: 130,
    fullMark: 5,
  },
  {
    subject: "VB.NET",
    A: 3,
    // B: 130,
    fullMark: 5,
  },
  {
    subject: "docker",
    A: 2,
    // B: 100,
    fullMark: 5,
  },
  {
    subject: "MySQL",
    A: 2,
    // B: 90,
    fullMark: 5,
  },
  {
    subject: "livewire",
    A: 3,
    // B: 85,
    fullMark: 5,
  },
];

const radar = (
  <RadarChart
    cx={180}
    cy={160}
    outerRadius={100}
    width={370}
    height={300}
    data={data}
  >
    <PolarGrid />
    <PolarAngleAxis dataKey="subject" />
    <PolarRadiusAxis angle={30} domain={[0, 4]} />
    <Radar
      name="Mike"
      dataKey="A"
      stroke="#8884d8"
      fill="#8884d8"
      fillOpacity={0.6}
    />
  </RadarChart>
);

function SkillRadarChart_1() {
  // static demoUrl = 'https://codesandbox.io/p/sandbox/simple-radar-chart-2p5sxm';
  return radar;
}

export default SkillRadarChart_1;
