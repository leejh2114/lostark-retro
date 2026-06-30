import Window from "@/components/common/Window";

export default function JoinGuide() {
  return (
    <Window title="가입안내.txt" icon="💌" className="join">
      <div className="join-row">
        <span className="join-key">길드명</span>
        <span className="join-val">레트로</span>
      </div>

      <div className="join-row">
        <span className="join-key">서버</span>
        <span className="join-val">루페온</span>
      </div>

      <div className="join-row">
        <span className="join-key">디스코드</span>
        <span className="join-val">reuk_ga / cj00624 / hoyoung1025</span>
      </div>

      <div className="join-row">
        <span className="join-key">인게임</span>
        <span className="join-val">륶솔거 / 온잎새 / 워붕이는정말못말려</span>
      </div>

      <div className="join-row">
        <span className="join-key">참고</span>
        <span className="join-val">잠수 중이면 로아톡 또는 디스코드로 문의해주세요!</span>
      </div>
    </Window>
  );
}