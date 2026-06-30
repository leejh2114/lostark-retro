import Window from "@/components/common/Window";

export default function RecruitInfo() {
  return (
    <Window title="모집공고.txt" icon="📋">
      <div className="strip">⚙ 가입을 위한 기본 조건</div>

      <div className="grid">
        <div className="cell">
          <div className="cell-label">🧝 모집 대상</div>
          <div className="cell-value">
            본캐 아이템 레벨 최소 1700+
            <br />
            원정대 단위 가입 필수
          </div>
        </div>

        <div className="cell">
          <div className="cell-label">⏳ 나이</div>
          <div className="cell-value">
            23세 이상 권장
            <br />
            간절하면 협의 가능
          </div>
        </div>

        <div className="cell">
          <div className="cell-label">🎙️ 필수 사항</div>
          <div className="cell-value">
            디스코드 가입 및 활동 필수
            <br />
            길드상점 만렙 유지
          </div>
        </div>

        <div className="cell">
          <div className="cell-label">🍀 길드 분위기</div>
          <div className="cell-value">
            기본 규칙만 지키면 되는
            <br />
            자유로운 친목 길드
          </div>
        </div>
      </div>
    </Window>
  );
}