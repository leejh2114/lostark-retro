export default function Taskbar() {
  return (
    <div className="taskbar">
      <button className="start-btn" type="button">
        ▸ 가입 신청하기
      </button>

      <div className="tray">
        <div className="tray-ico">🔊</div>
        <div className="tray-ico">🌐</div>
        <div className="clock">21:00</div>
      </div>
    </div>
  );
}