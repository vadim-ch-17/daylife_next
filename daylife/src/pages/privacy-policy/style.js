import styled from "styled-components";
import theme from "@/styles/theme";

export const TitleStyles = styled.h2`
    color: ${props => props.color ? props.color : theme.colors.primary};
    font-weight: ${props => props.fontWeight ? props.fontWeight : 'bold'};
    margin-top: ${props => props.marginTop ? props.marginTop : theme.spaces["5xl"] + 'px'};
    margin-bottom: ${props => props.marginBottom ? props.marginBottom : theme.spaces["xl"] + 'px'};
    @media (max-width: 768px) {
        margin-top: ${props => props.mobileMarginTop ? props.mobileMarginTop : '40px'};
        margin-bottom: ${props => props.mobileMarginBottom ? props.mobileMarginBottom : theme.spaces["mb"] + 'px'};
    }

`;

export const ParagraphStyles = styled.p`
    color: ${props => props.color ? props.color : theme.colors.metal};
    font-weight: ${props => props.fontWeight ? props.fontWeight : 'normal'};
    margin-bottom: ${props => props.marginBottom ? props.marginBottom : theme.spaces["lg"] + 'px'};
    @media (max-width: 768px) {
        margin-bottom: ${props => props.mobileMarginBottom ? props.mobileMarginBottom : theme.spaces["md"] + 'px'};
    }
`;