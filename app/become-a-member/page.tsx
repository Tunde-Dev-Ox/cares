import type { Metadata } from "next";
import GetInvolvedForm from "./get-involved-form";

export const metadata: Metadata = {
  title: "Become a member | APC CARES | Grassroots Participation",
  description:
    "Join APC CARES to support community mobilisation, grassroots empowerment, and practical development across Nigeria.",
  alternates: {
    canonical: "/become-a-member",
  },
};

export default function GetInvolvedPage() {
  return <GetInvolvedForm />;
}
