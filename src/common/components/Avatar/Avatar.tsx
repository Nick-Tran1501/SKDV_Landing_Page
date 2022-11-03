import { styled } from "../../../../src/design/stitches.config";
import Image from "next/future/image";
import React from "react";
import AvatarImage from "../../../image/SKDV-logo.png";
type Props = {};

const Avatar = (props: Props) => {
  return (
    <AvatarWrapper>
      <AvatarImageContainer
        src={AvatarImage}
        alt={"Logo"}
        width={40}
        height={40}
      />
      <AvatarImageContainers
        src={AvatarImage}
        alt={"Logo"}
        width={40}
        height={40}
      />
    </AvatarWrapper>
  );
};
const AvatarWrapper = styled("div", {});

const AvatarImageContainer = styled(Image, {
  border: "1px solid",
  borderRadius: "50%",
  position: "relative",
  "@mobile": {
    width: "$x5",
    height: "$x5",
  },
});
const AvatarImageContainers = styled(Image, {
  border: "1px solid",
  borderRadius: "50%",
  position: "relative",
  right: "10px",
  "@mobile": {
    width: "$x5",
    height: "$x5",
  },
});

export default Avatar;
