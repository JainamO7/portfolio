import { ImageResponse } from "next/og";

export const size = {
  width: 180,
  height: 180,
};

export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#1C1917",
          border: "4px solid #292524",
          borderRadius: "36px",
          color: "#F59E0B",
          fontSize: "84px",
          fontWeight: 700,
          fontFamily: "serif",
          letterSpacing: "-3px",
        }}
      >
        JK
      </div>
    ),
    {
      ...size,
    }
  );
}
