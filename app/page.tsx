"use client";

import { useState } from "react";

export default function RecordPage() {
  const [records, setRecords] = useState<{ id: number; text: string; time: string }[]>([]);
  const [inputValue, setInputValue] = useState("");

  const addRecord = () => {
    if (!inputValue.trim()) return;
    const newRecord = {
      id: Date.now(),
      text: inputValue,
      time: new Date().toLocaleString(),
    };
    setRecords([newRecord, ...records]);
    setInputValue("");
  };

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "0 auto", fontFamily: "sans-serif" }}>
      <h1 style={{ borderBottom: "2px solid #333", paddingBottom: "10px" }}>📝 我的紀錄系統</h1>
      
      <div style={{ margin: "20px 0", display: "flex", gap: "10px" }}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="輸入紀錄內容..."
          style={{ padding: "10px", flex: 1, borderRadius: "5px", border: "1px solid #ccc" }}
        />
        <button 
          onClick={addRecord}
          style={{ padding: "10px 20px", backgroundColor: "#0070f3", color: "#fff", border: "none", borderRadius: "5px", cursor: "pointer" }}
        >
          新增紀錄
        </button>
      </div>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {records.map((record) => (
          <li key={record.id} style={{ padding: "15px", borderBottom: "1px solid #eee", backgroundColor: "#f9f9f9", marginBottom: "5px", borderRadius: "5px" }}>
            <div style={{ fontWeight: "bold" }}>{record.text}</div>
            <small style={{ color: "#666" }}>時間：{record.time}</small>
          </li>
        ))}
      </ul>
    </div>
  );
}
