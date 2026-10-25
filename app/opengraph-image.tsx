import { ImageResponse } from "next/og";

export const alt = "APC CARES grassroots support and community empowerment";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
    return new ImageResponse(
        (
            <div
                style={{
                    backgroundColor: "#1e4544",
                    color: "#ffffff",
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                    justifyContent: "space-between",
                    padding: "64px 72px",
                    width: "100%",
                }}
            >
                <div style={{ alignItems: "center", display: "flex", gap: 20 }}>
                    <div style={{ backgroundColor: "#de232b", height: 8, width: 56 }} />
                    <span style={{ fontSize: 30, fontWeight: 800 }}>APC CARES</span>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
                    <span style={{ color: "#5cc3e6", fontSize: 22, fontWeight: 700 }}>
                        COMMUNITY ACCESS TO RESOURCES &amp; EMPOWERMENT SERVICES
                    </span>
                    <span style={{ fontSize: 64, fontWeight: 800, lineHeight: 1.08, maxWidth: 980 }}>
                        Grassroots support. Community empowerment.
                    </span>
                </div>
                <span style={{ color: "#d5e3de", fontSize: 22 }}>
                    Connecting communities across Nigeria with resources and opportunity.
                </span>
            </div>
        ),
        size,
    );
}