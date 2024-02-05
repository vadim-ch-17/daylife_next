import styled from "styled-components";
import theme from "@/styles/theme";

export const ArrowContainer = styled.div`

.svg.bottom {
    stroke:  var(--stroke);
    stroke-miterlimit: var(--stroke-miterlimit);
    stroke-width: var(--stroke-width);
    fill-rule: evenodd;
    fill: var(--fill);
}
.svg.bottom .svg-elem-1 {
    stroke-dashoffset: var(--stroke-dashoffset);
    stroke-dasharray: var(--stroke-dasharray);
    fill: var(--fill);
    stroke-width: var(--stroke-width);
    -webkit-transition: stroke-dashoffset 0.7s linear var(--transition);
    transition: stroke-dashoffset 0.7s linear var(--transition);
}

.svg.bottom.active .svg-elem-1 {
    stroke-dashoffset: var(--stroke-dasharray-active);
}

.svg.bottom .svg-elem-2 {
    stroke-dashoffset: var(--stroke-dashoffset);
    stroke-dasharray: var(--stroke-dasharray);
    fill: var(--fill);
    stroke-width: var(--stroke-width);
    -webkit-transition: stroke-dashoffset 0.7s linear var(--transition);
    transition: stroke-dashoffset 0.7s linear var(--transition);
}

.svg.bottom.active .svg-elem-2 {
    stroke-dashoffset: var(--stroke-dasharray-active);
}
.svg.bottom .svg-elem-3 {
    stroke-dashoffset: var(--stroke-dashoffset);
    stroke-dasharray: var(--stroke-dasharray);
    fill: var(--fill);
    stroke-width: var(--stroke-width);
    -webkit-transition: stroke-dashoffset 0.7s linear var(--transition);
    transition: stroke-dashoffset 0.7s linear var(--transition);
}
.svg.bottom.active .svg-elem-3 {
    stroke-dashoffset: var(--stroke-dasharray-active);
}
`;