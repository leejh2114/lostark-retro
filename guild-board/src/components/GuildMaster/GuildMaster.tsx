import Window from "@/components/common/Window";

export default function GuildMaster() {
  return (
    <Window title="길마의_한마디.txt" icon="🧙">
      <div className="gm">
        <div>
          <p className="gm-text">
            안녕하세요, 길드 길마 <b>솔거</b>입니다. 길드에 들어가야 하는데 이미 다들 친해진 곳에
            들어가기는 부담스러워서, 마음 맞는 사람들끼리 모여 길드를 만들었습니다. 저와 비슷한
            고민이 있던 분들, 모두 환영합니다. 재미있게 아크라시아를 구해봐요!
          </p>

          <div className="gm-tag">
            💬 I동지들, 이런 I들 간택해 끌고다녀주실 E분들 모두 환영합니다 🧙‍♂️
          </div>
        </div>
      </div>
    </Window>
  );
}