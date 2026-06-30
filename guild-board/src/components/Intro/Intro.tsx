import Window from "@/components/common/Window";

export default function Intro() {
  return (
    <Window title="길드소개.txt" icon="✨">
      <div className="strip">📖 README — 길드를 소개합니다</div>

      <ul className="feat">
        <li>
          길드 및 상점 <b>만렙</b>
        </li>
        <li>
          활발한 <b>디스코드 &amp; 길드 레이드</b>
        </li>
        <li>
          기본적인 길드 규칙만 준수하면 되는 <b>자유로운 친목 길드</b> 지향
        </li>
        <li>
          정기적으로 소소한 <b>이벤트</b> 진행 중
        </li>
      </ul>
    </Window>
  );
}