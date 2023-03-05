import { TextCellCardHeader } from "./..";
import { Color } from "@dadmor/pure-baldr-layout-components";
import { ColorType } from "@dadmor/pure-baldr-core";

type Props = {
  firstText?: string;
  secondText?: string;
  rightActionSlot?: JSX.Element;
  color?: ColorType;
};

export const CardHeader: React.FC<Props> = ({
  rightActionSlot,
  firstText = "Title",
  secondText = "Description",
  color = "primary",
}) => {
  return (
    <div className="flex items-center relative py-6 pr-6 bg-carbon-50 rounded-t-2xl">
      <Color bg={color} className="w-1.5 h-12 mr-5">
        &nbsp;
      </Color>
      <TextCellCardHeader
        className="flex-1"
        firstText={firstText}
        secondText={secondText}
      />
      {rightActionSlot ? rightActionSlot : null}
    </div>
  );
};
export default CardHeader;
