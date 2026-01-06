"use client";

import { useState } from "react";

export default function AdvancedAuditPage() {
  const [auditData, setAuditData] = useState({
    serialNumber: "202510-081", // 系統流水號 [cite: 11]
    auditDate: "2025/10/30",
    startTime: "15:00",
    district: "松山", // 行政區 [cite: 16]
    schoolName: "讀思塾有限公司附設臺北市私立讀思塾文理短期補習班", // 完整班名 [cite: 8]
    address: "105松山區南京東路3段338巷5號1樓", // 班址 [cite: 9]
    representative: "讀思塾有限公司(賴俊瑋)", // 設立代表人 [cite: 21]
    licenseNo: "7970", // 立案證號 [cite: 22]
    areaTotal: "148.04", // 班舍面積 [cite: 23]
    areaClass: "70.39", // 教室面積 [cite: 24]
    principal: "許斐然", // 班主任 [cite: 25]
    staffCount: "7", // 受僱人員數 [cite: 28]
    studentCount: "1", // 學生人數 [cite: 30]
  });

  // 定義詳細檢查項目與 PDF 中的狀態 [cite: 36, 38, 45, 51, 71]
  const [items, setItems] = useState([
    { id: "一", name: "班舍", status: "符合", note: "" },
    { id: "二", name: "市招班名", status: "不符合", note: "僅書寫讀思塾" }, // 參照 PDF 備註 [cite: 45, 59]
    { id: "三", name: "設立類科", status: "符合", note: "" },
    { id: "四", name: "收費收據", status: "不符合", note: "未註明退費規定" }, // [cite: 51, 52]
    { id: "五", name: "每生使用面積", status: "符合", note: "現場1人" }, // [cite: 71, 81]
    { id: "六", name: "教職員工名冊備查", status: "符合", note: "" },
    { id: "七", name: "招生廣告", status: "符合", note: "未註明修業期間及班名資訊" }, // [cite: 76, 78]
    { id: "八", name: "相關教學器材", status: "符合", note: "" },
    { id: "九", name: "建立個人資料維護計畫", status: "符合", note: "" },
    { id: "十", name: "定型化契約(含履約保證)", status: "不符合", note: "履保過期" }, // [cite: 102, 126]
    { id: "十一", name: "性騷擾防治措施", status: "不符合", note: "" },
    { id: "十二", name: "非屬補習班業務", status: "符合", note: "" },
    { id: "十三", name: "代訂餐食及其肉品管理", status: "符合", note: "" },
    { id: "十四", name: "疑似違反兒少人身安全", status: "符合", note: "現場「無」此情事" }, // [cite: 144, 145]
    { id: "十五", name: "反針孔攝影偵測", status: "不符合", note: "未製成記錄表" }, // [cite: 149, 165]
  ]);

  return (
    <div style={{ padding: "20px", maxWidth: "1000px", margin: "0 auto", backgroundColor: "#fdfdfd", color: "#000", fontFamily: "Microsoft JhengHei, sans-serif" }}>
      {/* 標題與流水號 [cite: 6, 10, 11] */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", borderBottom: "2px solid #000", paddingBottom: "10px" }}>
        <div>系統流水號：{auditData.serialNumber}</div>
        <h2 style={{ textAlign: "center", margin: 0 }}>臺北市政府教育局短期補習班<br/>公共安全及班務行政管理查察紀錄表</h2>
        <div>行政區：{auditData.district}</div>
      </div>

      {/* 基本資料區塊 [cite: 8, 9, 21, 23, 24] */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", border: "1px solid #000", marginTop: "10px" }}>
        <div style={cellStyle}><b>班名：</b>{auditData.schoolName}</div>
        <div style={cellStyle}><b>立案證號：</b>{auditData.licenseNo}</div>
        <div style={cellStyle}><b>檢查日期：</b>{auditData.auditDate} {auditData.startTime}</div>
        <div style={{ ...cellStyle, gridColumn: "span 2" }}><b>班址：</b>{auditData.address}</div>
        <div style={cellStyle}><b>代表人：</b>{auditData.representative}</div>
        <div style={cellStyle}><b>班舍面積：</b>{auditData.areaTotal} ㎡</div>
        <div style={cellStyle}><b>教室面積：</b>{auditData.areaClass} ㎡</div>
        <div style={cellStyle}><b>學生人數：</b>{auditData.studentCount} 人</div>
      </div>

      {/* 檢查項目列表 [cite: 36] */}
      <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "20px" }}>
        <thead>
          <tr style={{ backgroundColor: "#eee" }}>
            <th style={tableHeaderStyle}>項目</th>
            <th style={tableHeaderStyle}>查核結果</th>
            <th style={tableHeaderStyle}>備註/具體情形</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td style={tableCellStyle}>{item.id}、{item.name}</td>
              <td style={{ ...tableCellStyle, textAlign: "center", color: item.status === "不符合" ? "red" : "green", fontWeight: "bold" }}>
                {item.status}
              </td>
              <td style={tableCellStyle}>{item.note}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* 會同稽查機關  */}
      <div style={{ marginTop: "20px", border: "1px solid #000", padding: "10px" }}>
        <h4 style={{ margin: "0 0 10px 0" }}>會同稽查機關檢查結果：</h4>
        <div style={{ display: "flex", gap: "20px", fontSize: "0.9em" }}>
          <span>【建管處】: 未派員</span>
          <span>【消防局】: 未派員</span>
          <span>【消保官】: 未派員</span>
          <span>【勞動力處】: 合格</span>
        </div>
      </div>
    </div>
  );
}

const cellStyle = { border: "1px solid #000", padding: "8px" };
const tableHeaderStyle = { border: "1px solid #000", padding: "10px", textAlign: "left" as const };
const tableCellStyle = { border: "1px solid #000", padding: "8px" };
