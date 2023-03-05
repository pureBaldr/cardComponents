import { mixClass } from "@dadmor/pure-baldr-core";
import { Text } from "@dadmor/pure-baldr-typo-components";
import { ColorType } from "@dadmor/pure-baldr-core";

type Props = {
  firstText?: string;
  secondText?: string;
  className?: string;
  truncate?: boolean;
  color?: ColorType;
};

export const TextCellCardHeader: React.FC<Props> = ({
  firstText,
  secondText,
  className = "",
  truncate = false,
  color = "primary",
}) => {
  return (
    <div className={className}>
      <Text
        size="xl"
        color={color}
        className={mixClass({
          "font-bold leading-5": true,
          truncate: truncate,
        })}
      >
        {firstText}
      </Text>

      <Text
        size="xs"
        className={mixClass({
          "leading-4": true,
          truncate: truncate,
        })}
      >
        {secondText}
      </Text>
    </div>
  );
};
export default TextCellCardHeader;
