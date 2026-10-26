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
          background: "linear-gradient(135deg, #54C5F8 0%, #0175C2 100%)",
          borderRadius: "16px",
          color: "#ffffff",
          fontSize: "32px",
          fontWeight: 900,
          fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
          letterSpacing: "-1.5px",
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
