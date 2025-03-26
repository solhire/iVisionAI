"use client";

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line
} from 'recharts';

// Define static data that will be consistent between server and client
const objectDetectionData = [
  { name: 'iVision AI', accuracy: 98.5, speed: 150 },
  { name: 'Competitor A', accuracy: 92.3, speed: 180 },
  { name: 'Competitor B', accuracy: 89.7, speed: 200 },
  { name: 'Competitor C', accuracy: 85.2, speed: 220 }
];

const performanceData = [
  { month: 'Jan', accuracy: 95.2, speed: 180 },
  { month: 'Feb', accuracy: 96.1, speed: 175 },
  { month: 'Mar', accuracy: 96.8, speed: 170 },
  { month: 'Apr', accuracy: 97.3, speed: 165 },
  { month: 'May', accuracy: 97.8, speed: 160 },
  { month: 'Jun', accuracy: 98.5, speed: 150 }
];

export function PerformanceMetrics() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="space-y-12">
      {/* Object Detection Comparison */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold text-gray-900 mb-6">
          Object Detection Performance
        </h3>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={objectDetectionData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
              <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
              <Tooltip />
              <Bar yAxisId="left" dataKey="accuracy" fill="#8884d8" name="Accuracy (%)" />
              <Bar yAxisId="right" dataKey="speed" fill="#82ca9d" name="Speed (ms)" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Performance Over Time */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold text-gray-900 mb-6">
          Performance Improvements Over Time
        </h3>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={performanceData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
              <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
              <Tooltip />
              <Line yAxisId="left" type="monotone" dataKey="accuracy" stroke="#8884d8" name="Accuracy (%)" />
              <Line yAxisId="right" type="monotone" dataKey="speed" stroke="#82ca9d" name="Speed (ms)" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
} 