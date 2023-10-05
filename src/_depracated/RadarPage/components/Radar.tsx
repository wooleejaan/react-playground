import { css } from "@emotion/react";

import { ForwardedRef, forwardRef, useEffect } from "react";

import { drawRadarChart } from "../helpers/radar.helper";
import {
  IRadarChartDefaultProps,
  IRadarChartDraggableProps,
  IRadarChartProps,
} from "../types/radar.type";

export function Radar({ children, width, height }: IRadarChartProps) {
  return (
    <div
      style={{ width, height }}
      css={css`
        position: relative;
        overflow: hidden;
      `}
    >
      {children}
    </div>
  );
}

function DraggablePolygon(
  {
    draggableData,
    radarWidth,
    radarHeight,
    framePadding,
    onDragOutUserInput,
    isPossibleDrawNode,
  }: IRadarChartDraggableProps,
  ref: ForwardedRef<HTMLDivElement>
) {
  useEffect(() => {
    drawRadarChart(
      "#radar-chart",
      "radar-chart-line",
      "radar-chart-axis",
      "radar-chart-legend",
      "radar-chart-series",
      false,
      draggableData,
      "#0052bd",
      radarWidth,
      radarHeight,
      framePadding,
      onDragOutUserInput,
      true,
      isPossibleDrawNode
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [draggableData]);

  return (
    <div
      css={css`
        position: absolute;
        z-index: 10;
      `}
    >
      <div
        ref={ref}
        id="radar-chart"
        css={css`
          position: absolute;
          width: 100%;
          height: 100%;
        `}
      ></div>
    </div>
  );
}

function DefaultPolygon({
  defaultData,
  radarWidth,
  radarHeight,
  framePadding,
  onDragOutUserInput,
  isDefault = true,
  isViewPolygon = true,
  isPossibleDrawNode = true,
}: IRadarChartDefaultProps) {
  useEffect(() => {
    drawRadarChart(
      "#default-radar-chart",
      "default-radar-chart-line",
      "default-radar-chart-axis",
      "default-radar-chart-legend",
      "default-radar-chart-series",
      isDefault,
      defaultData,
      "#B8B8B8",
      radarWidth,
      radarHeight,
      framePadding,
      onDragOutUserInput,
      isViewPolygon,
      isPossibleDrawNode
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [defaultData, isViewPolygon]);

  return (
    <div
      id="default-radar-chart"
      css={css`
        position: absolute;
        width: 100%;
        height: 100%;
      `}
    />
  );
}

Radar.DraggablePolygon = forwardRef(DraggablePolygon);
Radar.DefaultPolygon = DefaultPolygon;
