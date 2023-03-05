import { ReactNode } from "react";
import {
  bgMix,
  mixClass,
  paddingxMix,
  paddingyMix,
  shadowMix,
} from "@dadmor/pure-baldr-core";
import {
  DimentionsType,
  ColorType,
  ShadowType,
} from "@dadmor/pure-baldr-core";


type Props = {
  className?: string;
  truncate?: boolean;
  bg?: ColorType;
  shadow?: ShadowType;
  spacing?: DimentionsType;
  paddingX?: DimentionsType;
  paddingY?: DimentionsType;
  children: ReactNode;
  
}
export const SubCard: React.FC<Props> = ({
  className = "",
  children,
  shadow = null,
  bg = "gray-light",
  spacing = "lg",
  paddingX,
  paddingY,
}) => {
  return (
    <div
      className={mixClass({
        "border-b rounded-lg": true,
        ...bgMix(bg),
        ...shadowMix(shadow),
        ...paddingxMix(paddingX ? paddingX : spacing),
        ...paddingyMix(paddingY ? paddingY : spacing),
        [className]: true,
      })}
    >
      {children}
    </div>
  );
};
export default SubCard;
