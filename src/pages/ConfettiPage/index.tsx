import { css } from "@emotion/react";
import ConfettiCanvas from "./components/ConfettiCanvas";

export default function ConfettiPage() {
  return (
    <div
      css={css`
        display: flex;
        justify-content: center;
        align-items: center;
      `}
    >
      <ConfettiCanvas />
    </div>
  );
}
