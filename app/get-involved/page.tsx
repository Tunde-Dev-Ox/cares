import type { Metadata } from "next";
import GetInvolvedForm from "./get-involved-form";

export const metadata: Metadata = {
  title: "Get Involved | APC CARES | Volunteer & Grassroots Participation",
  description:
    "Volunteer with APC CARES to support community mobilisation, grassroots empowerment, and practical development across Nigeria.",
  alternates: {
    canonical: "/get-involved",
  },
};

export default function GetInvolvedPage() {
  return <GetInvolvedForm />;
}
