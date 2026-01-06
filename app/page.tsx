"use client";

import { useState } from "react";

export default function SecurityAuditPage() {
  const [formData, setFormData] = useState({
    date: "114-01-01",
    timeStart: "09:00",
    timeEnd: "11:00",
    schoolName: "",
    representative: "",
    isStandard: true,
  });

  // 定義教育局檢查項目
  const checkItems = [
    "一、班舍（擅自增減、隔間）",
    "二、市招班名（全名書寫）",
    "三、設立類科",
    "四、收費收據（退費規定）",
    "五、每生使用面積",
    "六、教職員工名冊備查",
    "七、招生廣告（安親課輔）",
    "八、相關教學器材（爐具、健身器材）",
    "九、個資維護計畫",
    "十、定型化契約（履約保證）",
    "十一、性騷擾防治措施",
    "十二、非屬補習班業務（午睡、餐食）",
    "十三、代訂餐食肉品管理",
    "十四、兒少人身安全情事",
    "十五、反針孔攝影偵測",
  ];

  return (
    <div style={{ padding: "30px", maxWidth: "900px", margin: "0 auto", backgroundColor: "#fff", color: "#333", fontFamily: "sans-serif", lineHeight: "1.6" }}>
      <header style={{ textAlign: "center", borderBottom: "3px double #000", marginBottom: "20px" }}>
        <h2>臺北市政府教育局短期補習班</h2>
        <h1>公共安全及班務行政管理查察紀錄表</h1>
        <p>檢查日期：114 年 ____ 月 ____ 日（{formData.timeStart} ~ {formData.timeEnd}）</p>
      </header>

      {/* 基本資料區塊 */}
      <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: "20px" }}>
        <tbody>
          <tr>
            <td style={tdStyle}>班名</td>
            <td style={tdStyle}><input type="text" style={inputStyle} placeholder="請輸入班名" /></td>
            <td style={tdStyle}>電話</td>
            <td style={tdStyle}><input type="text" style={inputStyle} /></td>
          </tr>
          <tr>
            <td style={tdStyle}>班址</td>
            <td colSpan={3} style={tdStyle}><input type="text" style={inputStyle} /></td>
          </tr>
        </tbody>
      </table>

      {/* 檢查項目區塊 */}
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr style={{ backgroundColor: "#f2f2f2" }}>
            <th style={tdStyle}>主管機關</th>
            <th style={tdStyle}>檢查項目</th>
            <th style={{ ...tdStyle, width: "60px" }}>符合</th>
            <th style={{ ...tdStyle, width: "60px" }}>不符</th>
            <th style={tdStyle}>查核情形</th>
          </tr>
        </thead>
        <tbody>
          {checkItems.map((item, index) => (
            <tr key={index}>
              {index === 0 && <td rowSpan={15} style={{ ...tdStyle, textAlign: "center", fontWeight: "bold" }}>教育局</td>}
              <td style={tdStyle}>{item}</td>
              <td style={{ ...tdStyle, textAlign: "center" }}><input type="checkbox" /></td>
              <td style={{ ...tdStyle, textAlign: "center" }}><input type="checkbox" /></td>
              <td style={tdStyle}><input type="text" style={inputStyle} /></td>
            </tr>
          ))}
          {/* 其他配合單位 */}
          <tr><td style={tdStyle}>建管</td><td colSpan={4} style={tdStyle}>□ 合格 □ 不合格：<input type="text" style={inputStyle} /></td></tr>
          <tr><td style={tdStyle}>消防</td><td colSpan={4} style={tdStyle}>□ 合格 □ 不合格：<input type="text" style={inputStyle} /></td></tr>
        </tbody>
      </table>

      <footer style={{ marginTop: "20px", fontSize: "0.9em", color: "#666" }}>
        113年11月26日修正
      </footer>
    </div>
  );
}

const tdStyle = { border: "1px solid #000", padding: "8px", verticalAlign: "middle" };
const inputStyle = { width: "95%", border: "none", outline: "none", fontSize: "16px" };
