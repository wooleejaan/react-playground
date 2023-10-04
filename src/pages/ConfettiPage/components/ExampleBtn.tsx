import { css } from "@emotion/react";

export default function ExampleBtn({
  onClickInitBurst,
  buttonRef,
}: {
  onClickInitBurst: () => void;
  buttonRef: React.MutableRefObject<HTMLButtonElement | null>;
}) {
  const handleClickButton = () => {
    // 버튼의 원래 로직 ... 요청 완료 후
    onClickInitBurst();
  };

  return (
    <button
      ref={buttonRef}
      onClick={handleClickButton}
      css={css`
        width: 128px;
        height: 64px;
      `}
    >
      예시 버튼
    </button>
  );
}
