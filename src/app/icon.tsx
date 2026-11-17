import { ImageResponse } from "next/og";

export const size = {
  width: 64,
  height: 64,
};

export const contentType = "image/png";

export default function Icon() {
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
          border: "2px solid #292524",
          borderRadius: "14px",
          color: "#F59E0B",
          fontSize: "30px",
          fontWeight: 700,
          fontFamily: "serif",
          letterSpacing: "-1px",
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
