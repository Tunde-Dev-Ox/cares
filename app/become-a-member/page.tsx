import type { Metadata } from "next";
import MemberApplicationForm from "./memberApplicationForm";

export const metadata: Metadata = {
  title: "Become a member | APC Cares | Grassroots Participation",
  description:
    "Join APC Cares to support community mobilisation, grassroots empowerment, and practical development across Nigeria.",
  alternates: {
    canonical: "/become-a-member",
  },
};

export default function MemberApplicationPage() {
  return <MemberApplicationForm />;
}
