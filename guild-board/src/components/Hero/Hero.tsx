import Window from "@/components/common/Window";

export default function Hero() {
  return (
    <Window title="길드_레트로.exe" icon="🗡️" className="hero">
      <span className="hero-eyebrow">LOST ARK · 루페온 서버</span>
      <h1 className="hero-title">레트로</h1>
      <p className="hero-sub">
        처음 모험을 시작했던 그 설렘을 기억하는 사람들이 모였습니다.
        <br />
        오래 켜둘수록 따뜻해지는 모니터처럼, 오래 함께할수록 편안한 길드.
      </p>
      <div className="hero-divider">
        <span>◆ ◆ ◆</span>
      </div>
      <p className="hero-sub">루페온 서버에서 함께 성장하고 함께 웃을 길드원을 찾습니다.</p>
    </Window>
  );
}