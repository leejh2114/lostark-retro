import Window from "@/components/common/Window";

export default function Welcome() {
  return (
    <Window title="환영합니다 &amp; 죄송합니다.txt" icon="🍀">
      <div className="two">
        <div>
          <div className="strip strip-green">✓ 이런 분 환영해요</div>
          <ul className="checklist">
            <li><span className="box yes">✓</span>디코에서 수다떨기 좋아하는 분!</li>
            <li><span className="box yes">✓</span>길드원들과 같이 레이드를 하시는 걸 좋아하는 분!</li>
            <li><span className="box yes">✓</span>성장 의지가 있는 분!</li>
            <li><span className="box yes">✓</span>동반 가입도 환영합니다! (3인까지 가능해요)</li>
          </ul>
        </div>

        <div>
          <div className="strip strip-red">✕ 이런 분은 죄송해요</div>
          <ul className="checklist">
            <li><span className="box no">✕</span>소통하지 않는 분</li>
            <li><span className="box no">✕</span>장기 주차 및 과한 쌀먹</li>
            <li><span className="box no">✕</span>여미새 / 남미새 / 이중길드 등</li>
            <li>
              <span className="box no">✕</span>
              그 외 분란의 여지가 있는 분들
              <span className="sub">
                (배려 없는 분 / 사사게 스타일 / 훈수나 잔소리 과한 분 / 혐오 성향이 있는 분 등)
              </span>
            </li>
          </ul>
        </div>
      </div>
    </Window>
  );
}