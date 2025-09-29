import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";

// Registering plugins once prevents tree-shaking issues and ensures compatibility.
gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother);

export { gsap, useGSAP, ScrollTrigger, ScrollSmoother };
