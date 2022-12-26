declare type ButtonCommonProps = {
    BackgroundColor?: string;
    children: string;
    TextColor?: string;
};
declare type ButtonEleProps = ButtonCommonProps & {
    Type: "button" | "submit";
};
declare type ButtonAnchorProps = ButtonCommonProps & {
    Href: string;
};
export declare type ButtonProps = ButtonEleProps | ButtonAnchorProps;
export declare const Button: (props: ButtonProps) => import("solid-js").JSX.Element;
export {};
