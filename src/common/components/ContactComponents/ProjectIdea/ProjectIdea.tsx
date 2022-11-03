import React, { HTMLInputTypeAttribute, useRef } from "react";
import { styled } from "../../../../design/stitches.config";
import { useForm, SubmitHandler } from "react-hook-form";
import Button from "../../Button/Button";
type Props = {};

type InputProps = {
  type?: HTMLInputTypeAttribute;
  name?: string;
  email?: string;
  projectDetail?: string;
  budget?: number | string;
  timeline?: string;
};

const ProjectIdea = (props: Props) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<InputProps>();

  const onSubmit = handleSubmit((data) => {
    console.log(JSON.stringify(data));
  });

  const ref = React.createRef<HTMLButtonElement>();

  return (
    <ProjectIdeaWrapper>
      <ProjectIdeaTextWrapper>
        <ProjectIdeaHeading>Got a project in mind?</ProjectIdeaHeading>
        <ProjectIdeaText>
          Use the form to give me as much detail as possible and I’ll get back
          to you as soon as I can.
        </ProjectIdeaText>
      </ProjectIdeaTextWrapper>

      <Form onSubmit={onSubmit}>
        <InputWrapper>
          <InputContainer>
            <Label>Your Name</Label>
            <Input
              {...register("name", { required: true, maxLength: 20 })}
              type={"text"}
              inputSize={"normal"}
              placeholder={"Name"}
              aria-invalid={errors.name ? "true" : "false"}
            />
            {errors.name?.type === "required" && (
              <ErrorText role="alert">Your Name is required</ErrorText>
            )}
          </InputContainer>
          <InputContainer>
            <Label>Your Email</Label>
            <Input
              {...register("email", {
                required: true,
                pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i,
              })}
              type={"text"}
              inputSize={"normal"}
              placeholder={"Email"}
            />
            {errors.email?.type === "required" && (
              <ErrorText role="alert">Your Email is required</ErrorText>
            )}
          </InputContainer>
        </InputWrapper>
        <Label>Your Project Details</Label>
        <Input
          {...register("projectDetail")}
          type={"textarea"}
          inputSize={"textarea"}
          placeholder={"Project details"}
        />
        {errors.projectDetail?.type === "required" && (
          <ErrorText role="alert">Project Detail is required</ErrorText>
        )}
        <InputWrapper>
          <InputContainer>
            <Label>Your Budget</Label>
            <Input
              {...register("budget")}
              type={"text"}
              inputSize={"normal"}
              placeholder={"Budget Range"}
            />
            {errors.budget?.type === "required" && (
              <ErrorText role="alert">Budget Range is required</ErrorText>
            )}
          </InputContainer>
          <InputContainer>
            <Label>TimeLine</Label>
            <Input
              {...register("timeline")}
              type={"text"}
              inputSize={"normal"}
              placeholder={"Timeline"}
            />

            {errors.timeline?.type === "required" && (
              <ErrorText role="alert">Timeline is required</ErrorText>
            )}
          </InputContainer>
        </InputWrapper>
        <StyledButton bc={"linear"} type={"submit"}>
          Send Message
        </StyledButton>
      </Form>
    </ProjectIdeaWrapper>
  );
};

const ProjectIdeaWrapper = styled("div", {
  minWidth: "$maxBound",
  height: "auto",
  backgroundColor: "$SubtleBackground",
  display: "flex",
  flexFlow: "row nowrap",
  justifyContent: "space-between",
  padding: "$x20",
  "@tablet": {
    flexFlow: "column",
    gap: "$x2",
    padding: "$x20 $x2",
    alignItems: "center",
    minWidth: "$maxBound",
  },
  "@mobile": {
    flexFlow: "column",
    padding: "$x20 $x2",
    gap: "$x2",
    alignItems: "flex-start",
    minWidth: "$maxBound",
  },
});

const ProjectIdeaTextWrapper = styled("div", {
  backgroundColor: "$SubtleBackground",
  display: "flex",
  flexFlow: "column nowrap",
  gap: "$x4",
  justifyContent: "center",
  alignItems: "flex-start",
  padding: "$x16",
  "@tablet": {
    width: "100%",
    padding: "$x10",
  },
  "@mobile": { width: "100%", padding: "$x8" },
});

const ProjectIdeaHeading = styled("h1", {
  color: "$HighContrastText",
  fontFamily: "$bodyFont",
  fontWeight: "$semiBold",
  fontSize: "$32px",
  "@tablet": {
    fontSize: "$24px",
  },
  "@mobile": {
    fontSize: "$16px",
  },
});

const ProjectIdeaText = styled("p", {
  color: "$LowContrastText",
  fontFamily: "$bodyFont",
  fontWeight: "$lighter",
  fontSize: "$16px",
  "@tablet": {
    fontSize: "$14px",
  },
  "@mobile": {
    fontSize: "$12px",
  },
});

const Form = styled("form", {
  display: "flex",
  backgroundColor: "$SubtleBackground",
  flexFlow: "column nowrap",
  gap: "$x4",
  justifyContent: "center",
  alignItems: "flex-start",
  width: "$x100",
  height: "auto",
  "@tablet": {
    width: "$x80",
  },
  "@mobile": {
    width: "100%",
    alignItems: "center",
  },
});

const InputWrapper = styled("div", {
  display: "flex",
  flexFlow: "row nowrap",
  gap: "$x8",
  justifyContent: "space-between",
  width: "$x50",
  "@tablet": {
    width: "$x30",
  },
  "@mobile": {
    flexFlow: "column nowrap",
    width: "70%",
    alignItems: "center",
  },
});

const InputContainer = styled("div", {
  display: "flex",
  flexFlow: "column",
  gap: "$x2",
  "@mobile": {
    width: "100%",
  },
});
const Label = styled("label", {
  fontFamily: "$bodyFont",
  fontWeight: "$bold",
  fontSize: "$14px",
  "@tablet": {
    fontSize: "$12px",
  },
  "@mobile": {
    fontSize: "$10px",
    width: "70%",
  },
});

const Input = styled("input", {
  background: "$HoveredUIElementBackground",
  border: "none",
  borderRadius: "8px",
  "&::placeholder": {
    padding: "$x4",
  },
  variants: {
    inputSize: {
      normal: {
        width: "$x46",
        height: "$x14",

        "@mobile": {
          width: "100%",
        },
      },
      textarea: {
        width: "$x100",
        height: "$x35",
        "@mobile": {
          width: "70%",
        },
      },
    },
  },
});

const StyledButton = styled(Button, {
  width: "$x100",
  height: "$x16",
  "@tablet": {
    width: "$x100",
    height: "$x14",
  },
  "@mobile": {
    width: "70%",
    height: "$x14",
  },
});

const ErrorText = styled("p", {
  color: "red",
  fontSize: "$14px",
  "@tablet": {
    fontSize: "$12px",
  },
  "@mobile": {
    fontSize: "$10px",
  },
});
export default ProjectIdea;
