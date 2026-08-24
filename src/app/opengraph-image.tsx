import { ImageResponse } from "next/og";

export const alt = "Usama Puward - AI/ML Engineer & Full-Stack Developer Portfolio";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #060809 0%, #0a0e13 50%, #050b10 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "60px 70px",
          fontFamily: "sans-serif",
          position: "relative",
          border: "2px solid rgba(0, 240, 255, 0.4)",
          boxSizing: "border-box",
        }}
      >
        {/* Ambient Cyan Glows */}
        <div
          style={{
            position: "absolute",
            top: "-100px",
            right: "-100px",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(0,240,255,0.25) 0%, rgba(0,240,255,0) 70%)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-100px",
            left: "-100px",
            width: "450px",
            height: "450px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(0,240,255,0.15) 0%, rgba(0,240,255,0) 70%)",
            display: "flex",
          }}
        />

        {/* Top Header Tag */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              padding: "8px 18px",
              background: "rgba(0, 240, 255, 0.1)",
              border: "1px solid rgba(0, 240, 255, 0.5)",
              color: "#00f0ff",
              fontSize: 18,
              fontWeight: "bold",
              letterSpacing: "2px",
            }}
          >
            ⚡ // SYS.ID: USAMA_PUWARD
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              color: "#00f0ff",
              fontSize: 16,
              letterSpacing: "3px",
              fontWeight: "bold",
            }}
          >
            [ SYSTEM: ACTIVE ]
          </div>
        </div>

        {/* Center Main Info */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "12px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              fontSize: 68,
              fontWeight: 900,
              color: "#ffffff",
              letterSpacing: "-1px",
              lineHeight: 1.1,
              textTransform: "uppercase",
              textShadow: "0 0 30px rgba(0, 240, 255, 0.3)",
            }}
          >
            <span>USAMA&nbsp;</span>
            <span style={{ color: "#00f0ff" }}>PUWARD</span>
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 28,
              fontWeight: 700,
              color: "#00f0ff",
              letterSpacing: "4px",
              textTransform: "uppercase",
            }}
          >
            AI/ML ENGINEER &amp; FULL-STACK DEVELOPER
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 20,
              color: "#9ca3af",
              maxWidth: "880px",
              lineHeight: 1.5,
              marginTop: "8px",
            }}
          >
            Building intelligent AI systems, neural coding assistants, deep learning pipelines, and robust scalable web platforms.
          </div>
        </div>

        {/* Bottom Bar: Badges and Details */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingTop: "20px",
            borderTop: "1px dashed rgba(0, 240, 255, 0.3)",
            width: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              gap: "10px",
              flexWrap: "wrap",
            }}
          >
            {["Next.js", "Python", "FastAPI", "TensorFlow", "React", "Docker", "AutoGen"].map(
              (tech) => (
                <div
                  key={tech}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    padding: "6px 14px",
                    background: "rgba(255, 255, 255, 0.05)",
                    border: "1px solid rgba(0, 240, 255, 0.3)",
                    color: "#ffffff",
                    fontSize: 15,
                    fontWeight: "bold",
                    letterSpacing: "1px",
                  }}
                >
                  {tech}
                </div>
              )
            )}
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              color: "#00f0ff",
              fontSize: 18,
              fontWeight: "bold",
              letterSpacing: "1px",
            }}
          >
            usamapuward.netlify.app
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
